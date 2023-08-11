// import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import formatDate from 'src/configs/conversions'

//* Default Form Components
import Fields from 'src/components/Defaults/Formularios/Fields'
import Product from 'src/components/Defaults/Formularios/Product'
import Block from 'src/components/Defaults/Formularios/Block'
import DialogFormStatus from '../Defaults/Dialogs/DialogFormStatus'

//* Custom components
import Input from 'src/components/Form/Input'
import Remove from 'src/components/Form/Remove'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'

import {
    Alert,
    Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    ListItem,
    ListItemButton,
    Radio,
    RadioGroup,
    TextField,
    Tooltip,
    Typography
} from '@mui/material'
import Router from 'next/router'
import { backRoute, toastMessage, formType, statusDefault, dateConfig } from 'src/configs/defaultConfigs'
import { generateReport } from 'src/configs/defaultConfigs'
import { api } from 'src/configs/api'
import FormHeader from 'src/components/Defaults/FormHeader'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'
import Loading from 'src/components/Loading'
import toast from 'react-hot-toast'
import { Checkbox } from '@mui/material'
import { SettingsContext } from 'src/@core/context/settingsContext'
import DialogFormConclusion from '../Defaults/Dialogs/DialogFormConclusion'
import { cnpjMask, cellPhoneMask, cepMask, ufMask } from 'src/configs/masks'
// como importar moment
import moment from 'moment'

// Date
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br' // import locale

const FormRecebimentoMp = ({ id }) => {
    const { user, loggedUnity } = useContext(AuthContext)
    const [isLoading, setLoading] = useState(false)
    const [savingForm, setSavingForm] = useState(false)
    const [validateForm, setValidateForm] = useState(false) //? Se true, valida campos obrigatórios
    const [hasFormPending, setHasFormPending] = useState(true) //? Tem pendencia no formulário (já vinculado em formulário de recebimento, não altera mais o status)
    const [status, setStatus] = useState(null)

    const [openModalStatus, setOpenModalStatus] = useState(false)

    const [field, setField] = useState([])
    console.log('🚀 ~ field:', field)
    const [fieldsProduct, setFieldsProduct] = useState([])
    const [products, setProducts] = useState([])
    console.log('🚀 ~ products:', products)

    const [data, setData] = useState(null)
    const [dataProducts, setDataProducts] = useState([])
    const [removedProducts, setRemovedProducts] = useState([])
    const [blocos, setBlocos] = useState([])
    const [info, setInfo] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [listErrors, setListErrors] = useState({ status: false, errors: [] })
    const { settings } = useContext(SettingsContext)
    const { setId } = useContext(RouteContext)

    const [canEdit, setCanEdit] = useState({
        status: false,
        message: 'Você não tem permissões',
        messageType: 'info'
    })

    //! Se perder Id, copia do localstorage
    const { setTitle, setStorageId, getStorageId } = useContext(ParametersContext)
    const router = Router
    const type = id && id > 0 ? 'edit' : 'new'
    console.log('🚀 ~~~ type:', type, id)
    const staticUrl = router.pathname

    const {
        trigger,
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

    const getAddressByCep = cepString => {
        if (cepString.length == 9) {
            const cep = cepString.replace(/[^0-9]/g, '')
            api.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
                if (response.data.localidade) {
                    setValue('header.logradouro', response.data.logradouro)
                    setValue('header.bairro', response.data.bairro)
                    setValue('header.cidade', response.data.localidade)
                    setValue('header.estado', response.data.uf)
                    toast.success('Endereço encontrado!')
                } else {
                    toast.error('Endereço não encontrado!')
                }
            })
        }
    }

    //* Reabre o formulário pro fornecedor alterar novamente se ainda nao estiver vinculado com recebimento
    const changeFormStatus = async status => {
        const data = {
            status: status,
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
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addProduct = () => {
        const newProduct = {
            recebimentompProdutoID: 0,
            recebimentompID: id
        }

        const updatedDataProducts = [...products, newProduct]
        setProducts(updatedDataProducts)
    }

    // Nomes e rotas dos relatórios passados para o componente FormHeader/MenuReports
    const dataReports = [
        {
            id: 1,
            name: 'recebimentoMP',
            identification: '01',
            route: 'relatorio/recebimentoMP',
            params: {
                recebimentompID: id,
                unidadeID: loggedUnity.unidadeID
            }
        },
        {
            id: 2,
            name: 'Recepção',
            identification: '02',
            route: '/relatorio/recepcao'
        }
    ]

    const verifyFormPending = async () => {
        try {
            const parFormularioID = 2
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
                setProducts(response.data.products)
                setFieldsProduct(response.data.fieldsProduct)
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
                setProducts(response.data.products)
                setFieldsProduct(response.data.fieldsProduct)
                setBlocos(response.data.blocos)
                setInfo(response.data.info)

                //* Insere os dados no formulário
                reset(response.data)

                let objStatus = statusDefault[response?.data?.info?.status]
                setStatus(objStatus)

                setCanEdit({
                    status: response?.data?.info?.status < 40 ? true : false,
                    message:
                        'Esse formulário já foi concluído! Para alterá-lo é necessário atualizar seu Status para "Em preenchimento" através do botão "Status"!',
                    messageType: 'info'
                })

                verifyFormPending()
                setLoading(false)
            })
        }
    }

    const removeProduct = (value, index) => {
        if (products.length == 1) {
            toast.error('O formulário deve conter pelo menos um produto!')
            return
        }

        if (value?.recebimentompProdutoID > 0) {
            setRemovedProducts([...removedProducts, value?.recebimentompProdutoID])
        }
        const updatedDataProducts = [...products]
        updatedDataProducts.splice(index, 1)
        setProducts(updatedDataProducts)

        reset({
            ...getValues(), // Obtém os valores atuais de todos os campos
            products: updatedDataProducts // Atualiza apenas o campo "produtos"
        })
        trigger()

        toast.success('Produto pré-removido. Salve para concluir!')
    }

    const hasFornecedor = () => {
        let hasFornecedor = false

        field &&
            field.forEach((field, index) => {
                if (field?.nomeColuna == 'fornecedorID' && getValues(`fields[${index}].fornecedor`)) {
                    hasFornecedor = true
                }
            })
        return hasFornecedor
    }

    //? Função chamada ao clicar no botão de acessar o fornecedor selecionado
    const getSelectedFornecedor = () => {
        if (field) {
            for (let index = 0; index < field.length; index++) {
                if (field[index]?.nomeColuna === 'fornecedorID' && getValues(`fields[${index}].fornecedor`)) {
                    return getValues(`fields[${index}].fornecedor.id`)
                }
            }
        }
        return false
    }

    let fieldFornecedor = null
    field &&
        field.forEach((field, index) => {
            fieldFornecedor = watch(`fields[${index}].fornecedor`)
        })

    useEffect(() => {
        hasFornecedor()
    }, [fieldFornecedor])

    const checkErrors = () => {
        clearErrors()
        let hasErrors = false
        let arrErrors = []

        //? Header
        field?.forEach((field, index) => {
            const fieldName = field.tabela ? `fields[${index}].${field.tabela}` : `fields[${index}].${field.nomeColuna}`
            const fieldValue = getValues(fieldName)
            console.log('🚀 ~ checkErrors:', fieldName, fieldValue)
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
        products.forEach((data, indexData) => {
            fieldsProduct &&
                fieldsProduct.forEach((field, indexField) => {
                    const fieldName = field.tabela
                        ? `products[${indexData}].${field.tabela}`
                        : `products[${indexData}].${field.nomeColuna}`
                    const fieldValue = getValues(fieldName)
                    console.log('🚀 ~ checkErrors produto:', fieldName)

                    if (field.obrigatorio === 1 && !fieldValue) {
                        setError(fieldName, {
                            type: 'manual',
                            message: 'Campo obrigatário'
                        })
                        arrErrors.push(field?.nomeCampo)
                        hasErrors = true
                    }
                })
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

    const handleSendForm = () => {
        checkErrors()
        setOpenModal(true)
        setValidateForm(true)
    }

    const conclusionForm = async values => {
        values['conclusion'] = true

        await handleSubmit(onSubmit)(values)
    }

    const onSubmit = async (values, param = false) => {
        if (param.conclusion === true && param.status > 10) {
            values['status'] = param.status
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
        data['form']['removedProducts'] = removedProducts
        console.log('🚀 ~ onSubmit:', data)
        // return

        try {
            if (type == 'edit') {
                setSavingForm(true)
                await api.post(`${staticUrl}/updateData/${id}`, data).then(response => {
                    toast.success(toastMessage.successUpdate)
                    setSavingForm(false)
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
            {isLoading ? (
                <Loading />
            ) : (
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
                            btnSend={type == 'edit' ? true : false}
                            btnPrint
                            generateReport={generateReport}
                            dataReports={dataReports}
                            handleSubmit={() => handleSubmit(onSubmit)}
                            handleSend={handleSendForm}
                            iconConclusion={'mdi:check-bold'}
                            titleConclusion={'Aprovar Recebimento'}
                            title='Recebimento MP'
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
                                disabled={!canEdit.status}
                            />
                            {/* <Grid container spacing={4}>
                                <Grid item xs={12} md={9}>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <Card sx={{ mb: 4 }}>
                                        <CardContent>
                                            <Typography color='primary' variant='subtitle1' sx={{ fontWeight: 700 }}>
                                                Fornecedor
                                            </Typography>
                                            <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                                                Lorem ipisu uas hu shas uhusa h
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid> */}

                            {/* {
                                // Se o formulário tiver fornecedor selecionado, mostra botão com link pro fornecedor
                                hasFornecedor() && (
                                    <Button
                                        variant='outlined'
                                        color='info'
                                        startIcon={<Icon icon='iconamoon:link-external-fill' />}
                                        size='small'
                                        sx={{ mt: 4 }}
                                        onClick={() => {
                                            //? Redireciona pro fornecedor selecionado
                                            if (getSelectedFornecedor() > 0) {
                                                router.push('/formularios/fornecedor/')
                                                setId(getSelectedFornecedor())
                                            }
                                        }}
                                    >
                                        Acessar fornecedor
                                    </Button>
                                )
                            } */}
                        </CardContent>
                    </Card>

                    {/* Produtos */}
                    <Card sx={{ mt: 4 }}>
                        <CardContent>
                            <Typography color='primary' variant='subtitle1' sx={{ fontWeight: 700, mb: 5 }}>
                                PRODUTOS
                            </Typography>
                            {products &&
                                products.map((data, indexData) => (
                                    <Box
                                        display='flex'
                                        justifyContent='space-between'
                                        gap={4}
                                        key={indexData}
                                        sx={{ mb: 4 }}
                                    >
                                        {/* Monta as colunas dinâmicas dos produtos */}
                                        {fieldsProduct &&
                                            fieldsProduct.length > 0 &&
                                            fieldsProduct.map((field, indexField) => (
                                                <Box flex={1} key={indexField}>
                                                    <Product
                                                        name={`products[${indexData}].${
                                                            field.tabela ?? field.nomeColuna
                                                        }`}
                                                        field={field}
                                                        data={data}
                                                        indexData={indexData}
                                                        disabled={!canEdit.status}
                                                        register={register}
                                                        control={control}
                                                        setValue={setValue}
                                                        errors={errors}
                                                    />
                                                </Box>
                                            ))}
                                        {/* Delete */}
                                        <Remove
                                            xs={12}
                                            md={1}
                                            title='Remover'
                                            index={indexData}
                                            removeItem={removeProduct}
                                            item={data}
                                            pending={!canEdit.status}
                                            textSuccess='Remover este item'
                                            textError='Este item não pode mais ser removido pois já foi respondido em um formulário'
                                        />
                                    </Box>
                                ))}

                            {/* Botão de adicionar produto */}
                            <Button
                                variant='outlined'
                                color='primary'
                                disabled={!canEdit.status}
                                sx={{ mt: 1 }}
                                startIcon={<Icon icon='material-symbols:add-circle-outline-rounded' />}
                                onClick={() => {
                                    addProduct()
                                }}
                            >
                                Inserir produto
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Blocos */}
                    {blocos &&
                        blocos.map((bloco, index) => (
                            <Block
                                key={index}
                                index={index}
                                blockKey={`parRecebimentompBlocoID`}
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
                            id={id}
                            parFormularioID={2} // Recebimento MP
                            formStatus={info.status}
                            hasFormPending={hasFormPending}
                            canChangeStatus={info.status > 30 && !hasFormPending}
                            openModal={openModalStatus}
                            handleClose={() => setOpenModalStatus(false)}
                            title='Histórico do Formulário'
                            text={`Listagem do histórico das movimentações do formulário ${id} de Recebimento de MP.`}
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
                        btnCancel
                        btnConfirm
                        btnConfirmColor='primary'
                        conclusionForm={conclusionForm}
                        listErrors={listErrors}
                    />
                </form>
            )}
        </>
    )
}

export default FormRecebimentoMp
