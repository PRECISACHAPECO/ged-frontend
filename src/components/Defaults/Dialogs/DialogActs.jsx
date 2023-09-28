import { Alert, DialogActions, DialogContent, DialogContentText, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from 'src/components/Form/Input'
import Icon from 'src/@core/components/icon'

const DialogActs = ({
    title,
    description,
    setOpenModal,
    openModal,
    children,
    handleConclusion,
    handleCopyLink,
    size
}) => {
    const {
        control,
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm()

    console.log('🚀 ~ DialogActs control:', control)

    const validateForm = values => {
        handleSubmit(onSubmit)(values)
    }

    const onSubmit = values => {
        // limpa formulario
        reset()
        setOpenModal(false)
        handleConclusion(values)
    }

    return (
        <>
            <Dialog
                open={openModal}
                onClose={() => setOpenModal(false)}
                fullWidth={size ? true : false}
                maxWidth={size ? size : null}
            >
                <form>
                    <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
                    <DialogContent>
                        <Alert severity='info'>{description}</Alert>
                    </DialogContent>

                    {/* Passa children com props */}
                    <DialogContent>
                        {React.cloneElement(children, {
                            control: control,
                            register: register,
                            setValue: setValue,
                            errors: errors,
                            onSubmit: onSubmit
                        })}
                    </DialogContent>

                    <DialogActions className='dialog-actions-dense'>
                        <Button variant='outlined' color='primary' onClick={() => setOpenModal(false)}>
                            Fechar
                        </Button>

                        {handleConclusion && (
                            <Button type='button' variant='contained' color='primary' onClick={validateForm}>
                                Confirmar
                            </Button>
                        )}

                        {handleCopyLink && (
                            <Button
                                variant='contained'
                                color='primary'
                                startIcon={<Icon icon='uil:copy' fontSize={20} />}
                                onClick={handleCopyLink}
                            >
                                Copiar Link
                            </Button>
                        )}
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default DialogActs
