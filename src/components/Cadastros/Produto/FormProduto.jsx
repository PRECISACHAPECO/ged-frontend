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
import { formType } from 'src/configs/defaultConfigs'
import FormHeader from '../../Defaults/FormHeader'
import { backRoute } from 'src/configs/defaultConfigs'
import { toastMessage } from 'src/configs/defaultConfigs'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import Check from 'src/components/Form/Check'
import { AuthContext } from 'src/context/AuthContext'
import Icon from 'src/@core/components/icon'
import Remove from 'src/components/Form/Remove'

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
    const [removedItems, setRemovedItems] = useState([]) //? Itens removidos do formulário

    const {
        trigger,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { errors },
        register
    } = useForm()

    //? Envia dados para a api
    const onSubmit = async data => {
        const values = {
            ...data,
            unidadeID: loggedUnity.unidadeID,
            removedItems
        }
        try {
            if (type === 'new') {
                await api.post(`${backRoute(staticUrl)}/new/insertData`, values).then(response => {
                    router.push(`${backRoute(staticUrl)}`) //? backRoute pra remover 'novo' da rota
                    setId(response.data)
                    toast.success(toastMessage.successNew)
                })
            } else if (type === 'edit') {
                await api.post(`${staticUrl}/updateData/${id}`, values)
                toast.success(toastMessage.successUpdate)
            }
            setSavingForm(!savingForm)
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(toastMessage.errorRepeated)
            } else {
                console.log(error)
            }
        }
    }

    //? Deleta os dados
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

    //? Dados iniciais ao carregar página
    const getData = async () => {
        try {
            const route = type === 'new' ? `${backRoute(staticUrl)}/new/getData` : `${staticUrl}/getData/${id}`
            await api.post(route).then(response => {
                console.log('🚀 ~ response:', response.data)
                setAnexos(response.data.anexos)
                setData(response.data)
                reset(response.data) //* Insere os dados no formulário
            })
        } catch (error) {
            console.log(error)
        }
    }

    const removeItem = (value, index) => {
        const newValue = [...anexos]

        //* Adiciona item removido ao array
        if (value.produtoAnexoID) {
            setRemovedItems([...removedItems, value.produtoAnexoID])
        }

        newValue.splice(index, 1)
        setAnexos(newValue)

        setValue('anexo', newValue)
    }

    //? Adiciona um novo anexo
    const addAnexo = () => {
        const newAnexo = {
            nome: '',
            obrigatorio: 1,
            status: 1,
            observacao: ''
        }

        const updatedDataAnexos = [...anexos, newAnexo]
        setAnexos(updatedDataAnexos)
    }

    //? Função que traz os dados quando carrega a página e atualiza quando as dependências mudam
    useEffect(() => {
        getData()

        //? Seta error nos campos obrigatórios
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
                                {anexos &&
                                    anexos.map((item, index) => (
                                        <>
                                            <Input
                                                md={9}
                                                title='Nome'
                                                name={`anexos[${index}].nome`}
                                                required={true}
                                                control={control}
                                                errors={errors?.fields?.nome}
                                            />
                                            <Check
                                                xs={1}
                                                md={1}
                                                title='Obrigatório'
                                                name={`anexos[${index}].obrigatorio`}
                                                value={item.obrigatorio == 1 ? true : false}
                                                typePage={type}
                                                register={register}
                                            />
                                            <Check
                                                xs={1}
                                                md={1}
                                                title='Ativo'
                                                name={`anexos[${index}].status`}
                                                value={item.obrigatorio == 1 ? true : false}
                                                typePage={type}
                                                register={register}
                                            />
                                            <Remove
                                                xs={4}
                                                md={1}
                                                title='Remover'
                                                index={index}
                                                removeItem={removeItem}
                                                item={item}
                                                pending={item.hasPending}
                                                textSuccess='Remover este item'
                                                textError='Este item não pode mais ser removido pois possui anexo vinculado a ele'
                                            />
                                            <Input
                                                xs={11}
                                                md={12}
                                                multiline
                                                items={4}
                                                title='Descrição (opcional)'
                                                name={`anexos[${index}].descricao`}
                                                required={true}
                                                control={control}
                                                errors={errors?.fields?.nome}
                                            />
                                        </>
                                    ))}

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
