import Router from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { api } from 'src/configs/api'
import { Button, Card, CardContent, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Loading from 'src/components/Loading'
import DialogForm from 'src/components/Defaults/Dialogs/Dialog'
import { formType } from 'src/configs/defaultConfigs'
import FormHeader from '../../Defaults/FormHeader'
import { backRoute } from 'src/configs/defaultConfigs'
import { toastMessage } from 'src/configs/defaultConfigs'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { useContext } from 'react'
import Input from 'src/components/Form/Input'
import Check from 'src/components/Form/Check'

const FormAtividade = ({ id }) => {
    const { title } = useContext(ParametersContext)
    const { setId } = useContext(RouteContext)
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(null)
    const router = Router
    const type = id && id > 0 ? 'edit' : 'new'
    const staticUrl = router.pathname // Url sem ID
    const inputRef = useRef(null)

    const {
        trigger,
        handleSubmit,
        reset,
        register,
        control,
        formState: { errors }
    } = useForm()

    //? Envia dados para a api
    const onSubmit = async values => {
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
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(toastMessage.errorRepeated)
            } else {
                console.log(error)
            }
        }
    }

    //? Função que deleta os dados
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
        if (type == 'new') {
            setData({
                fields: {
                    nome: '',
                    status: 1
                }
            })
        }
        try {
            const route = type === 'new' ? `${backRoute(staticUrl)}/new/getData` : `${staticUrl}/getData/${id}`
            if (type === 'new' || id > 0) {
                console.log('🚀 ~ route:', route)
                await api.post(route).then(response => {
                    setData(response.data)
                    console.log('🚀 ~ response.data:', response.data)
                    reset(response.data) //* Insere os dados no formulário
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    //? Função que traz os dados quando carrega a página e atualiza quando as dependências mudam
    useEffect(() => {
        console.log('getData: ', id)
        getData()

        //? Seta error nos campos obrigatórios
        if (type === 'new') {
            setTimeout(() => {
                inputRef.current.focus()
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
                            btnSave
                            btnNew
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
                                    // ref={inputRef}
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
                                    value={data?.fields?.status}
                                    typePage={type}
                                    register={register}
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

export default FormAtividade
