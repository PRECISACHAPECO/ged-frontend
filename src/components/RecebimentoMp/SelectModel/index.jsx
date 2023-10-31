import { Alert, Box, Card, CardContent, Grid } from '@mui/material'
import toast from 'react-hot-toast'
import Loading from 'src/components/Loading'
import Select from 'src/components/Form/Select'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'
import FormHeader from 'src/components/Defaults/FormHeader'
import { useForm } from 'react-hook-form'
import { useEffect, useContext, useState } from 'react'
import { api } from 'src/configs/api'
import Router from 'next/router'

const SelectModel = () => {
    const { user, loggedUnity } = useContext(AuthContext)
    const { setId } = useContext(RouteContext)
    const [models, setModels] = useState([])
    const [model, setModel] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const router = Router

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

    const onSubmit = async values => {
        try {
            const data = {
                model: values.model,
                profissionalID: user.profissionalID,
                unidadeID: loggedUnity.unidadeID
            }

            const response = await api.post(`/formularios/recebimento-mp/insertData`, data)
            if (response) {
                toast.success('Novo formulário criado!')
                setId(response.data.recebimentoMpID)
                router.push(`/formularios/recebimento-mp/`)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const getModels = async () => {
        try {
            setLoading(true)
            const response = await api.get(`/formularios/recebimento-mp/getModels/1`)
            console.log(response.data)
            setModels(response.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = value => {
        setModel(value)
    }

    useEffect(() => {
        getModels()
    }, [])

    return (
        <>
            <Loading show={isLoading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display='flex' flexDirection='column' sx={{ gap: 4 }}>
                    <Card>
                        <FormHeader
                            btnCancel
                            btnNext
                            disabled={!model}
                            handleSubmit={() => handleSubmit(onSubmit)}
                            type='new'
                        />

                        <CardContent>
                            <Grid container spacing={4}>
                                {models && (
                                    <>
                                        <Select
                                            xs={12}
                                            md={12}
                                            className='order-1'
                                            title='Modelo de formulário'
                                            onChange={handleChange}
                                            name={`model`}
                                            options={models ?? []}
                                            value={null}
                                            register={register}
                                            setValue={setValue}
                                            control={control}
                                        />

                                        {model && model.cabecalho != '' && (
                                            <Grid item xs={12} md={12} className='order-2'>
                                                <Alert severity='info'>{model.cabecalho}</Alert>
                                            </Grid>
                                        )}
                                    </>
                                )}
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </form>
        </>
    )
}

export default SelectModel
