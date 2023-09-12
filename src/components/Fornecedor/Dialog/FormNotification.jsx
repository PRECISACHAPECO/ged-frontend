import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import Input from 'src/components/Form/Input'

const FormNotification = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = values => {
        console.log('🚀 ~ values:', values)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
                <Input xs={12} md={4} title='Email' name='email' control={control} errors={errors?.email} />
            </DialogContent>
            <DialogActions className='dialog-actions-dense'>
                <Button variant='outlined' color='primary' onClick={() => setOpenModal(false)}>
                    Fechar
                </Button>

                <Button type='submit' variant='contained' color='primary'>
                    Confirmar
                </Button>
            </DialogActions>
        </form>
    )
}

export default FormNotification
