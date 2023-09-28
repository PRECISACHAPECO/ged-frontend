// import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'

//* Default Form Components
import Fields from 'src/components/Defaults/Formularios/Fields'
import Block from 'src/components/Defaults/Formularios/Block'
import DialogFormStatus from '../Defaults/Dialogs/DialogFormStatus'
import ReportRecebimentoMP from 'src/components/Reports/Formularios/RecebimentoMP'

//* Custom components
import Input from 'src/components/Form/Input'

import { Alert, Card, CardContent, FormControl, Grid, Typography } from '@mui/material'
import Router from 'next/router'
import { backRoute, toastMessage, formType, statusDefault, dateConfig } from 'src/configs/defaultConfigs'
import { generateReport } from 'src/configs/defaultConfigs'
import { api } from 'src/configs/api'
import FormHeader from 'src/components/Defaults/FormHeader'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'
import { NotificationContext } from 'src/context/NotificationContext'
import Loading from 'src/components/Loading'
import toast from 'react-hot-toast'
import { SettingsContext } from 'src/@core/context/settingsContext'
import DialogFormConclusion from '../Defaults/Dialogs/DialogFormConclusion'
import FormNotification from './Dialogs/Notification/FormNotification'
import ReportFornecedor from 'src/components/Reports/Formularios/Fornecedor'
import NewFornecedor from 'src/components/Fornecedor/Dialogs/NewFornecedor'

const FormFornecedor = ({ id, makeFornecedor }) => {
    const { user, loggedUnity } = useContext(AuthContext)
    const [isLoading, setLoading] = useState(false)
    const [savingForm, setSavingForm] = useState(false)
    const [validateForm, setValidateForm] = useState(false) //? Se true, valida campos obrigatórios
    const [hasFormPending, setHasFormPending] = useState(true) //? Tem pendencia no formulário (já vinculado em formulário de recebimento, não altera mais o status)
    const [unidade, setUnidade] = useState(null)
    const [status, setStatus] = useState(null)
    const { createNewNotification } = useContext(NotificationContext)
    const [openModalStatus, setOpenModalStatus] = useState(false)
    const [field, setField] = useState([])
    const [link, setLink] = useState(null)
    const [blocos, setBlocos] = useState([])
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
    const actionsData = [
        {
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
        },
        {
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
        },
        {
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
        },
        {
            id: 4,
            name: 'Formulário do fornecedor',
            component: <ReportFornecedor params={{ id: id }} />,
            route: '/relatorio/fornecedor/dadosFornecedor',
            papelID: user.papelID,
            modal: false,
            type: 'report',
            icon: 'fluent:print-24-regular',
            identification: null,
            params: {
                fornecedorID: id
            }
        }
    ]

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
        if (id) {
            api.post(`${staticUrl}/getData/${id}`, { type: type, unidadeID: loggedUnity.unidadeID }).then(response => {
                console.log('getData: ', response.data)

                setField(response.data.fields)
                setBlocos(response.data.blocos)
                setInfo(response.data.info)
                setUnidade(response.data.unidade)
                setLink(response.data.link)

                //* Insere os dados no formulário
                reset(response.data)

                let objStatus = statusDefault[response?.data?.info?.status]
                setStatus(objStatus)

                setCanEdit({
                    status: user.papelID == 2 && response.data.info.status < 40 ? true : false,
                    message:
                        user.papelID == 2
                            ? 'Esse formulário já foi concluído e enviado pra fábrica, não é mais possível alterar as informações!'
                            : 'Somente o fornecedor pode alterar as informações deste formulário!',
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

        //? Blocos
        blocos.forEach((block, indexBlock) => {
            block.itens.forEach((item, indexItem) => {
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
        })

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
        console.log('🚀 ~ onSubmit: ', data)
        // return

        try {
            if (type == 'edit') {
                setSavingForm(true)
                await api.post(`${staticUrl}/updateData/${id}`, data).then(response => {
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
                {!canEdit.status && (
                    <Alert severity={canEdit.messageType} sx={{ mb: 2 }}>
                        {canEdit.message}
                    </Alert>
                )}

                {/* Card Header */}
                <Card>
                    <FormHeader
                        btnCancel
                        btnSave={info?.status < 40 || type == 'new'}
                        btnSend={type == 'edit' && info?.status < 50 ? true : false}
                        btnPrint={type == 'edit' ? true : false}
                        generateReport={generateReport}
                        actionsData={actionsData}
                        actions
                        handleSubmit={() => handleSubmit(onSubmit)}
                        handleSend={handleSendForm}
                        iconConclusion={'mdi:check-bold'}
                        titleConclusion={'Concluir Fornecedor'}
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

                {/* Blocos */}
                {blocos &&
                    blocos.map((bloco, index) => (
                        <Block
                            key={index}
                            index={index}
                            blockKey={`parFornecedorModeloBlocoID`}
                            values={bloco}
                            control={control}
                            register={register}
                            setValue={setValue}
                            errors={errors}
                            disabled={!canEdit.status}
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
                />
            </form>
        </>
    )
}

export default FormFornecedor
