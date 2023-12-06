import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { Typography } from '@mui/material'
import { api } from 'src/configs/api'
import Icon from 'src/@core/components/icon'
import IconButton from '@mui/material/IconButton'
import { useEffect, useState } from 'react'

const DialogSignatureReport = ({ title, description, open, handleClose }) => {
    const [logged, setLogged] = useState(false)
    const [idReport, setIdReport] = useState(null)
    console.log('🚀 ~ idReport:', idReport)

    const reportJSON = localStorage.getItem('report')
    const report = JSON.parse(reportJSON)

    const handleClick = async () => {
        setLogged(!logged)
        if (logged) {
            handleClose()
            setLogged(false)
            setIdReport(null)
        } else {
            await createSignature()
            console.log('criar docuemrnt')
        }
    }
    const createSignature = async () => {
        try {
            const response = await api.post(
                `/formularios/fornecedor/assinaturaRelatorio/${report.id}/${report.usuarioID}/${report.unidadeID}`
            )
            setIdReport(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Dialog open={open} maxWidth='lg' fullWidth>
            <DialogTitle id='form-dialog-title'>
                {title}
                <IconButton
                    onClick={() => {
                        handleClose(), setLogged(false)
                    }}
                    className='!absolute !right-2 !top-2'
                >
                    <Icon icon='mdi:close' />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {logged ? (
                    <>
                        <Typography variant='body1'>{description}</Typography>
                        <iframe
                            src={`https://painel.autentique.com.br/documentos/${idReport}`}
                            frameborder='0'
                            width='100%'
                            height='500px'
                        ></iframe>
                    </>
                ) : (
                    <>
                        <Typography variant='body1'>{description}</Typography>
                        <iframe
                            src='https://painel.autentique.com.br/entrar'
                            frameBorder='0'
                            width='100%'
                            height='500px'
                        ></iframe>
                    </>
                )}
            </DialogContent>
            <DialogActions className='dialog-actions-dense'>
                <Button variant={logged ? 'outlined' : 'contained'} color={'primary'} onClick={handleClick}>
                    {logged ? 'Fechar' : 'Confirmar e assinar'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogSignatureReport
