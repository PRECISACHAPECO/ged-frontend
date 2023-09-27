import Router from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { api } from 'src/configs/api'
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Loading from 'src/components/Loading'
import DialogForm from 'src/components/Defaults/Dialogs/Dialog'
import FormHeader from '../../Defaults/FormHeader'
import { backRoute } from 'src/configs/defaultConfigs'
import { toastMessage } from 'src/configs/defaultConfigs'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import Check from 'src/components/Form/Check'
import { AuthContext } from 'src/context/AuthContext'
import Icon from 'src/@core/components/icon'
import AnexosList from './AnexosList'

const FormProduto = ({ id }) => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(null)
    const router = Router
    const type = id && id > 0 ? 'edit' : 'new'
    const staticUrl = router.pathname
    const { title } = useContext(ParametersContext)
    const { setId } = useContext(RouteContext)
    const { loggedUnity } = useContext(AuthContext)
    const [anexos, setAnexos] = useState([])
    const [removedItems, setRemovedItems] = useState([])
    const [anexosListKey, setAnexosListKey] = useState(0)

    const {
        trigger,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { errors },
        register
    } = useForm()

    // Envia dados para a API
    const onSubmit = async data => {
        const values = {
            ...data,
            unidadeID: loggedUnity.unidadeID,
            removedItems
        }
        console.log(values)
        try {
            if (type === 'new') {
                await api.post(`${backRoute(staticUrl)}/new/insertData`, values).then(response => {
                    router.push(`${backRoute(staticUrl)}`) // backRoute para remover 'novo' da rota
                    setId(response.data)
                    toast.success(toastMessage.successNew)
                })
            } else if (type === 'edit') {
                await api.post(`${staticUrl}/updateData/${id}`, values)
                toast.success(toastMessage.successUpdate)
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(toastMessage.errorRepeated)
            } else {
                console.log(error)
            }
        }
    }

    // Deleta os dados
    const handleClickDelete = async () => {
        try {
            await api.delete(`${staticUrl}/${id}`)
            setId(null)
            setOpen(false)
            toast.success(toastMessage.successDelete)
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(toastMessage.pendingDelete)
                setOpen(false)
            } else {
                console.log(error)
            }
        }
    }

    // Dados iniciais ao carregar a página
    const getData = async () => {
        try {
            const route = type === 'new' ? `${backRoute(staticUrl)}/new/getData` : `${staticUrl}/getData/${id}`
            await api.post(route).then(response => {
                console.log('🚀 ~ response:', response.data)
                setAnexos(response.data.anexos)
                setData(response.data)
                reset(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Remove anexo
    // Remove anexo
    const removeAnexo = (value, index) => {
        if (value.produtoAnexoID) {
            setRemovedItems([...removedItems, value.produtoAnexoID])
        }

        const newAnexos = anexos.filter((_, i) => i !== index)
        setAnexos(newAnexos)
        setValue('anexos', newAnexos)

        setAnexosListKey(prevKey => prevKey + 1)
    }

    // Adiciona um novo anexo
    const addAnexo = () => {
        const newAnexo = {
            nome: '',
            obrigatorio: 1,
            status: 1,
            descricao: '',
            observacao: ''
        }

        const updatedDataAnexos = [...anexos, newAnexo]
        setAnexos(updatedDataAnexos)

        // Adicione um novo campo para o novo anexo
        const fieldName = `anexos[${updatedDataAnexos.length - 1}]`
        setValue(`${fieldName}.nome`, newAnexo.nome)
        setValue(`${fieldName}.obrigatorio`, newAnexo.obrigatorio)
        setValue(`${fieldName}.status`, newAnexo.status)
        setValue(`${fieldName}.descricao`, newAnexo.descricao)
        setValue(`${fieldName}.observacao`, newAnexo.observacao)
    }

    // Função que traz os dados quando carrega a página e atualiza quando as dependências mudam
    useEffect(() => {
        getData()

        // Seta error nos campos obrigatórios
        if (type === 'new') {
            setTimeout(() => {
                trigger()
            }, 300)
        }
    }, [id])

    return (
        <>
            {!data && <Loading />}
            {data && (
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                    <Card>
                        <FormHeader
                            btnCancel
                            btnNew
                            btnSave
                            handleSubmit={() => handleSubmit(onSubmit)}
                            btnDelete={type === 'edit' ? true : false}
                            onclickDelete={() => setOpen(true)}
                            type={type}
                        />
                        <CardContent>
                            <Grid container spacing={5}>
                                <Input
                                    xs={11}
                                    md={6}
                                    title='Nome'
                                    name='fields.nome'
                                    required={true}
                                    control={control}
                                    errors={errors?.fields?.nome}
                                />
                                <Select
                                    xs={12}
                                    md={4}
                                    title='Unidade de medida'
                                    name='unidadeMedida.fields'
                                    value={data?.unidadeMedida.fields}
                                    required={true}
                                    options={data.unidadeMedida.options}
                                    register={register}
                                    setValue={setValue}
                                    control={control}
                                    errors={errors?.unidadeMedida?.fields}
                                />
                                <Check
                                    xs={1}
                                    md={1}
                                    title='Ativo'
                                    name='fields.status'
                                    value={data.fields.status}
                                    typePage={type}
                                    register={register}
                                />
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader title='Anexos' />
                        <CardContent>
                            <Grid container spacing={5}>
                                <AnexosList
                                    key={anexosListKey}
                                    anexos={anexos}
                                    removeAnexo={removeAnexo}
                                    control={control}
                                    register={register}
                                    errors={errors}
                                    type={type}
                                />
                                <Grid item xs={12}>
                                    <Button
                                        variant='outlined'
                                        color='primary'
                                        sx={{ mt: 1 }}
                                        startIcon={<Icon icon='material-symbols:add-circle-outline-rounded' />}
                                        onClick={() => {
                                            addAnexo()
                                        }}
                                    >
                                        Inserir Anexo
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </form>
            )}

            <DialogForm
                text='Tem certeza que deseja excluir?'
                title={'Excluir ' + title.title}
                openModal={open}
                handleClose={() => setOpen(false)}
                handleSubmit={handleClickDelete}
                btnCancel
                btnConfirm
            />
        </>
    )
}

export default FormProduto
