import { Alert, Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import toast from 'react-hot-toast'
import Loading from 'src/components/Loading'
import Select from 'src/components/Form/Select'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'
import FormHeader from 'src/components/Defaults/FormHeader'
import { SettingsContext } from 'src/@core/context/settingsContext'
import { useForm } from 'react-hook-form'
import Icon from 'src/@core/components/icon'
import { useEffect, useContext, useState } from 'react'
import { api } from 'src/configs/api'
import Router from 'next/router'
import CardList from 'src/components/Defaults/Cards/CardList'
import ListHeader from 'src/components/Defaults/ListHeader'

const SelectModel = () => {
    const { user, loggedUnity } = useContext(AuthContext)
    const { setId } = useContext(RouteContext)
    const [models, setModels] = useState([])
    const [model, setModel] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const router = Router
    const { settings } = useContext(SettingsContext)
    const mode = settings.mode

    // const {
    //     reset,
    //     register,
    //     getValues,
    //     setValue,
    //     control,
    //     watch,
    //     handleSubmit,
    //     clearErrors,
    //     setError,
    //     formState: { errors }
    // } = useForm()

    // const onSubmit = async values => {
    //     try {
    //         const data = {
    //             model: values.model,
    //             profissionalID: user.profissionalID,
    //             unidadeID: loggedUnity.unidadeID
    //         }
    //         console.log('🚀 ~ data:', data)

    //         const response = await api.post(`/formularios/recebimento-mp/insertData`, data)
    //         if (response) {
    //             console.log('🚀 ~ response.data.recebimentoMpID:', response.data.recebimentoMpID)
    //             toast.success('Novo formulário criado!')
    //             setId(response.data.recebimentoMpID)
    //             router.push(`/formularios/recebimento-mp/`)
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const handleChange = value => {
    //     setModel(value)
    // }

    // const handleNewForm = async newFormID => {
    //     try {
    //         onSubmit({
    //             model: {
    //                 id: newFormID
    //             }
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     getModels()
    // }, [])

    return (
        <>
            <FormHeader btnCancel btnNew type='new' />
            <ListHeader btnBack btnNew type='new' />
        </>
    )
}

export default SelectModel
