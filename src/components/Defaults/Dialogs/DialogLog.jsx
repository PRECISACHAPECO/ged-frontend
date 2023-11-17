import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import { api } from 'src/configs/api'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const DialogLog = ({ open, handleClose, row }) => {
    console.log('🚀 ~ row:', row)
    const getData = async () => {
        try {
            const response = await api.get(`${currentLink}/${loggedUnity.unidadeID}`)
            setResult(response.data)
            setTitle({
                title: 'Log',
                subtitle: {
                    id: id,
                    count: response.data.length,
                    new: false
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {}, [])

    return (
        <Dialog open={open} onClose={handleClose} scroll='paper'>
            <DialogActions className='dialog-actions-dense'>
                <Button variant='outlined' color='secondary' onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant='contained' color='error'>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogLog
