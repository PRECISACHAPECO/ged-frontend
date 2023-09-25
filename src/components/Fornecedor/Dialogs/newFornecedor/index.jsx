import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import Icon from 'src/@core/components/icon'
import { Alert, FormControl, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { validationEmail } from '../../../../configs/validations'
import Input from 'src/components/Form/Input'
import { AuthContext } from 'src/context/AuthContext'

const NewFornecedor = ({ handleClose, openModal }) => {
    const { user, loggedUnity } = useContext(AuthContext)
    return (
        <>
            <Dialog
                open={openModal}
                aria-labelledby='form-dialog-title'
                disableEscapeKeyDown
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleClose()
                    }
                }}
            >
                <DialogTitle id='form-dialog-title'>
                    <div className='flex justify-between items-center'>
                        <span>Habilitar novo fornecedor</span>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ mb: 3 }}>
                        Insira o CNPJ da empresa que deseja habilitar como um novo fornecedor. Com isso, a empresa
                        ficará apta a preencher formulários para a {loggedUnity.nomeFantasia}.
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='dialog-actions-dense'>
                    {/* <div className='flex justify-between items-center gap-6'>
                        <Button variant='outlined' color='error' onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant='contained' color='primary'>
                            Verificar
                        </Button>
                    </div> */}
                </DialogActions>
            </Dialog>
        </>
    )
}

export default NewFornecedor
