import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import { Alert, FormControl, Grid, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { validationEmail } from '../../../../configs/validations'
import Input from 'src/components/Form/Input'
import { AuthContext } from 'src/context/AuthContext'
import { useForm } from 'react-hook-form'
import { validationCNPJ } from '../../../../configs/validations'
import { api } from 'src/configs/api'
import { useRouter } from 'next/router'
import IsFornecedor from './isFornecedor'
import FornecedorNew from './FornecedorNew'

const NewFornecedor = ({ handleClose, openModal }) => {
    const { user, loggedUnity } = useContext(AuthContext)
    const [fields, setFields] = useState(null)

    const [validationCnpj, setValidationCnpj] = useState(null)
    const router = useRouter()

    const {
        handleSubmit,
        reset,
        control,
        formState: { errors },
        setValue,
        setError,
        register
    } = useForm({})

    const handleCnpj = cnpj => {
        if (cnpj.length == 18) {
            if (validationCNPJ(cnpj)) {
                getFornecedorByCnpj(cnpj)
            } else {
                setValidationCnpj(false)
            }
        } else {
            setValidationCnpj(null)
            setFields(null)
        }
    }

    // Verifica se o CNPJ já em fornecedor cadastrado no sistema
    const getFornecedorByCnpj = async cnpj => {
        try {
            const response = await api.post(`/formularios/fornecedor/cnpj`, {
                unidadeID: loggedUnity.unidadeID,
                cnpj: cnpj
            })
            setFields({
                fornecedorExist: response.data
            })

            if (!response.data.isFornecedor) {
                setFields({
                    fornecedorNew: {
                        name: 'teste'
                    }
                })
            }
        } catch (err) {
            console.error(err)
        }
    }

    const onSubmit = values => {
        console.log('🚀 ~ onSubmit ~ values:', values)
    }

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle id='form-dialog-title'>
                        <div className='flex justify-between items-center'>
                            <span>Habilitar novo fornecedor</span>
                            <IconButton size='medium' title='Clear' aria-label='Clear' onClick={handleClose}>
                                <Icon icon='mdi:close' fontSize={20} />
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{ mb: 3 }}>
                            Insira o CNPJ da empresa que deseja habilitar como um novo fornecedor. Com isso, a empresa
                            ficará apta a preencher formulários para a {loggedUnity.nomeFantasia}.
                        </DialogContentText>
                        <Grid container spacing={4}>
                            <Input
                                xs={12}
                                md={6}
                                title='CNPJ'
                                name='fields.cnpj'
                                value={fields?.cnpj}
                                onChange={handleCnpj}
                                mask='cnpj'
                                required
                                control={control}
                                errors={errors?.fields?.cnpj}
                            />
                            {/* Mostra quando cnpj digitado for inválido  */}
                            {validationCnpj == false && (
                                <Grid item xs={12} md={12} sx={{ mt: 2 }}>
                                    <Alert severity='error'>CNPJ inválido!</Alert>
                                </Grid>
                            )}
                            <Grid item>
                                {/* Se fornecedor já está cadastrado no sistema */}
                                {fields && fields?.fornecedorExist?.isFornecedor && (
                                    <IsFornecedor data={fields.fornecedorExist.fornecedor} />
                                    // <h1>hellooooooooo</h1>
                                )}
                                {fields && fields?.fornecedorNew && <FornecedorNew />}
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions className='dialog-actions-dense'>
                        <div className='flex justify-between items-center gap-6'>
                            {/* <Button variant='outlined' color='error' onClick={handleClose}>
                            Cancelar
                        </Button> */}
                            {/* <Button variant='contained' color='primary' type='submit'>
                                Verificar
                            </Button> */}
                        </div>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default NewFornecedor
