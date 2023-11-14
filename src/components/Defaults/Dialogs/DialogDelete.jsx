import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { Typography } from '@mui/material'
import { api } from 'src/configs/api'

const DialogDelete = ({ title, description, open, handleClose, params }) => {
    const handleConfirmDelete = async () => {
        console.log('deletar dddddd', params)
        try {
            const response = await api.delete(params.route)
            console.log('🚀 ~ response:', response)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Dialog open={open}>
                <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
                <DialogContent>
                    <Typography variant='body1'>{description}</Typography>
                </DialogContent>
                <DialogActions className='dialog-actions-dense'>
                    <Button variant='outlined' color='secondary' onClick={handleClose}>
                        Cancelar
                    </Button>

                    <Button variant='contained' color='error' onClick={handleConfirmDelete}>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DialogDelete
