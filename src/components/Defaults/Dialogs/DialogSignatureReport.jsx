import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { Typography } from '@mui/material'
import { api } from 'src/configs/api'
import { useContext } from 'react'
import { RouteContext } from 'src/context/RouteContext'
import toast from 'react-hot-toast'
import { AuthContext } from 'src/context/AuthContext'
import Icon from 'src/@core/components/icon'
import IconButton from '@mui/material/IconButton'

const DialogSignatureReport = ({ title, description, open, handleClose, params }) => {
    const handleSubmit = async () => {}

    return (
        <Dialog open={open} maxWidth={'md'} fullWidth>
            <DialogTitle id='form-dialog-title'>
                {title}
                <IconButton onClick={handleClose} className='!absolute !right-2 !top-2'>
                    <Icon icon='mdi:close' />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography variant='body1'>{description}</Typography>
            </DialogContent>
            <DialogActions className='dialog-actions-dense'>
                <Button variant='contained' color='error' onClick={handleSubmit}>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogSignatureReport
