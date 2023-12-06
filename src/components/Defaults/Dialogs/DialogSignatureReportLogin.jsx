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

const DialogSignatureReport = ({ title, description, open, handleClose }) => {
    // const reportJSON = localStorage.getItem('report')
    // const report = JSON.parse(reportJSON)

    // const values = {
    //     report: report.pathReportPrincipal,
    //     email: 'jonatankalmeidakk28@gmail.com'
    // }

    const handleLogin = async () => {
        // try {
        //     const response = await api.post('/report/signature', values)
        //     console.log('🚀 ~ response:', response)
        // } catch (err) {
        //     console.log(err)
        // }
    }

    return (
        <Dialog open={open} maxWidth='lg' fullWidth>
            <DialogTitle id='form-dialog-title'>
                {title}
                <IconButton onClick={handleClose} className='!absolute !right-2 !top-2'>
                    <Icon icon='mdi:close' />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography variant='body1'>{description}</Typography>
                <iframe
                    src='https://painel.autentique.com.br/entrar'
                    frameborder='0'
                    width='100%'
                    height='500px'
                ></iframe>
            </DialogContent>
            <DialogActions className='dialog-actions-dense'>
                <Button variant='contained' color='primary' onClick={handleLogin}>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogSignatureReport
