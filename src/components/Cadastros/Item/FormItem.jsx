import Router from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { api } from 'src/configs/api'
import { Card, CardContent, Divider, Grid } from '@mui/material'
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
import ListOptions from './ListOptions'

const FormItem = ({ id, setNewChange, newChange, outsideID, handleConfirmNew }) => {
    const [open, setOpen] = useState(false)
    const [change, setChange] = useState(false)
    const [data, setData] = useState(null)
    const router = Router
    const type = id && id > 0 ? 'edit' : 'new'
    const staticUrl = router.pathname
    const { title } = useContext(ParametersContext)
    const { setId } = useContext(RouteContext)
    const { loggedUnity } = useContext(AuthContext)

    const {
        trigger,
        handleSubmit,
        watch,
        getValues,
        setValue,
        reset,
        control,
        formState: { errors },
        register
    } = useForm()

    // handleSave()

    //? Envia dados para a api
    const onSubmit = async data => {
        const values = {
            ...data,
            unidadeID: loggedUnity.unidadeID
        }
        console.log('onSubmit: ', values)

        try {
            if (type === 'new') {
                await api.post(`cadastros/item/new/insertData`, values).then(response => {
                    if (outsideID) {
                        setId(outsideID)
                        handleConfirmNew(response.data)
                    } else {
                        router.push(`${backRoute(staticUrl)}`) //? backRoute pra remover 'novo' da rota
                        setId(response.data)
                    }
                    toast.success(toastMessage.successNew)
                })
            } else if (type === 'edit') {
                await api.post(`${staticUrl}/updateData/${id}`, values)
                toast.success(toastMessage.successUpdate)
                getData()
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
            const route = type === 'new' ? 'cadastros/item/new/getData' : `${staticUrl}/getData/${id}`
            await api.post(route).then(response => {
                console.log('🚀 ~ getData: ', response.data)

                setData(response.data)
                reset(response.data) //* Insere os dados no formulário
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addAnexo = index => {
        const copyAnexos = [...getValues(`fields.opcoes`)]
        copyAnexos[index].anexos.push({
            nome: '',
            obrigatorio: false
        })
        const newData = {
            ...data,
            fields: {
                ...data.fields,
                opcoes: copyAnexos
            }
        }
        setData(newData)
        setValue(`fields.opcoes`, copyAnexos)
    }

    const refreshAlternatives = async value => {
        try {
            const response = await api.post(`cadastros/item/getAlternatives`, {
                alternativa: value
            })
            if (response.data) {
                console.log('🚀 ~ response.data:', response.data)
                setChange(!change)
                setValue('fields.opcoes', response.data)
                setData({ ...data, fields: { ...data.fields, opcoes: response.data } })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleRemoveAnexo = (value, index, indexAnexo) => {
        console.log('🚀 ~ data, index, indexAnexo:', value, index, indexAnexo)
        let copyAnexos = [...getValues(`fields.opcoes`)]

        // remover anexo do array
        copyAnexos[index].anexos.splice(indexAnexo, 1)
        console.log('🚀 ~ copyAnexos:', copyAnexos)

        // remover anexo do banco
        const newData = {
            ...data,
            fields: {
                ...data.fields,
                opcoes: copyAnexos
            }
        }
        console.log('🚀 ~ newData:', newData)
        setData(newData)
        setValue(`fields.opcoes`, copyAnexos)
        setChange(!change)
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

    useEffect(() => {
        if (newChange) handleSubmit(onSubmit)()
    }, [newChange])

    return (
        <>
            {!data && <Loading />}
            {data && (
                <>
                    <Card>
                        <form onSubmit={handleSubmit(onSubmit)} id='formItem'>
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
                                    <Select
                                        xs={12}
                                        md={11}
                                        title='Formulários'
                                        name='fields.formulario'
                                        value={data?.fields.formulario}
                                        required
                                        options={data?.fields?.formulario?.opcoes}
                                        register={register}
                                        setValue={setValue}
                                        control={control}
                                        errors={errors?.fields?.formulario}
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
                                    <Input
                                        xs={12}
                                        md={12}
                                        title='Nome'
                                        name='fields.nome'
                                        required
                                        control={control}
                                        errors={errors?.fields?.nome}
                                    />
                                    <Select
                                        xs={12}
                                        md={12}
                                        title='Alternativa'
                                        name='fields.alternativa'
                                        value={data?.fields.alternativa}
                                        onChange={refreshAlternatives}
                                        required
                                        options={data?.fields?.alternativa?.opcoes}
                                        register={register}
                                        setValue={setValue}
                                        control={control}
                                        errors={errors?.fields?.alternativa}
                                    />
                                    <Input
                                        xs={12}
                                        md={12}
                                        multiline
                                        rows={4}
                                        title='Ajuda do item (mostrado em (?))'
                                        name='fields.ajuda'
                                        control={control}
                                        errors={errors?.fields?.ajuda}
                                    />
                                    <Divider />
                                </Grid>
                            </CardContent>
                        </form>
                    </Card>

                    <ListOptions
                        key={change}
                        data={data?.fields?.opcoes}
                        handleRemoveAnexo={handleRemoveAnexo}
                        register={register}
                        control={control}
                        errors={errors}
                        getValues={getValues}
                        addAnexo={addAnexo}
                        watch={watch}
                    />
                </>
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

export default FormItem
