// import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'

//* Default Form Components
import Fields from 'src/components/Defaults/Formularios/Fields'
import Input from 'src/components/Form/Input'
import CheckList from 'src/components/Defaults/Formularios/CheckList'
import Block from 'src/components/Defaults/Formularios/Block'

import AnexoModeView from 'src/components/Anexos/ModeView'

import { NotificationContext } from 'src/context/NotificationContext'
import ReportFornecedor from 'src/components/Reports/Formularios/Fornecedor'

import { Alert, Box, Card, CardContent, FormControl, Grid, Typography } from '@mui/material'
import Router from 'next/router'
import { api } from 'src/configs/api'
import FormHeader from 'src/components/Defaults/FormHeader'
import { AuthContext } from 'src/context/AuthContext'
import Loading from 'src/components/Loading'
import { toastMessage, statusDefault } from 'src/configs/defaultConfigs'
import toast from 'react-hot-toast'
import DialogFormConclusion from '../Defaults/Dialogs/DialogFormConclusion'

import DialogFormStatus from '../Defaults/Dialogs/DialogFormStatus'
import FormNotification from './Dialog/FormNotification'

const FormFornecedor = ({ id }) => {
    const { user, loggedUnity } = useContext(AuthContext)
    const { createNewNotification } = useContext(NotificationContext)
    const [isLoading, setLoading] = useState(false) //? loading de carregamento da página
    const [isLoadingSave, setLoadingSave] = useState(false) //? dependencia do useEffect pra atualizar a página após salvar
    // const [validateForm, setValidateForm] = useState(false) //? Se true, valida campos obrigatórios
    const [loadingFile, setLoadingFile] = useState(false) //? loading de carregamento do arquivo
    const [openOptions, setOpenOptions] = useState(false) //? Abre as opções do botão 3 pontinho do sidebar

    const [fieldsState, setFields] = useState([])
    const [data, setData] = useState(null)
    const [categorias, setCategorias] = useState([])
    const [atividades, setAtividades] = useState([])
    const [sistemasQualidade, setSistemasQualidade] = useState([])
    const [grupoAnexo, setGrupoAnexo] = useState([])
    const [allBlocks, setAllBlocks] = useState([])
    const [blocks, setBlocks] = useState([])
    const [info, setInfo] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [unidade, setUnidade] = useState(null)
    const [status, setStatus] = useState(null)
    // const [statusEdit, setStatusEdit] = useState(false)
    const [openModalStatus, setOpenModalStatus] = useState(false)
    const [hasFormPending, setHasFormPending] = useState(true) //? Tem pendencia no formulário (já vinculado em formulário de recebimento, não altera mais o status)
    const [listErrors, setListErrors] = useState({ status: false, errors: [] })
    const [copiedDataContext, setCopiedDataContext] = useState(false)
    const [arrAnexoRemoved, setArrAnexoRemoved] = useState([])
    const [dataCopiedMyData, setDataCopiedMyData] = useState([])

    const [canEdit, setCanEdit] = useState({
        status: false,
        message: 'Você não tem permissões',
        messageType: 'info'
    })

    const router = Router
    const type = id && id > 0 ? 'edit' : 'new'
    const staticUrl = router.pathname

    const {
        watch,
        register,
        trigger,
        reset,
        control,
        getValues,
        clearErrors,
        setValue,
        setError,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const verifyFormPending = async () => {
        try {
            const parFormularioID = 1
            await api.post(`/formularios/fornecedor/verifyFormPending/${id}`, { parFormularioID }).then(response => {
                setHasFormPending(response.data) //! true/false
            })
        } catch (error) {
            console.log(error)
        }
    }

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
            setLoadingSave(true)
            await api.post(`${staticUrl}/changeFormStatus/${id}`, data).then(response => {
                toast.success(toastMessage.successUpdate)
                manageNotifications(status)
                setLoadingSave(false)
            })
        } catch (error) {
            console.log(error)
        }
    }

    //* Altera status do formulário (aprovado, aprovado parcial, reprovado)
    const handleChangeFormStatus = event => {
        const newValue = event.target.value

        const newInfo = {
            ...info,
            status: newValue
        }
        setInfo(newInfo)
    }

    const getAddressByCep = async cepString => {
        if (cepString.length === 9) {
            const cep = cepString.replace(/[^0-9]/g, '')
            try {
                const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`)
                if (response.data.localidade) {
                    fieldsState.forEach(async (field, index) => {
                        if (
                            field.nomeColuna === 'logradouro' ||
                            field.nomeColuna === 'bairro' ||
                            field.nomeColuna === 'cidade' ||
                            field.nomeColuna === 'estado'
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

    const sendNotification = async values => {
        console.log('===> ', values)
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
                unidadeID: 1,
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

    // Nomes e rotas dos relatórios passados para o componente FormHeader/MenuReports
    const actionsData = [
        {
            id: 1,
            name: 'Formulário do fornecedor',
            component: <ReportFornecedor params={{ id: id }} />,
            route: '/relatorio/fornecedor/dadosFornecedor',
            papelID: user.papelID,
            modal: false,
            type: 'report',
            identification: '01',
            params: {
                fornecedorID: id
            }
        },
        {
            id: 2,
            name: 'Gerar notificação',
            description: 'Gerar uma nova notificação para o fornecedor, podendo ser um e-mail e/ou alerta do sistema.',
            component: (
                <FormNotification
                    data={{
                        email: fieldsState.find(field => field.nomeColuna == 'email')?.email
                    }}
                />
            ),
            route: null,
            type: null,
            modal: true,
            action: sendNotification,
            icon: 'mdi:bell-outline',
            identification: null
            // params: {
            //     fornecedorID: id,
            //     usuarioID: user.usuarioID,
            //     unidadeID: loggedUnity.unidadeID
            // }
        }
    ]

    const setVisibleBlocks = (blocks, categorias) => {
        let arrVisibleBlocks = []

        blocks?.map((block, index) => {
            if (canViewBlock(block.categorias, categorias)) {
                //? Fornecedor pode ver o bloco
                arrVisibleBlocks.push(block)
            }
        })

        setBlocks(arrVisibleBlocks)
    }

    const changeCategory = (id, checked) => {
        const arrNewCategory = categorias.map(value => {
            if (value.id === id) {
                return {
                    ...value,
                    checked: checked
                }
            }
            return value
        })
        setCategorias(arrNewCategory)
        setVisibleBlocks(allBlocks, arrNewCategory)
    }

    //! Controla visualização do bloco baseado na categoria e atividade
    const canViewBlock = (arrCategoriasBloco, categorias) => {
        const categoriasBloco = arrCategoriasBloco.map(objeto => objeto.categoriaID)
        const categoriasFornecedor = categorias.filter(objeto => objeto.checked).map(objeto => objeto.id)

        if (categoriasBloco.length !== categoriasFornecedor.length) {
            return false // Se os arrays tiverem comprimentos diferentes, não contêm os mesmos valores
        }

        const sortedCategoriasBloco = [...categoriasBloco].sort()
        const sortedCategoriasFornecedor = [...categoriasFornecedor].sort()

        for (let i = 0; i < sortedCategoriasBloco.length; i++) {
            if (sortedCategoriasBloco[i] !== sortedCategoriasFornecedor[i]) {
                return false // Se houver diferença em qualquer posição, não contêm os mesmos valores
            }
        }

        return true // Se chegou até aqui, os arrays contêm os mesmos valores
    }

    const activeBlock = parFornecedorBlocoID => {
        let active = false
        blocks.forEach(block => {
            if (block.parFornecedorBlocoID == parFornecedorBlocoID) {
                active = true
            }
        })
        return active
    }

    /// Verificar se existe dados no localStorage que não estão preenchidos
    const verifyFields = field => {}

    const getData = () => {
        try {
            setLoading(true)
            if (id) {
                api.post(`${staticUrl}/getData/${id}`, { unidadeLogadaID: loggedUnity.unidadeID }).then(response => {
                    console.log('🚀 ~ getData:', response.data)

                    verifyFields(response.data.fields)
                    setFields(response.data.fields)
                    setCategorias(response.data.categorias)
                    setAtividades(response.data.atividades)
                    setSistemasQualidade(response.data.sistemasQualidade)

                    setAllBlocks(response.data.blocos)
                    setVisibleBlocks(response.data.blocos, response.data.categorias)

                    // setData(response.data.data)
                    setGrupoAnexo(response.data.grupoAnexo)

                    setInfo(response.data.info)
                    setUnidade(response.data.unidade)

                    //* Insere os dados no formulário
                    reset(response.data)

                    ///? Copia os dados do fornecedor no contexto loggedUnity se o campo estiver vazio
                    const dataOld = []
                    for (let i = 0; i < response.data.fields.length; i++) {
                        const nomeColuna = response.data.fields[i].nomeColuna
                        const nomeCampo = response.data.fields[i].nomeCampo

                        for (let propriedade in loggedUnity) {
                            if (nomeColuna == 'telefone') {
                                const telefoneColuna = loggedUnity.telefone1 ?? loggedUnity.telefone2
                                setValue(`fields[${i}].${nomeColuna}`, telefoneColuna ?? '')
                            }
                            if (
                                propriedade === nomeColuna &&
                                !getValues(`fields[${i}].${nomeColuna}`, loggedUnity[propriedade])
                            ) {
                                setValue(`fields[${i}].${nomeColuna}`, loggedUnity[propriedade])

                                if (loggedUnity[propriedade] !== null && loggedUnity[propriedade] !== '') {
                                    dataOld.push({
                                        name: nomeCampo,
                                        value: loggedUnity[propriedade]
                                    })
                                }
                            }
                        }
                    }
                    setDataCopiedMyData(dataOld)
                    let objStatus = statusDefault[response.data.info.status]
                    setStatus(objStatus)

                    setCanEdit({
                        status: user.papelID == 2 && response.data.info.status < 40 ? true : false,
                        message:
                            user.papelID == 2
                                ? 'Esse formulário já foi concluído e enviado pra fábrica, não é mais possível alterar as informações!'
                                : 'Somente o fornecedor pode alterar as informações deste formulário!',
                        messageType: user.papelID == 2 ? 'warning' : 'info'
                    })

                    setLoading(false)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const noPermissions = () => {
        router.push('/formularios/fornecedor/')
        toast.error('Você não tem permissões para acessar esta página!')
    }

    const handleSendForm = () => {
        checkErrors()
        setOpenModal(true)
        // setValidateForm(true)
    }

    const handleDraftForm = async data => {
        clearErrors() //? Limpa errors do formulário pra salvar "rascunho", com errors não entra no onSubmit
        await handleSubmit(onSubmit)(data)
    }

    const conclusionForm = async values => {
        values['conclusion'] = true
        await handleSubmit(onSubmit)(values)
    }

    const onSubmit = async (values, param = false) => {
        if (param.conclusion === true) {
            values['status'] = user && user.papelID == 1 ? param.status : 40 //? Seta o status somente se for fábrica
            values['obsConclusao'] = param.obsConclusao

            //? Trata notificações
            manageNotifications(values['status'])
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
            setLoadingSave(true)
            await api.put(`${staticUrl}/updateData/${id}`, data).then(response => {
                toast.success(toastMessage.successUpdate)
                setLoadingSave(false)
            })
        } catch (error) {
            console.log(error)
        }
    }

    //? Trata notificações
    const manageNotifications = status => {
        let data = null
        if (user.papelID == 2 && status == 40) {
            //? Fornecedor concluiu o formulário
            data = {
                titulo: 'Fornecedor concluiu o formulário',
                descricao: `O Fornecedor ${loggedUnity.nomeFantasia} concluiu o formulário #${id}.`,
                url: '/formularios/fornecedor/',
                urlID: id,
                tipoNotificacaoID: 3, //? fornecedor
                usuarioGeradorID: user.usuarioID,
                usuarioID: 0, //? Todos da unidade
                unidadeID: unidade.unidadeID, //? UnidadeID da fábrica (que verá a notificação)
                papelID: 1 //? Notificação pra fábrica
            }
        } else if (user.papelID == 1 && status > 40) {
            //? Fábrica concluiu o formulário
            const statusName =
                status == 50
                    ? 'reprovou'
                    : status == 60
                    ? 'aprovou parcialmente'
                    : status == 70
                    ? 'aprovou'
                    : 'concluiu'
            data = {
                titulo: `Fábrica ${statusName} o formulário`,
                descricao: `A Fábrica ${loggedUnity.nomeFantasia} ${statusName} o formulário #${id}.`,
                url: '/formularios/fornecedor/',
                urlID: id,
                tipoNotificacaoID: 3, //? fornecedor
                usuarioGeradorID: user.usuarioID,
                usuarioID: 0, //? Todos da unidade
                unidadeID: unidade.fornecedor.unidadeID, //? UnidadeID do fornecedor (que verá a notificação)
                papelID: 2 //? Notificação pro fornecedor
            }
        } else if (user.papelID == 1 && status == 30) {
            //? Fábrica reabriu o formulário pra "Em preenchimento"
            data = {
                titulo: `Fábrica reabriu o formulário`,
                descricao: `A Fábrica ${loggedUnity.nomeFantasia} reabriu o formulário #${id} para preenchimento.`,
                url: '/formularios/fornecedor/',
                urlID: id,
                tipoNotificacaoID: 3, //? fornecedorF
                usuarioGeradorID: user.usuarioID,
                usuarioID: 0, //? Todos da unidade
                unidadeID: unidade.fornecedor.unidadeID, //? UnidadeID do fornecedor (que verá a notificação)
                papelID: 2 //? Notificação pro fornecedor
            }
        }

        if (data) createNewNotification(data) //* Cria nova notificação
    }

    const checkErrors = () => {
        clearErrors()
        let hasErrors = false
        let arrErrors = []

        //? Header
        fieldsState.forEach((field, index) => {
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

        //? Blocos
        allBlocks.forEach((block, indexBlock) => {
            activeBlock(block.parFornecedorBlocoID)
                ? block.itens.forEach((item, indexItem) => {
                      const fieldValue = getValues(`blocos[${indexBlock}].itens[${indexItem}].resposta`)
                      if (item?.obrigatorio === 1 && !fieldValue) {
                          setError(`blocos[${indexBlock}].itens[${indexItem}].resposta`, {
                              type: 'manual',
                              message: 'Campo obrigatário'
                          })
                          arrErrors.push(item?.nome)
                          hasErrors = true
                      }
                  })
                : null
        })

        //? Anexos
        grupoAnexo.forEach((grupo, indexGrupo) => {
            grupo.itens.forEach((item, indexItem) => {
                if (item?.obrigatorio === 1 && !item?.anexo?.exist) {
                    setError(`grupoAnexo[${indexGrupo}].itens[${indexItem}].anexo`, {
                        type: 'manual',
                        message: 'Campo obrigatário'
                    })
                    arrErrors.push(`Anexo: ${item?.nome}`)
                    hasErrors = true
                }
            })
        })

        setListErrors({
            status: hasErrors,
            errors: arrErrors
        })
    }

    useEffect(() => {
        //? Form Fornecedor não tem página NOVO
        type == 'edit' ? getData() : noPermissions()
        verifyFormPending()
    }, [id, isLoadingSave])

    useEffect(() => {
        checkErrors()
    }, [])

    // Mostra toast se o formulário foi copiado de "MEUS DADOS"
    useEffect(() => {
        if (copiedDataContext) {
            toast.success('Dados copiados com sucesso!')
        }
    }, [copiedDataContext])

    // Quando selecionar um arquivo, o arquivo é adicionado ao array de anexos
    const handleFileSelect = async (event, item) => {
        setLoadingFile(true)
        const selectedFile = event.target.files[0]

        if (selectedFile) {
            const formData = new FormData()
            formData.append('file', selectedFile)
            formData.append(`usuarioID`, user.usuarioID)
            formData.append(`unidadeID`, loggedUnity.unidadeID)
            formData.append(`file`, item.anexo.file)
            formData.append(`titulo`, selectedFile.name)
            formData.append(`grupoanexoitemID`, item.grupoanexoitemID)
            //? Verifica se o arquivo é uma imagem (imagem redimensiona)
            const isImage = selectedFile.type.includes('image')

            await api
                .post(`${staticUrl}/saveAnexo/${id}/${unidade.unidadeID}/${isImage}`, formData)
                .then(response => {
                    setLoadingFile(false)

                    toast.success('Anexo adicionado com sucesso!')

                    //? Atualiza grupoAnexo
                    const updatedGrupoAnexo = grupoAnexo.map(grupo => {
                        if (grupo.grupoAnexoID == item.grupoanexoID) {
                            return {
                                ...grupo,
                                itens: grupo.itens.map(row => {
                                    if (row.grupoanexoitemID == item.grupoanexoitemID) {
                                        return {
                                            ...item,
                                            anexo: {
                                                ...item.anexo,
                                                exist: true,
                                                nome: response.data.nome,
                                                path: response.data.path,
                                                tipo: response.data.tipo,
                                                size: response.data.size,
                                                time: response.data.time
                                            }
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
                    setLoadingFile(false)
                    toast.error(error.response?.data?.message ?? 'Erro ao atualizar foto de perfil, tente novamente!')
                })
        }
    }

    // Remove um anexo do array de anexos
    const handleRemoveAnexo = async item => {
        if (item) {
            await api
                .delete(
                    `${staticUrl}/deleteAnexo/${item.grupoanexoitemID}/${id}/${loggedUnity.unidadeID}/${user.usuarioID}`
                )
                .then(response => {
                    toast.success('Anexo removido com sucesso!')

                    //? Atualiza grupoAnexo
                    const updatedGrupoAnexo = grupoAnexo.map(grupo => {
                        if (grupo.grupoAnexoID == item.grupoanexoID) {
                            return {
                                ...grupo,
                                itens: grupo.itens.map(row => {
                                    if (row.grupoanexoitemID == item.grupoanexoitemID) {
                                        return {
                                            ...item,
                                            anexo: {
                                                ...item.anexo,
                                                exist: false,
                                                nome: null,
                                                path: null,
                                                tipo: null,
                                                size: null,
                                                time: null
                                            }
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
                    toast.error(error.response?.data?.message ?? 'Erro ao remover anexo, tente novamente!')
                })
        }
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : fieldsState ? (
                <form onSubmit={handleDraftForm}>
                    {unidade && (
                        <input type='hidden' value={unidade.unidadeID} name='unidadeID' {...register(`unidadeID`)} />
                    )}

                    {/* Mensagem de que não possui nenhum bloco */}
                    {blocks && blocks.length === 0 && (
                        <Alert severity='error' sx={{ mb: 2 }}>
                            Selecione ao menos uma <span style={{ fontWeight: 'bold' }}>categoria</span>!
                        </Alert>
                    )}
                    {!canEdit.status && (
                        <Alert severity={canEdit.messageType} sx={{ mb: 2 }}>
                            {canEdit.message}
                        </Alert>
                    )}

                    {/* Card Header */}
                    <Card>
                        <FormHeader
                            btnCancel
                            btnSave={user.papelID == 2 && info.status < 40}
                            btnSend={
                                (user.papelID == 1 && info.status >= 40) || (user.papelID == 2 && info.status < 40)
                            }
                            disabledSend={blocks.length === 0 ? true : false}
                            disabledSubmit={blocks.length === 0 ? true : false}
                            disabledPrint={blocks.length === 0 ? true : false}
                            btnPrint
                            actionsData={actionsData}
                            handleSubmit={() => handleSubmit(onSubmit)}
                            handleSend={handleSendForm}
                            actions
                            iconConclusion={info.status >= 40 ? 'mdi:check-bold' : 'carbon:send-filled'}
                            titleConclusion={info.status >= 40 ? 'Aprovar Fornecedor' : 'Concluir Formulário'}
                            title='Fornecedor'
                            btnStatus
                            handleBtnStatus={() => setOpenModalStatus(true)}
                            type={type}
                            status={status}
                        />

                        {/* Foi copiado pelo menos uma informação de meus dados */}
                        {dataCopiedMyData && dataCopiedMyData.length > 0 && (
                            <Alert severity='info' sx={{ mb: 2, ml: 4, mr: 4 }}>
                                <h1>
                                    Os seguintes campos foram copiados de <strong>Meus Dados</strong>:
                                </h1>
                                <div className='pt-2'>
                                    {dataCopiedMyData.map(row => (
                                        <div className='flex opacity-80'>
                                            <p>{`- ${row.name} (${row.value})`}</p>
                                        </div>
                                    ))}
                                </div>
                            </Alert>
                        )}

                        <CardContent>
                            {unidade && user.papelID == 2 && (
                                <Box sx={{ mb: 4 }}>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant='caption'>Fábrica:</Typography>
                                            <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                                                {unidade.nomeFantasia}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}

                            {/* Header */}
                            <Fields
                                fields={fieldsState}
                                register={register}
                                errors={errors}
                                setValue={setValue}
                                control={control}
                                watch={watch}
                                getAddressByCep={getAddressByCep}
                                disabled={!canEdit.status}
                                setCopiedDataContext={setCopiedDataContext}
                            />

                            {/* Categorias, Atividades e Sistemas de Qualidade */}
                            <Grid container spacing={4}>
                                {/* Categorias */}
                                <Grid item xs={12} md={4}>
                                    <CheckList
                                        title='Categorias'
                                        values={categorias}
                                        name='categorias'
                                        changeCategory={changeCategory}
                                        register={register}
                                        disabled={!canEdit.status}
                                    />
                                </Grid>

                                {/* Atividades */}
                                <Grid item xs={12} md={4}>
                                    <CheckList
                                        title='Atividades'
                                        values={atividades}
                                        name='atividades'
                                        register={register}
                                        disabled={!canEdit.status}
                                    />
                                </Grid>

                                {/* Sistemas de Qualidade */}
                                <Grid item xs={12} md={4}>
                                    <CheckList
                                        title='Sistema de Qualidade'
                                        values={sistemasQualidade}
                                        name='sistemasQualidade'
                                        register={register}
                                        disabled={!canEdit.status}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    {/* Blocos (varre todos e verifica se bloco atual contém no array de blocos disponiveis, necessario varrer todos pra manter o index correto) */}
                    {allBlocks &&
                        allBlocks.map((bloco, indexBloco) =>
                            activeBlock(bloco.parFornecedorBlocoID) ? (
                                <Block
                                    key={indexBloco}
                                    index={indexBloco}
                                    blockKey={`parFornecedorBlocoID`}
                                    values={bloco}
                                    control={control}
                                    register={register}
                                    setValue={setValue}
                                    errors={errors}
                                    disabled={!canEdit.status}
                                />
                            ) : null
                        )}

                    {/* Grupo de anexos */}
                    {grupoAnexo &&
                        grupoAnexo.map((grupo, indexGrupo) => (
                            <AnexoModeView
                                key={indexGrupo}
                                values={{
                                    grupo: grupo,
                                    loadingFile: loadingFile,
                                    indexGrupo: indexGrupo,
                                    handleFileSelect: handleFileSelect,
                                    handleRemove: handleRemoveAnexo,
                                    disabled: !canEdit.status,
                                    error: errors?.grupoAnexo?.[indexGrupo]?.itens
                                }}
                            />
                        ))}

                    {/* Observação do formulário */}
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
                </form>
            ) : null}

            {/* Dialog de confirmação de envio */}
            <DialogFormConclusion
                openModal={openModal}
                handleClose={() => {
                    setOpenModal(false)
                    // setValidateForm(false)
                }}
                title={info.status >= 40 ? 'Aprovar Fornecedor' : 'Concluir Formulário'}
                text={`Deseja realmente concluir este formulário?`}
                info={info}
                register={register}
                btnCancel
                canChange={!hasFormPending}
                btnConfirm
                btnConfirmColor='primary'
                conclusionForm={conclusionForm}
                listErrors={listErrors}
            />

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
        </>
    )
}

export default FormFornecedor
