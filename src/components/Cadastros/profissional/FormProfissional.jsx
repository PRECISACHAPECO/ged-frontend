import Router from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { RouteContext } from 'src/context/RouteContext'
import { api } from 'src/configs/api'
import Icon from 'src/@core/components/icon'
import { Card, CardContent, Grid, Button, CardHeader } from '@mui/material'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import FormHeader from '../../Defaults/FormHeader'
import { backRoute } from 'src/configs/defaultConfigs'
import { toastMessage } from 'src/configs/defaultConfigs'
import { AuthContext } from 'src/context/AuthContext'
import CargoFuncao from './CargoFuncao'
import Fields from './Fields'
import Permissions from './Permissions'

const FormProfissional = ({ id }) => {
    const { setId } = useContext(RouteContext)
    const { user, loggedUnity } = useContext(AuthContext)
    const [data, setData] = useState(null)
    const [change, setChange] = useState(false)
    const [removedItems, setRemovedItems] = useState([]) //? Itens removidos do formulário

    // Estado que é prencchindo com o valor da função verifyCPF, que verifica se o cpf digitado já esta vinculado a um usuario existente
    const [userExistVerifyCPF, setUserExistVerifyCPF] = useState(false)
    const [userNewVerifyCPF, setUserNewVerifyCPF] = useState(false)
    // Se usuarioID vindo no getData for maior que 0  adiciona true
    const [userExistDefault, setUserExistDefault] = useState(false)

    const router = Router
    const type = id && id > 0 ? 'edit' : 'new'
    const staticUrl = router.pathname
    const routeVeryfyCNP = type == 'edit' ? `${staticUrl}/verifyCPF` : `${backRoute(staticUrl)}/verifyCPF`

    const {
        control,
        handleSubmit,
        reset,
        setError,
        setValue,
        getValues,
        watch,
        register,
        formState: { errors }
    } = useForm({})

    const resetFields = () => {
        setUserNewVerifyCPF(false)
        setUserExistVerifyCPF(false)
        setUserExistDefault(false)
    }

    // Função que atualiza os dados ou cria novo dependendo do tipo da rota
    const onSubmit = async data => {
        const values = {
            ...data,
            fields: {
                ...data.fields,
                unidadeID: loggedUnity.unidadeID
            },
            removedItems
        }
        console.log('🚀 ~ values:', values)

        try {
            if (type === 'new') {
                const response = await api.post(`${backRoute(staticUrl)}/new/insertData`, values)
                router.push(`${backRoute(staticUrl)}`) //? backRoute pra remover 'novo' da rota
                setId(response.data)
                toast.success(toastMessage.successNew)
            } else if (type === 'edit') {
                const response = await api.post(`${staticUrl}/updateData/${id}`, values)
                toast.success(toastMessage.successUpdate)
            }
            resetFields()
            getData()
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(toastMessage.errorRepeated)
            } else {
                console.log(error)
            }
        }
    }

    // Dados iniciais ao carregar página
    const getData = async () => {
        const route =
            type === 'new'
                ? `${backRoute(staticUrl)}/new/getData`
                : `${staticUrl}/getData/${id}?unidadeID=${loggedUnity.unidadeID}&papelID=${loggedUnity.papelID}&admin=${user.admin}`

        try {
            const response = await api.post(route)
            reset(response.data)
            console.log('🚀 ~ response.data:', response.data)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Adiciona novo Cargo | Função
    const addItem = () => {
        const currentDate = new Date()
        const formattedDate = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(
            currentDate.getDate()
        ).padStart(2, '0')}/${currentDate.getFullYear()}`

        const newValue = {
            conselho: '',
            data: formattedDate,
            dataInativacao: '',
            formacaoCargo: '',
            status: true
        }

        const updatedData = [...getValues('cargosFuncoes'), newValue]
        setValue('cargosFuncoes', updatedData)
        setChange(!change)
    }

    // Remove Cargo | Função existente
    const removeItem = (value, index) => {
        if (data.cargosFuncoes.length === 1) {
            toast.error('É necessário ter pelo menos um Cargo/Função!')
            return
        }

        //* Adiciona item removido ao array
        if (value.id) {
            setRemovedItems([...removedItems, value.id])
        }

        const newValue = getValues('cargosFuncoes').filter((_, i) => i !== index)
        setValue(`cargosFuncoes`, newValue) //* Remove item do formulário
        setChange(!change)
    }

    // Função que traz os dados quando carrega a página e atualiza quando as dependências mudam
    useEffect(() => {
        getData()
    }, [id])

    // Ao iniciar verifica se o profissional é usuario
    useEffect(() => {
        console.log('entra akiii')
        if (data && data.fields.usuarioID > 0) {
            console.log('entra akiii tmbm')
            setUserExistDefault(true)
        }
    }, [data])

    console.log('user exist default', userExistDefault)
    console.log('userExist nEW', userNewVerifyCPF)

    return (
        data && (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                    <Card>
                        <FormHeader
                            btnCancel
                            btnSave
                            btnNew
                            handleSubmit={() => handleSubmit(onSubmit)}
                            btnDelete={type === 'edit' ? true : false}
                            onclickDelete={() => setOpen(true)}
                            type={type}
                        />
                        <CardContent>
                            <Grid container spacing={5}>
                                {/* Fields */}
                                <Fields
                                    data={data}
                                    control={control}
                                    errors={errors}
                                    register={register}
                                    watch={watch}
                                    getValues={getValues}
                                    setError={setError}
                                    setValue={setValue}
                                    userNewVerifyCPF={userNewVerifyCPF}
                                    setUserNewVerifyCPF={setUserNewVerifyCPF}
                                    userExistVerifyCPF={userExistVerifyCPF}
                                    setUserExistVerifyCPF={setUserExistVerifyCPF}
                                    resetFields={resetFields}
                                    routeVeryfyCNP={routeVeryfyCNP}
                                />
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader title='Cargos / Funções' />
                        <CardContent>
                            <Grid container spacing={5}>
                                {/* Cargo / Função do profissonal */}
                                {data && (
                                    <CargoFuncao
                                        getValues={getValues}
                                        control={control}
                                        errors={errors}
                                        removeItem={removeItem}
                                        key={change}
                                    />
                                )}
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    sx={{ mt: 4, ml: 4 }}
                                    startIcon={<Icon icon='material-symbols:add-circle-outline-rounded' />}
                                    onClick={() => {
                                        addItem()
                                    }}
                                >
                                    Inserir item
                                </Button>
                            </Grid>
                        </CardContent>
                    </Card>

                    {/* userExistVerifyCPF */}

                    {(userExistDefault || userNewVerifyCPF) && (
                        <Card>
                            <CardHeader title='Permissões' />
                            <CardContent>
                                <Permissions
                                    menu={data.menu}
                                    control={control}
                                    register={register}
                                    setValue={setValue}
                                />
                            </CardContent>
                        </Card>
                    )}
                </div>
            </form>
        )
    )
}

export default FormProfissional
