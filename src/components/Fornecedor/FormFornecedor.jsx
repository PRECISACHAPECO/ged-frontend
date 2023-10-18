// import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'

//* Default Form Components
import Fields from 'src/components/Defaults/Formularios/Fields'
import Block from 'src/components/Defaults/Formularios/Block'
import DialogFormStatus from '../Defaults/Dialogs/DialogFormStatus'

//* Custom components
import Input from 'src/components/Form/Input'
import AnexoModeView from 'src/components/Anexos/ModeView'
import { Alert, Card, CardContent, FormControl, Grid, Typography } from '@mui/material'
import Router from 'next/router'
import { backRoute, toastMessage, statusDefault } from 'src/configs/defaultConfigs'
import { api } from 'src/configs/api'
import FormHeader from 'src/components/Defaults/FormHeader'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'
import { NotificationContext } from 'src/context/NotificationContext'
import Loading from 'src/components/Loading'
import toast from 'react-hot-toast'
import { SettingsContext } from 'src/@core/context/settingsContext'
import DialogFormConclusion from '../Defaults/Dialogs/DialogFormConclusion'
import FormNotification from './Dialogs/Notification/FormNotification'
import NewFornecedor from 'src/components/Fornecedor/Dialogs/NewFornecedor'
import FormFornecedorProdutos from './FormFornecedorProdutos'

const FormFornecedor = ({ id, makeFornecedor }) => {
    const { user, loggedUnity } = useContext(AuthContext)
    const [isLoading, setLoading] = useState(false)
    const [loadingFileGroup, setLoadingFileGroup] = useState(false) //? loading de carregamento do arquivo
    const [loadingFileProduct, setLoadingFileProduct] = useState(false) //? loading de carregamento do arquivo
    const [loadingFileItem, setLoadingFileItem] = useState(false) //? loading de carregamento do arquivo
    const [savingForm, setSavingForm] = useState(false)
    const [validateForm, setValidateForm] = useState(false) //? Se true, valida campos obrigatórios
    const [hasFormPending, setHasFormPending] = useState(true) //? Tem pendencia no formulário (já vinculado em formulário de recebimento, não altera mais o status)
    const [canApprove, setCanApprove] = useState(true) //? Se true, pode aprovar o formulário
    const [unidade, setUnidade] = useState(null)
    const [produtos, setProdutos] = useState([])
    const [grupoAnexo, setGrupoAnexo] = useState([])
    const [status, setStatus] = useState(null)
    const { createNewNotification } = useContext(NotificationContext)
    const [openModalStatus, setOpenModalStatus] = useState(false)
    const [field, setField] = useState([])
    const [link, setLink] = useState(null)
    const [blocos, setBlocos] = useState([])
    const [movimentacao, setMovimentacao] = useState(null)
    const [info, setInfo] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [openModalNewFornecedor, setOpenModalNewFornecedor] = useState(false)
    const [listErrors, setListErrors] = useState({ status: false, errors: [] })
    const { settings } = useContext(SettingsContext)
    const { setId } = useContext(RouteContext)

    const [canEdit, setCanEdit] = useState({
        status: false,
        message: 'Você não tem permissões',
        messageType: 'info'
    })

    //! Se perder Id, copia do localstorage
    const router = Router
    const type = id && id > 0 ? 'edit' : 'new'
    const staticUrl = router.pathname

    const {
        reset,
        register,
        getValues,
        setValue,
        control,
        watch,
        handleSubmit,
        clearErrors,
        setError,
        formState: { errors }
    } = useForm()

    console.log('formFornecedor errors: ', errors)

    //* Reabre o formulário pro fornecedor alterar novamente se ainda nao estiver vinculado com recebimento
    const changeFormStatus = async (status, observacao) => {
        const data = {
            status: status,
            observacao: observacao,
            auth: {
                usuarioID: user.usuarioID,
                papelID: user.papelID,
                unidadeID: loggedUnity.unidadeID
            }
        }

        try {
            setSavingForm(true)
            await api.post(`${staticUrl}/changeFormStatus/${id}`, data).then(response => {
                toast.success(toastMessage.successUpdate)
                setSavingForm(false)

                //? Trata notificações
                manageNotifications(status, null, null)
            })
        } catch (error) {
            console.log(error)
        }
    }

    //? handleSubmit do modal gerar notificação
    const sendNotification = async values => {
        try {
            if (!values.email && !values.alerta) return toast.error('Selecione ao menos um tipo de notificação!')

            //* Gera notificação (podendo ser alerta e/ou email)
            const data = {
                titulo: values.assunto,
                descricao: values.descricao,
                url: '/formularios/fornecedor/',
                urlID: id,
                tipoNotificacaoID: 3, //? fornecedor
                usuarioGeradorID: user.usuarioID,
                usuarioID: 0, //? Todos da unidade
                unidadeID: unidade.fornecedor.unidadeID, //? UnidadeID do fornecedor (que verá a notificação)
                papelID: 2, //? Notificação pro fornecedor
                //? Email / Alerta
                email: values.email,
                alerta: values.alerta
            }
            console.log('🚀 ~ data dat notificação:', data)
            createNewNotification(data)

            //* Envia e-mail
            if (values.email) {
                const data = {
                    values: values,
                    auth: {
                        id: id,
                        usuarioID: user.usuarioID,
                        papelID: user.papelID,
                        unidadeID: loggedUnity.unidadeID
                    }
                }
                const response = await api.post(`${staticUrl}/sendNotification`, data)
            }

            //* Envia toast de sucesso
            const toastMessage =
                values.alerta && values.email
                    ? 'E-mail e alerta enviados com sucesso!'
                    : values.alerta && !values.email
                    ? 'Alerta criado com sucesso!'
                    : !values.alerta && values.email
                    ? 'E-mail enviado com sucesso!'
                    : null

            toast.success(toastMessage)
        } catch (error) {
            console.log(error)
        }
    }

    const copyLinkForm = () => {
        navigator.clipboard.writeText(link)
        toast.success('Link copiado com sucesso!')
    }

    // Nomes e rotas dos relatórios passados para o componente FormHeader/MenuReports
    const objNovoFormulario = {
        id: 1,
        name: 'Gerar novo formulário',
        description: 'Gerar um novo formulário de preenchimento para este fornecedor.',
        component: <NewFornecedor cnpj={unidade?.fornecedor?.cnpj} />,
        route: null,
        type: null,
        modal: true,
        action: makeFornecedor,
        size: 'lg',
        icon: 'fluent:form-new-20-regular',
        identification: null
    }
    const objGerarNotificacao = {
        id: 2,
        name: 'Gerar notificação',
        description: 'Gerar uma nova notificação para o fornecedor, podendo ser um e-mail e/ou alerta do sistema.',
        component: (
            <FormNotification
                data={{
                    email: field.find(row => row.nomeColuna == 'email')?.email
                }}
            />
        ),
        route: null,
        type: null,
        modal: true,
        action: sendNotification,
        icon: 'cil:bell',
        identification: null
    }
    const objCopiarLink = {
        id: 3,
        name: 'Copiar link do formulário',
        description: 'Copiar o link deste formulário.',
        component: <NewFornecedor />,
        route: null,
        type: null,
        action: copyLinkForm,
        modal: false,
        icon: 'solar:copy-outline',
        identification: null
    }
    const objRelatorio = {
        id: 4,
        name: 'Formulário do fornecedor',
        type: 'report',
        papelID: user.papelID,
        fornecedorID: id,
        unidadeID: loggedUnity.unidadeID,
        icon: 'fluent:print-24-regular'
    }
    // Monta array de ações baseado nas permissões
    const actionsData = []
    if (user.papelID == 1) actionsData.push(objNovoFormulario)
    actionsData.push(objGerarNotificacao)
    actionsData.push(objCopiarLink)
    actionsData.push(objRelatorio)

    const verifyFormPending = async () => {
        try {
            const parFormularioID = 1 //? Fornecedor
            await api.post(`${staticUrl}/verifyFormPending/${id}`, { parFormularioID }).then(response => {
                setHasFormPending(response.data) //! true/false
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getNewData = () => {
        try {
            setLoading(true)
            api.post(`${backRoute(staticUrl)}/new/getData`, { unidadeID: loggedUnity.unidadeID }).then(response => {
                console.log('getNewData: ', response.data)

                setField(response.data.fields)
                setBlocos(response.data.blocos)
                setInfo(response.data.info)

                //* Insere os dados no formulário
                reset(response.data)

                setCanEdit({
                    status: true,
                    message:
                        'Esse formulário já foi concluído! Para alterá-lo é necessário atualizar seu Status para "Em preenchimento" através do botão "Status"!',
                    messageType: 'info'
                })

                setLoading(false)
            })
        } catch (error) {
            console.log('🚀 ~ error:', error)
        }
    }

    const getData = () => {
        setLoading(true)
        console.log('🚀 ~ getData: ', staticUrl, type, loggedUnity.unidadeID, id)
        if (id) {
            api.post(`${staticUrl}/getData/${id}`, { type: type, unidadeID: loggedUnity.unidadeID }).then(response => {
                console.log('getData: ', response.data)

                setField(response.data.fields)
                setProdutos(response.data.produtos)
                setBlocos(response.data.blocos)
                setGrupoAnexo(response.data.grupoAnexo)
                setInfo(response.data.info)
                setUnidade(response.data.unidade)
                setLink(response.data.link)
                setMovimentacao(response.data.ultimaMovimentacao)
                verifyIfCanAproveForm(response.data.blocos) //? Verifica se há alguma resposta que bloqueie o formulário, se sim, o mesmo não pode ser aprovado

                //* Insere os dados no formulário
                reset(response.data)

                let objStatus = statusDefault[response?.data?.info?.status]
                setStatus(objStatus)

                setCanEdit({
                    status: user.papelID == 2 && response.data.info.status < 40 ? true : false,
                    message:
                        user.papelID == 2 && response.data.info.status >= 40
                            ? 'Esse formulário já foi concluído e enviado pra fábrica, não é mais possível alterar as informações!'
                            : user.papelID == 1 && response.data.info.status < 40
                            ? 'Somente o fornecedor pode alterar as informações deste formulário!'
                            : user.papelID == 1 && response.data.info.status == 40
                            ? 'Este formulário está aguardando aprovação'
                            : null,
                    messageType: user.papelID == 2 ? 'warning' : 'info'
                })

                verifyFormPending()
                setLoading(false)
            })
        }
    }

    const checkErrors = () => {
        clearErrors()
        let hasErrors = false
        let arrErrors = []

        //? Header
        field?.forEach((field, index) => {
            const fieldName = field.tabela ? `fields[${index}].${field.tabela}` : `fields[${index}].${field.nomeColuna}`
            const fieldValue = getValues(fieldName)
            if (field.obrigatorio === 1 && !fieldValue) {
                setError(fieldName, {
                    type: 'manual',
                    message: 'Campo obrigatório'
                })
                arrErrors.push(field?.nomeCampo)
                hasErrors = true
            }
        })

        //? Produtos
        if (produtos && produtos.length > 0) {
            produtos.forEach((produto, indexProduto) => {
                produto.produtoAnexosDescricao.forEach((anexo, indexAnexo) => {
                    if (anexo.obrigatorio === 1 && anexo.anexos.length == 0) {
                        setError(`produtos[${indexProduto}].produtoAnexosDescricao[${indexAnexo}].anexos`, {
                            type: 'manual',
                            message: 'Campo obrigatório'
                        })
                        arrErrors.push(`Anexo: ${produto?.nome} / ${anexo?.nome}`)
                        hasErrors = true
                    }
                })
            })
        }

        //? Blocos
        blocos.forEach((block, indexBlock) => {
            block.itens.forEach((item, indexItem) => {
                console.log('🚀 ~ checkErrors -> item: ', item)

                const fieldValue = getValues(`blocos[${indexBlock}].itens[${indexItem}].resposta`)
                //? Valida resposta do item
                if (item?.obrigatorio === 1 && !fieldValue) {
                    setError(`blocos[${indexBlock}].itens[${indexItem}].resposta`, {
                        type: 'manual',
                        message: 'Campo obrigatário'
                    })
                    arrErrors.push(item?.nome)
                    hasErrors = true
                }

                //? Valida anexos do item
                if (
                    item.respostaConfig &&
                    item.respostaConfig.anexo == 1 &&
                    item.respostaConfig.anexosSolicitados.length > 0
                ) {
                    item.respostaConfig.anexosSolicitados.forEach((anexo, indexAnexo) => {
                        if (anexo.obrigatorio == 1 && anexo.anexos.length == 0) {
                            setError(
                                `blocos[${indexBlock}].itens[${indexItem}].respostaConfig.anexosSolicitados[${indexAnexo}].anexos`,
                                {
                                    type: 'manual',
                                    message: 'Campo obrigatário'
                                }
                            )
                            arrErrors.push(`Anexo: ${item?.nome} / ${anexo?.nome}`)
                            hasErrors = true
                        }
                    })
                }
            })
        })

        //? Grupos de anexo
        if (grupoAnexo && grupoAnexo.length > 0) {
            grupoAnexo.forEach((grupo, indexGrupo) => {
                grupo.itens.forEach((item, indexItem) => {
                    if (item.obrigatorio === 1 && item.anexos.length == 0) {
                        console.log('gera erro grupo')
                        setError(`grupoAnexo[${indexGrupo}].itens[${indexItem}].anexos`, {
                            type: 'manual',
                            message: 'Campo obrigatário'
                        })
                        arrErrors.push(`Anexo: ${grupo?.nome} / ${item?.nome}`)
                        hasErrors = true
                    }
                })
            })
        }

        setListErrors({
            status: hasErrors,
            errors: arrErrors
        })
    }

    const getAddressByCep = async cepString => {
        if (cepString.length === 9) {
            const cep = cepString.replace(/[^0-9]/g, '')
            try {
                const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`)
                if (response.data.localidade) {
                    field.forEach(async (row, index) => {
                        if (
                            row.nomeColuna === 'logradouro' ||
                            row.nomeColuna === 'bairro' ||
                            row.nomeColuna === 'cidade' ||
                            row.nomeColuna === 'estado'
                        ) {
                            await setValue(`fields[${index}].logradouro`, response.data.logradouro)
                            await setValue(`fields[${index}].bairro`, response.data.bairro)
                            await setValue(`fields[${index}].cidade`, response.data.localidade)
                            await setValue(`fields[${index}].estado`, response.data.uf)
                        }
                    })

                    toast.success('Endereço encontrado!')
                } else {
                    toast.error('Endereço não encontrado!')
                }
            } catch (error) {
                // Handle error
                console.error(error)
            }
        }
    }

    const handleSendForm = () => {
        checkErrors()
        setOpenModal(true)
        setValidateForm(true)
    }

    const verifyIfCanAproveForm = blocos => {
        let tempCanApprove = true
        blocos.forEach(block => {
            block.itens.forEach(item => {
                if (item.respostaConfig && item.respostaConfig.bloqueiaFormulario == 1) {
                    tempCanApprove = false
                }
            })
        })
        setCanApprove(tempCanApprove)
    }

    const conclusionForm = async values => {
        values['conclusion'] = true
        await handleSubmit(onSubmit)(values)
    }

    //? Trata notificações
    const manageNotifications = (status, nãoConformidade, idNãoConformidade) => {
        const statusName =
            status == 30
                ? 'Em preenchimento'
                : status == 40
                ? 'Concluído'
                : status == 50
                ? 'Reprovado'
                : status == 60
                ? 'Aprovado parcialmente'
                : status == 70
                ? 'Aprovado'
                : 'Pendente'

        //? Fornecedor concluiu o formulário
        const data = {
            titulo: `Formulário de Fornecedor ${statusName}`,
            descricao: `O formulário de Fornecedor #${id} está ${statusName}.`,
            url: '/formularios/fornecedor/',
            urlID: id,
            tipoNotificacaoID: 6, //? fornecedor
            usuarioGeradorID: user.usuarioID,
            usuarioID: 0, //? Todos da unidade
            unidadeID: loggedUnity.unidadeID, //? UnidadeID da fábrica (que verá a notificação)
            papelID: 1 //? Notificação pra fábrica
        }

        if (data) {
            createNewNotification(data) //* Cria nova notificação
            if (nãoConformidade) {
                //? Gera não conformidade
                const dataNãoConformidade = {
                    titulo: `Fornecedor gerado`,
                    descricao: `O formulário de Fornecedor #${id} está ${statusName} e gerou uma não conformidade.`,
                    url: '/formularios/fornecedor/nao-conformidade/',
                    urlID: idNãoConformidade,
                    tipoNotificacaoID: 5, //? Não conformidade
                    usuarioGeradorID: user.usuarioID,
                    usuarioID: 0, //? Todos da unidade
                    unidadeID: loggedUnity.unidadeID, //? UnidadeID da fábrica (que verá a notificação)
                    papelID: 1 //? Notificação pra fábrica
                }
                createNewNotification(dataNãoConformidade)
            }
        }
    }

    const onSubmit = async (values, param = false) => {
        console.log('🚀 ~ onSubmit: ', values.blocos[0].itens[0])
        // return

        if (param.conclusion === true) {
            values['status'] = user && user.papelID == 1 ? param.status : 40 //? Seta o status somente se for fábrica
            values['obsConclusao'] = param.obsConclusao
        }

        const data = {
            form: values,
            auth: {
                usuarioID: user.usuarioID,
                papelID: user.papelID,
                unidadeID: loggedUnity.unidadeID
            }
        }

        try {
            if (type == 'edit') {
                setSavingForm(true)
                await api.post(`${staticUrl}/updateData/${id}`, data).then(response => {
                    console.log('onSubmit -> retornou -> ', response.data)

                    toast.success(toastMessage.successUpdate)
                    setSavingForm(false)
                    let idNãoConformidade = null

                    //? Se gerou uma não conformidade, redireciona pra não conformidade gerada
                    if (response.data && response.data.naoConformidade && response.data.id > 0) {
                        router.push('/formularios/fornecedor/nao-conformidade/')
                        setId(response.data.id)
                        idNãoConformidade = response.data.id
                    }

                    //? Trata notificações
                    manageNotifications(values.status, values.naoConformidade, idNãoConformidade)
                })
            } else if (type == 'new') {
                await api.post(`${backRoute(staticUrl)}/insertData`, data).then(response => {
                    router.push(`${backRoute(staticUrl)}`) //? backRoute pra remover 'novo' da rota
                    setId(response.data)
                    toast.success(toastMessage.successNew)
                })
            } else {
                toast.error(toastMessage.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Quando selecionar um arquivo, o arquivo é adicionado ao array de anexos
    const handleFileSelectProduct = async (event, item) => {
        setLoadingFileProduct(true)
        const selectedFile = event.target.files

        if (selectedFile && selectedFile.length > 0) {
            const formData = new FormData()
            for (let i = 0; i < selectedFile.length; i++) {
                formData.append('files[]', selectedFile[i])
            }

            formData.append(`usuarioID`, user.usuarioID)
            formData.append(`unidadeID`, loggedUnity.unidadeID)
            formData.append(`produtoAnexoID`, item.produtoAnexoID ?? null)

            await api
                .post(`${staticUrl}/saveAnexo/${id}/produto/${user.usuarioID}/${unidade.unidadeID}`, formData)
                .then(response => {
                    setLoadingFileProduct(false)
                    console.log('response: ', response.data)

                    toast.success('Anexo adicionado com sucesso!')

                    //? Atualiza produtos
                    const updatedProdutos = produtos.map(produto => {
                        if (produto.produtoID == item.produtoID) {
                            return {
                                ...produto,
                                produtoAnexosDescricao: produto.produtoAnexosDescricao.map(row => {
                                    if (row.produtoAnexoID == item.produtoAnexoID) {
                                        return {
                                            ...row,
                                            anexos: [...row.anexos, ...response.data]
                                        }
                                    }
                                    return row
                                })
                            }
                        }
                        return produto
                    })
                    setProdutos(updatedProdutos)
                })
                .catch(error => {
                    setLoadingFileProduct(false)
                    toast.error(error.response?.data?.message ?? 'Erro ao atualizar anexo, tente novamente!')
                })
        }
    }

    const handleFileSelectGroup = async (event, item) => {
        setLoadingFileGroup(true)
        const selectedFile = event.target.files

        if (selectedFile && selectedFile.length > 0) {
            const formData = new FormData()
            for (let i = 0; i < selectedFile.length; i++) {
                formData.append('files[]', selectedFile[i])
            }
            formData.append(`usuarioID`, user.usuarioID)
            formData.append(`unidadeID`, loggedUnity.unidadeID)
            formData.append(`grupoAnexoItemID`, item.grupoAnexoItemID ?? null)

            await api
                .post(`${staticUrl}/saveAnexo/${id}/grupo-anexo/${user.usuarioID}/${unidade.unidadeID}`, formData)
                .then(response => {
                    setLoadingFileGroup(false)

                    toast.success('Anexo adicionado com sucesso!')

                    //? Atualiza grupoAnexo
                    const updatedGrupoAnexo = grupoAnexo.map(grupo => {
                        if (grupo.grupoAnexoID == item.grupoAnexoID) {
                            return {
                                ...grupo,
                                itens: grupo.itens.map(row => {
                                    if (row.grupoAnexoItemID == item.grupoAnexoItemID) {
                                        return {
                                            ...row,
                                            anexos: [...row.anexos, ...response.data]
                                        }
                                    }
                                    return row
                                })
                            }
                        }
                        return grupo
                    })
                    setGrupoAnexo(updatedGrupoAnexo)
                })
                .catch(error => {
                    setLoadingFileGroup(false)
                    toast.error(error.response?.data?.message ?? 'Erro ao atualizar anexo, tente novamente!')
                })
        }
    }

    const handleFileSelectItem = async (event, item) => {
        setLoadingFileItem(true)
        const selectedFile = event.target.files

        if (selectedFile && selectedFile.length > 0) {
            const formData = new FormData()
            for (let i = 0; i < selectedFile.length; i++) {
                formData.append('files[]', selectedFile[i])
            }
            formData.append(`usuarioID`, user.usuarioID)
            formData.append(`unidadeID`, loggedUnity.unidadeID)
            formData.append(`parFornecedorModeloBlocoID`, item.parFornecedorModeloBlocoID ?? null)
            formData.append(`itemOpcaoAnexoID`, item.itemOpcaoAnexoID ?? null)

            // console.log('🚀 ~ handleFileSelectItem ~ item:', item)
            // return

            await api
                .post(`${staticUrl}/saveAnexo/${id}/item/${user.usuarioID}/${unidade.unidadeID}`, formData)
                .then(response => {
                    setLoadingFileItem(false)

                    toast.success('Anexo adicionado com sucesso!')

                    //? Atualiza item
                    const updatedItem = blocos.map(bloco => {
                        if (bloco.parFornecedorModeloBlocoID == item.parFornecedorModeloBlocoID) {
                            return {
                                ...bloco,
                                itens: bloco.itens.map(row => {
                                    return {
                                        ...row,
                                        respostaConfig: {
                                            ...row.respostaConfig,
                                            anexosSolicitados: row.respostaConfig.anexosSolicitados.map(anexo => {
                                                if (anexo.itemOpcaoAnexoID == item.itemOpcaoAnexoID) {
                                                    return {
                                                        ...anexo,
                                                        anexos: [...anexo.anexos, ...response.data]
                                                    }
                                                }
                                                return anexo
                                            })
                                        }
                                    }
                                })
                            }
                        }
                        return bloco
                    })
                    setBlocos(updatedItem)
                })
                .catch(error => {
                    setLoadingFileItem(false)
                    toast.error(error.response?.data?.message ?? 'Erro ao atualizar anexo, tente novamente!')
                })
        }
    }

    //? Função que atualiza os anexos solicitados no item, quando altera a resposta
    const setItemResposta = async value => {
        console.log('🚀 ~ setItemResposta ~ value:', value)
        // envia pro backend verificar as configurações dessa resposta (se possui anexos, se bloqueia formulário e se possui obs)
        try {
            const response = await api.post('/cadastros/item/getItemConfigs', {
                itemID: value.itemID,
                alternativaItemID: value.alternativa.id
            })

            // Limpar o array de anexos solicitados do item selecionado do bloco
            const updatedBlocos = blocos.map(bloco => {
                return {
                    ...bloco,
                    itens: bloco.itens.map(row => {
                        if (row.itemID == value.itemID) {
                            console.log('setItemResposta IGUAL: ', row)
                            return {
                                ...row,
                                respostaConfig: {
                                    ...response.data
                                }
                            }
                        }
                        return row
                    })
                }
            })

            setBlocos(updatedBlocos)
        } catch (error) {
            console.log('error', error)
        }
    }

    // Remove um anexo do array de anexos
    const handleRemoveAnexoProduct = async item => {
        console.log('🚀 ~ item:', item)
        if (item) {
            await api
                .delete(`${staticUrl}/deleteAnexo/${id}/${item.anexoID}/${unidade.unidadeID}/${user.usuarioID}/produto`)
                .then(response => {
                    toast.success('Anexo removido com sucesso!')

                    //? Atualiza produtos
                    const removedAnexoID = response.data
                    const updatedProdutos = produtos.map(produto => {
                        return {
                            ...produto,
                            produtoAnexosDescricao: produto.produtoAnexosDescricao.map(row => {
                                return {
                                    ...row,
                                    anexos: row.anexos.filter(anexo => anexo.anexoID != removedAnexoID)
                                }

                                return row
                            })
                        }
                        return produto
                    })
                    setProdutos(updatedProdutos)
                })
                .catch(error => {
                    toast.error(error.response?.data?.message ?? 'Erro ao remover anexo, tente novamente!')
                })
        }
    }

    // Remove um anexo do array de anexos
    const handleRemoveAnexoGroup = async item => {
        if (item) {
            await api
                .delete(
                    `${staticUrl}/deleteAnexo/${id}/${item.anexoID}/${unidade.unidadeID}/${user.usuarioID}/grupo-anexo`
                )
                .then(response => {
                    toast.success('Anexo removido com sucesso!')

                    //? Atualiza grupo de anexo
                    const removedAnexoID = response.data
                    const updatedGrupoAnexo = grupoAnexo.map(grupo => {
                        return {
                            ...grupo,
                            itens: grupo.itens.map(row => {
                                return {
                                    ...row,
                                    anexos: row.anexos.filter(anexo => anexo.anexoID != removedAnexoID)
                                }
                                return row
                            })
                        }
                        return grupo
                    })
                    setGrupoAnexo(updatedGrupoAnexo)
                })
                .catch(error => {
                    toast.error(error.response?.data?.message ?? 'Erro ao remover anexo, tente novamente!')
                })
        }
    }

    // Remove um anexo do array de anexos
    const handleRemoveAnexoItem = async item => {
        if (item) {
            await api
                .delete(`${staticUrl}/deleteAnexo/${id}/${item.anexoID}/${unidade.unidadeID}/${user.usuarioID}/item`)
                .then(response => {
                    toast.success('Anexo removido com sucesso!')

                    //? Atualiza item
                    const removedAnexoID = response.data
                    const updatedItem = blocos.map(bloco => {
                        return {
                            ...bloco,
                            itens: bloco.itens.map(row => {
                                return {
                                    ...row,
                                    respostaConfig: {
                                        ...row.respostaConfig,
                                        anexosSolicitados: row.respostaConfig.anexosSolicitados.map(anexo => {
                                            return {
                                                ...anexo,
                                                anexos: anexo.anexos.filter(anexo => anexo.anexoID != removedAnexoID)
                                            }
                                            return anexo
                                        })
                                    }
                                }
                            })
                        }
                    })
                    setBlocos(updatedItem)
                })
                .catch(error => {
                    toast.error(error.response?.data?.message ?? 'Erro ao remover anexo, tente novamente!')
                })
        }
    }

    useEffect(() => {
        type == 'new' ? getNewData() : getData()
    }, [id, savingForm])

    useEffect(() => {
        checkErrors()
    }, [])

    return (
        <>
            <Loading show={isLoading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Mensagem */}
                {canEdit.message && (
                    <Alert severity='warning' sx={{ mb: 2 }}>
                        {canEdit.message}
                    </Alert>
                )}

                {/* Última movimentação do formulário */}
                {movimentacao && (
                    <Alert severity='info' sx={{ mb: 2 }}>
                        {`Última movimentação: Profissional ${movimentacao.nome} do(a) ${movimentacao.nomeFantasia} movimentou o formulário de ${movimentacao.statusAnterior} para ${movimentacao.statusAtual} em ${movimentacao.dataHora}.`}
                        {movimentacao.observacao && (
                            <p>
                                <br />
                                Mensagem: "{movimentacao.observacao}"
                            </p>
                        )}
                    </Alert>
                )}

                {/* Card Header */}
                <Card>
                    <FormHeader
                        btnCancel
                        btnSave={user.papelID == 2 && info.status < 40}
                        btnSend={
                            (user.papelID == 1 && type == 'edit' && info.status >= 40) ||
                            (user.papelID == 2 && info.status < 40)
                        }
                        btnPrint={type == 'edit' ? true : false}
                        actionsData={actionsData}
                        actions
                        handleSubmit={() => handleSubmit(onSubmit)}
                        handleSend={handleSendForm}
                        iconConclusion={'mdi:check-bold'}
                        titleConclusion={'Concluir Formulário'}
                        title='Fornecedor'
                        btnStatus={type == 'edit' ? true : false}
                        handleBtnStatus={() => setOpenModalStatus(true)}
                        type={type}
                        status={status}
                    />

                    {/* Header */}
                    <CardContent>
                        <Fields
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            control={control}
                            fields={field}
                            values={field}
                            getAddressByCep={getAddressByCep}
                            disabled={!canEdit.status}
                        />
                    </CardContent>
                </Card>

                {/* Produtos (se parâmetro habilitado na unidade) */}
                {unidade && unidade?.obrigatorioProdutoFornecedor && produtos && produtos.length > 0 && (
                    <Card sx={{ mt: 4 }}>
                        <CardContent>
                            {/* Listagem dos produtos selecionados pra esse fornecedor */}
                            <FormFornecedorProdutos
                                key={loadingFileProduct}
                                values={produtos}
                                handleFileSelect={handleFileSelectProduct}
                                handleRemove={handleRemoveAnexoProduct}
                                loadingFile={loadingFileProduct}
                                disabled={!canEdit.status}
                                errors={errors?.produtos}
                            />
                        </CardContent>
                    </Card>
                )}

                {/* Blocos */}
                {blocos &&
                    blocos.map((bloco, index) => (
                        <Block
                            key={index}
                            index={index}
                            blockKey={`parFornecedorModeloBlocoID`}
                            handleFileSelect={handleFileSelectItem}
                            setItemResposta={setItemResposta}
                            handleRemoveAnexoItem={handleRemoveAnexoItem}
                            setBlocos={setBlocos}
                            values={bloco}
                            control={control}
                            register={register}
                            setValue={setValue}
                            errors={errors?.blocos}
                            disabled={!canEdit.status}
                        />
                    ))}

                {/* Grupo de anexos */}
                {grupoAnexo &&
                    grupoAnexo.map((grupo, indexGrupo) => (
                        <AnexoModeView
                            key={indexGrupo}
                            values={{
                                grupo: grupo,
                                loadingFile: loadingFileGroup,
                                indexGrupo: indexGrupo,
                                handleFileSelect: handleFileSelectGroup,
                                handleRemove: handleRemoveAnexoGroup,
                                folder: 'grupo-anexo',
                                disabled: !canEdit.status,
                                error: errors
                            }}
                        />
                    ))}

                {/* Observação do formulário */}
                {info && (
                    <>
                        <Card sx={{ mt: 4 }}>
                            <CardContent>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={12}>
                                        <FormControl fullWidth>
                                            <Typography variant='subtitle1' sx={{ fontWeight: 600, mb: 2 }}>
                                                Observações (campo de uso exclusivo da validadora)
                                            </Typography>
                                            <Input
                                                title='Observação (opcional)'
                                                name='info.obs'
                                                multiline
                                                rows={4}
                                                value={info.obs}
                                                disabled={!canEdit.status}
                                                control={control}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </>
                )}

                {/* Dialog pra alterar status do formulário (se formulário estiver concluído e fábrica queira reabrir pro preenchimento do fornecedor) */}
                {openModalStatus && (
                    <DialogFormStatus
                        title='Histórico do Formulário'
                        text={`Listagem do histórico das movimentações do formulário ${id} do Fornecedor.`}
                        id={id}
                        parFormularioID={1} // Fornecedor
                        formStatus={info.status}
                        hasFormPending={hasFormPending}
                        canChangeStatus={user.papelID == 1 && !hasFormPending && info.status > 30}
                        openModal={openModalStatus}
                        handleClose={() => setOpenModalStatus(false)}
                        btnCancel
                        btnConfirm
                        handleSubmit={changeFormStatus}
                    />
                )}

                {/* Dialog de confirmação de envio */}
                <DialogFormConclusion
                    openModal={openModal}
                    handleClose={() => {
                        setOpenModal(false), setValidateForm(false)
                    }}
                    title='Concluir Formulário'
                    text={`Deseja realmente concluir este formulário?`}
                    info={info}
                    canChange={!hasFormPending}
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    btnCancel
                    btnConfirm
                    btnConfirmColor='primary'
                    conclusionForm={conclusionForm}
                    listErrors={listErrors}
                    canApprove={canApprove}
                />
            </form>
        </>
    )
}

export default FormFornecedor
