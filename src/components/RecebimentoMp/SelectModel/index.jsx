import { Box, Card, CardContent } from '@mui/material'
import Loading from 'src/components/Loading'
import FormHeader from 'src/components/Defaults/FormHeader'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const SelectModel = () => {
    const [isLoading, setLoading] = useState(false)

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

    const onSubmit = async data => {
        console.log(data)
    }

    return (
        <>
            <Loading show={isLoading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display='flex' flexDirection='column' sx={{ gap: 4 }}>
                    <Card>
                        <FormHeader btnCancel btnNext handleSubmit={() => handleSubmit(onSubmit)} type='new' />

                        <CardContent>
                            <p>selecione o modelo aqui...</p>
                        </CardContent>
                    </Card>
                </Box>
            </form>
        </>
    )
}

export default SelectModel
