import Router from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { api } from 'src/configs/api'
import { Card, CardContent, Grid } from '@mui/material'
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

const FormItem = ({ id }) => {
    const [open, setOpen] = useState(false)
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
            unidadeID: loggedUnity.unidadeID
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
                setData(response.data)
                reset(response.data) //* Insere os dados no formulário
            })
        } catch (error) {
            console.log(error)
        }
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
                <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                    md={11}
                                    title='Nome'
                                    name='fields.nome'
                                    required={true}
                                    control={control}
                                    errors={errors?.fields?.nome}
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
                                <Select
                                    xs={12}
                                    md={12}
                                    title='Formulários'
                                    name='formulario.fields'
                                    value={data?.formulario.fields}
                                    required={true}
                                    options={data.formulario.options}
                                    register={register}
                                    setValue={setValue}
                                    control={control}
                                    errors={errors?.formulario?.fields}
                                />
                            </Grid>
                        </CardContent>
                    </form>
                </Card>
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
