import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControl,
    TextField,
    DialogContentText,
    Grid,
    Autocomplete,
    Alert,
    Typography
} from '@mui/material'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'
import { ParametersContext } from 'src/context/ParametersContext'
import { useRouter } from 'next/router'

//* Custom components
import Select from 'src/components/Form/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { criptoMd5, onlyNumber } from 'src/configs/conversions'

//* CNPJ Mask
import { cnpjMask } from '../../../configs/masks'
import { validationCNPJ, validationEmail } from '../../../configs/validations'
import { useForm } from 'react-hook-form'
import { api } from 'src/configs/api'
import { toast } from 'react-hot-toast'
import DialogForm from 'src/components/Defaults/Dialogs/Dialog'

const DialogNewFornecedor = ({ handleClose, openModal, makeFornecedor, loadingSave }) => {
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const { user, loggedUnity } = useContext(AuthContext)
    const { handleSearch } = useContext(ParametersContext)
    const [data, setData] = useState(null)
    const [cnpj, setCnpj] = useState(null)
    const [viewEmail, setViewEmail] = useState(false)
    const [email, setEmail] = useState(null)
    const [errorCnpj, setErrorCnpj] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [openConfirmMakeFornecedor, setOpenConfirmMakeFornecedor] = useState(false)
    const [messageCopied, setMessageCopied] = useState(false)
    const [optionsGruposAnexo, setOptionsGruposAnexo] = useState([])
    const [gruposAnexo, setGruposAnexo] = useState([])
    const [nomeFornecedor, setNomeFornecedor] = useState('')

    const {
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
        register
    } = useForm({})

    const copyLink = () => {
        //? Mantém o "copiado" por 5 segundos
        setMessageCopied(true)
        setTimeout(() => {
            setMessageCopied(false)
        }, 5000)
        //? Criptografa CNPJ e unidadeID, monta URL e copia pra clipboard
        const cnpjMd5 = criptoMd5(onlyNumber(cnpj.toString()))
        const unidadeIDMd5 = criptoMd5(onlyNumber(loggedUnity.unidadeID.toString()))
        const originRoute = window.location.origin
        const url = `${originRoute}/registro?c=${cnpjMd5}&u=${unidadeIDMd5}&n=${encodeURIComponent(
            nomeFornecedor
        )}&e=${email}`
        navigator.clipboard.writeText(url)
    }

    const getFornecedorByCnpj = async cnpj => {
        if (cnpj && cnpj.length === 18) {
            if (validationCNPJ(cnpj)) {
                setLoading(true)
                setErrorCnpj(false)
                await api
                    .post(`/formularios/fornecedor/cnpj`, { unidadeID: loggedUnity.unidadeID, cnpj: cnpj })
                    .then(response => {
                        setData(response.data)
                        setCnpj(cnpj)
                        setNomeFornecedor(response.data?.nomeFornecedor)
                        setEmail(response.data?.email)
                        setLoading(false)
                    })
            } else {
                setData(null)
                setCnpj(null)
                setErrorCnpj(true)
            }
        }
    }

    //? Fornecedor já está vinculado e já possui formulários respondidos, então pega o cnpj e coloca na busca do datatable
    const formFilter = async () => {
        handleSearch(cnpj)
        handleClose()
    }

    const fornecedorStatus = async () => {
        setLoading(true)
        await api
            .post(`/formularios/fornecedor/fornecedorStatus`, {
                unidadeID: loggedUnity.unidadeID,
                cnpj: cnpj,
                status: 1
            })
            .then(response => {
                if (response.status === 200) {
                    setData(response.data)
                    toast.success('Fornecedor reativado com sucesso')
                } else {
                    toast.error('Erro ao reativar fornecedor')
                }
                setLoading(false)
            })
    }

    const confirmMakeFornecedor = () => {
        setOpenConfirmMakeFornecedor(true)
    }

    const getGruposAnexo = async () => {
        await api
            .post(`/formularios/fornecedor/getGruposAnexo`, { unidadeID: loggedUnity.unidadeID })
            .then(response => {
                setOptionsGruposAnexo(response.data)
            })
            .catch(error => {
                console.log('🚀 ~ error:', error)
            })
    }

    const onSubmit = values => {
        console.log('🚀 ~ onSubmit ~ values:', values)
    }

    useEffect(() => {
        getGruposAnexo()
    }, [])

    useEffect(() => {
        getFornecedorByCnpj(cnpj)
        handleSubmit(onSubmit)
    }, [loadingSave])

    useEffect(() => {
        reset()
        setData(null)
        setCnpj(null)
        setNomeFornecedor(null)
        setEmail(null)
    }, [openModal])

    return (
        <>
            <Dialog open={openModal} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Habilitar novo fornecedor</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ mb: 3 }}>
                        Insira o CNPJ da empresa que deseja habilitar como um novo fornecedor. Com isso, a empresa
                        ficará apta a preencher formulários para a {loggedUnity.nomeFantasia}.
                    </DialogContentText>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        // defaultValue={data?.cnpj ? data.cnpj : ''}
                                        label='CNPJ'
                                        placeholder='CNPJ'
                                        aria-describedby='validation-schema-nome'
                                        name='cnpj'
                                        error={errorCnpj}
                                        {...register(`cnpj`, {
                                            required: true,
                                            validate: value => validationCNPJ(value) || 'CNPJ inválido'
                                        })}
                                        helperText={errors.cnpj?.message}
                                        inputProps={{
                                            maxLength: 18,
                                            onChange: e => {
                                                setData(null)
                                                setValue('cnpj', cnpjMask(e.target.value)),
                                                    setCnpj(cnpjMask(e.target.value)),
                                                    getFornecedorByCnpj(e.target.value),
                                                    setViewEmail(false)
                                            }
                                        }}
                                    />
                                    {errorCnpj && (
                                        <Typography variant='body2' color='error'>
                                            Por favor, insira um CNPJ válido!
                                        </Typography>
                                    )}
                                </FormControl>
                            </Grid>

                            {/* Enviar e-mail para o fornecedor novo */}
                            {data && data.isFornecedor && !data.hasFormulario && viewEmail && (
                                <>
                                    <Grid item xs={12} md={12} sx={{ mt: 4 }}>
                                        <FormControl fullWidth>
                                            <TextField
                                                defaultValue=''
                                                type='email'
                                                label='E-mail'
                                                placeholder='E-mail'
                                                aria-describedby='validation-schema-nome'
                                                name='email'
                                                {...register(`email`, {
                                                    required: true,
                                                    validate: value => value.includes('@') || 'E-mail inválido'
                                                })}
                                                error={errorEmail}
                                                helperText={errorEmail ? 'Insira um e-mail válido' : null}
                                                inputProps={{
                                                    onChange: e => {
                                                        setValue('email', e.target.value)
                                                        setEmail(e.target.value)
                                                        setErrorEmail(validationEmail(e.target.value) ? false : true)
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={12} sx={{ mt: 2 }}>
                                        <Alert severity='info'>
                                            Um e-mail será enviado para o fornecedor com as instruções de cadastro e
                                            preenchimento do formulário
                                        </Alert>
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </form>

                    {/* Resultado */}
                    {data && (
                        <Grid container sx={{ mt: 2 }}>
                            <Grid item xs={12} md={12}>
                                {data.isFornecedor && data.hasFormulario ? (
                                    <>
                                        <Alert severity='success'>
                                            Esse CNPJ está habilitado como um Fornecedor da {loggedUnity.nomeFantasia}
                                        </Alert>
                                        {/* Copiar link */}
                                        <Button
                                            startIcon={
                                                <Icon icon={messageCopied ? 'mdi:check-bold' : 'iconamoon:copy-bold'} />
                                            }
                                            sx={{ mt: 2 }}
                                            onClick={!messageCopied ? copyLink : null}
                                            style={{ cursor: messageCopied ? 'default' : 'pointer' }}
                                        >
                                            {messageCopied ? 'Copiado!' : 'Copiar Link do Formulário'}
                                        </Button>
                                    </>
                                ) : data.isFornecedor && !data.hasFormulario ? (
                                    <Alert severity='warning'>
                                        Esse CNPJ já é seu fornecedor, mas não há nenhum formulário criado
                                    </Alert>
                                ) : !data.isFornecedor && data.hasFormulario ? (
                                    <Alert severity='warning'>
                                        Esse CNPJ não está mais ativo como um fornecedor mas possui formulários
                                        preenchidos
                                    </Alert>
                                ) : !data.isFornecedor && !data.hasFormulario ? (
                                    <>
                                        {/* Nome do fornecedor */}
                                        <Grid item xs={12} md={12} sx={{ my: 1 }}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    defaultValue=''
                                                    label='Nome do Fornecedor'
                                                    placeholder='Nome do Fornecedor'
                                                    aria-describedby='validation-schema-nome'
                                                    name='nomeFornecedor'
                                                    // {...register(`nomeFornecedor`, {
                                                    //     required: true
                                                    // })}
                                                    inputProps={{
                                                        onChange: e => {
                                                            setValue('nomeFornecedor', e.target.value)
                                                            setNomeFornecedor(e.target.value)
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid>

                                        {/* Grupos de anexo */}
                                        <Grid item xs={12} md={12} sx={{ mt: 3 }}>
                                            <FormControl fullWidth>
                                                <Autocomplete
                                                    multiple
                                                    limitTags={5}
                                                    options={optionsGruposAnexo}
                                                    getOptionLabel={option => option.nome}
                                                    defaultValue={[]}
                                                    // {...register('gruposAnexo')}
                                                    onChange={(e, newValue) => {
                                                        setGruposAnexo(newValue)
                                                    }}
                                                    renderInput={params => (
                                                        <TextField
                                                            {...params}
                                                            label='Grupos de Anexo'
                                                            placeholder='Grupos de Anexo'
                                                        />
                                                    )}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Alert severity='info' sx={{ mt: 3 }}>
                                            Esse CNPJ ainda não é seu fornecedor
                                        </Alert>
                                    </>
                                ) : null}
                            </Grid>
                        </Grid>
                    )}
                </DialogContent>

                <DialogActions className='dialog-actions-dense' sx={{ mx: 2, mb: 2 }}>
                    <Button variant='outlined' onClick={handleClose}>
                        Fechar
                    </Button>

                    {data &&
                        ((data.isFornecedor && data.hasFormulario) ||
                            (!data.isFornecedor && data.hasFormulario) ||
                            (!data.isFornecedor && !data.hasFormulario)) && (
                            <Button
                                variant='contained'
                                onClick={
                                    data.isFornecedor && data.hasFormulario
                                        ? formFilter
                                        : // : data.isFornecedor && !data.hasFormulario
                                        // ? sendMail
                                        !data.isFornecedor && data.hasFormulario
                                        ? fornecedorStatus
                                        : !data.isFornecedor && !data.hasFormulario
                                        ? confirmMakeFornecedor
                                        : null
                                }
                            >
                                {data.isFornecedor && data.hasFormulario
                                    ? 'Filtrar formulários'
                                    : // : data.isFornecedor && !data.hasFormulario
                                    // ? 'Enviar e-mail'
                                    !data.isFornecedor && data.hasFormulario
                                    ? 'Reativar fornecedor'
                                    : !data.isFornecedor && !data.hasFormulario
                                    ? 'Avançar'
                                    : null}
                            </Button>
                        )}
                </DialogActions>
            </Dialog>

            {/* Dialog pra confirmar a ação de tornar meu fornecedor */}
            <DialogForm
                title='Confirmar novo fornecedor'
                text={`Tem certeza que deseja tornar o CNPJ ${cnpj} um fornecedor ativo na ${loggedUnity.nomeFantasia} ? Se sim, o mesmo poderá preencher formulários de Fornecedor para a sua empresa.`}
                handleClose={() => {
                    setOpenConfirmMakeFornecedor(false)
                }}
                openModal={openConfirmMakeFornecedor}
                handleSubmit={makeFornecedor}
                inputEmail
                setEmail={setEmail}
                email={email}
                closeAfterSave={true}
                cnpj={cnpj}
                gruposAnexo={gruposAnexo}
                nomeFornecedor={nomeFornecedor}
                grupoAnexosFornecedor={true}
                btnCancel
                btnConfirm
                btnConfirmColor='primary'
            />
        </>
    )
}

export default DialogNewFornecedor
