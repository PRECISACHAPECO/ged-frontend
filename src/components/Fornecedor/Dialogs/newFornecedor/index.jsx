import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import { RouteContext } from 'src/context/RouteContext'
import { Alert, Box, Card, CardContent, FormControl, Grid, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { validationEmail } from '../../../../configs/validations'
import Input from 'src/components/Form/Input'
import { AuthContext } from 'src/context/AuthContext'
import { useForm } from 'react-hook-form'
import { validationCNPJ } from '../../../../configs/validations'
import { api } from 'src/configs/api'
import { useRouter } from 'next/router'
import FormNewFornecedor from './FormNewFornecedor'
import toast from 'react-hot-toast'
import { cnpjMask } from 'src/configs/masks'
import CustomChip from 'src/@core/components/mui/chip'

const NewFornecedor = ({ title, handleClose, openModal }) => {
    const { setId } = useContext(RouteContext)
    const { user, loggedUnity } = useContext(AuthContext)
    const [fields, setFields] = useState(null)
    const [validationCnpj, setValidationCnpj] = useState(null)
    const [openModalConclusion, setOpenModalConclusion] = useState(false)
    const [responseConclusion, setResponseConclusion] = useState(null)
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
                setValidationCnpj(true)
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

            //? Seta informações do último preenchimento desse fornecedor
            const lastForm = {
                new: response.data.new,
                fornecedorID: response.data.fornecedorID,
                data: response.data.dataAvaliacao,
                modelo: response.data.modelo,
                produtos: response.data.produtos,
                gruposAnexo: response.data.gruposAnexo
            }
            console.log('🚀 ~ lastForm:', lastForm)

            //? Chama função pra obter dados da API e preencher as informações do fornecedor
            const result = await getFornecedorAPIData(cnpj)

            //? Seta informações do fornecedor
            setFields({
                ...fields,
                cnpj: cnpjMask(result.data['CNPJ']),
                status: result.data['STATUS'],
                dataAbertura: result.data['DATA ABERTURA'],
                telefone: result.data['DDD'] + ' ' + result.data['TELEFONE'],
                razaoSocial: result.data['RAZAO SOCIAL'],
                nomeFantasia: result.data['NOME FANTASIA'],
                email: result.data['EMAIL'],
                cidade: result.data['MUNICIPIO'] + '/' + result.data['UF'],
                preenchimento: lastForm
            })

            //? Seta informações do formulário
            setValue('fields.razaoSocial', result.data['RAZAO SOCIAL'])
            setValue('fields.nome', result.data['NOME FANTASIA'])
            setValue('fields.email', result.data['EMAIL'])
        } catch (err) {
            console.error(err)
        }
    }

    const getFornecedorAPIData = async cnpj => {
        const cnpjNumber = cnpj.replace(/\D/g, '')

        //* Requisição a API
        // const result = await api.get(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpjNumber}`)

        const result = {
            data: {
                'NOME FANTASIA': 'RDA DESENVOLVIMENTO WEB',
                'RAZAO SOCIAL': 'ROBERTO DELAVI DE ARAUJO 02116471010',
                CNPJ: '41153569000174',
                STATUS: 'ATIVA',
                'CNAE PRINCIPAL DESCRICAO': 'Outras atividades de telecomunicações não especificadas anteriormente',
                'CNAE PRINCIPAL CODIGO': '6190699',
                CEP: '89812600',
                'DATA ABERTURA': '09/03/2021',
                DDD: '49',
                TELEFONE: '33160672',
                EMAIL: 'roberto.delavy@gmail.com',
                'TIPO LOGRADOURO': 'RUA',
                LOGRADOURO: 'EUCLIDES PRADE',
                NUMERO: '465 E',
                COMPLEMENTO: 'COND BOULEVARD DAS ACACIAS;BLOCO A;APT 406',
                BAIRRO: 'SANTA MARIA',
                MUNICIPIO: 'Chapecó',
                UF: 'SC'
            }
        }

        return result
    }

    const onSubmit = async values => {
        console.log('🚀 ~ onSubmit ~ values:', values)

        try {
            // setOpenModal(false)
            handleClose()
            const response = await api.post(`/formularios/fornecedor/makeFornecedor`, {
                usuarioID: user.usuarioID,
                papelID: user.papelID,
                unidadeID: loggedUnity.unidadeID,
                values: values.fields
            })

            if (response.status == 200) {
                setResponseConclusion(response.data)
                setId(response.data.fornecedorID)
                setOpenModalConclusion(true)
                // toast.success('Fornecedor cadastrado com sucesso!')
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleCloseConclusion = () => {
        setOpenModalConclusion(false)
    }

    const copyLink = link => {
        navigator.clipboard.writeText(link)
        toast.success('Link copiado com sucesso!')
    }

    return (
        <>
            {/* Modal pra criar novo formulário de fornecedor */}
            <Dialog
                open={openModal}
                aria-labelledby='form-dialog-title'
                disableEscapeKeyDown
                maxWidth='lg'
                fullWidth
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleClose()
                    }
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle id='form-dialog-title'>
                        <div className='flex justify-between items-center'>
                            <span>{title}</span>
                            <IconButton size='medium' title='Clear' aria-label='Clear' onClick={handleClose}>
                                <Icon icon='mdi:close' fontSize={20} />
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{ mb: 6 }}></DialogContentText>
                        <Grid container spacing={4}>
                            {/* Esquerda */}
                            <Grid item xs={12} md={6}>
                                <Box display='flex' flexDirection='column' sx={{ gap: 4 }}>
                                    <FormNewFornecedor
                                        setFields={setFields}
                                        fields={fields ?? null}
                                        control={control}
                                        errors={errors}
                                        setValue={setValue}
                                        register={register}
                                        handleCnpj={handleCnpj}
                                        validCnpj={validationCnpj}
                                    />
                                </Box>
                            </Grid>

                            {/* Direita */}
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Box display='flex' flexDirection='column' sx={{ gap: 4 }}>
                                            <Typography variant='body2'>
                                                <strong>Dados consultados da Receita Federal</strong>
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Razão Social:</strong> {fields?.razaoSocial}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Nome Fantasia:</strong> {fields?.razaoSocial}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>CNPJ:</strong> {fields?.cnpj}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Status:</strong> {fields?.status}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Data Abertura:</strong> {fields?.dataAbertura}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Telefone:</strong> {fields?.telefone}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>E-mail:</strong> {fields?.email}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Cidade:</strong> {fields?.cidade}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Card sx={{ mt: 4 }}>
                                    <CardContent>
                                        <Box display='flex' flexDirection='column' sx={{ gap: 4 }}>
                                            <Typography variant='body2'>
                                                <strong>Dados do último formulário</strong>
                                            </Typography>
                                            {fields?.preenchimento?.new ? (
                                                <Typography variant='body2' color='primary'>
                                                    <strong>Novo fornecedor</strong>
                                                </Typography>
                                            ) : (
                                                <>
                                                    <Typography variant='caption'>
                                                        <strong>Data de preenchimento:</strong>{' '}
                                                        {fields?.preenchimento?.data}
                                                    </Typography>
                                                    <Typography variant='caption'>
                                                        <strong>Modelo:</strong> {fields?.preenchimento?.modelo}
                                                    </Typography>
                                                    <Typography variant='caption'>
                                                        <strong>Produtos:</strong> {fields?.preenchimento?.produtos}
                                                    </Typography>
                                                    <Typography variant='caption'>
                                                        <strong>Grupos de anexo:</strong>{' '}
                                                        {fields?.preenchimento?.gruposAnexo}
                                                    </Typography>
                                                </>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions className='dialog-actions-dense'>
                        <div className='flex justify-between items-center gap-2'>
                            <Button variant='outlined' onClick={handleClose}>
                                Fechar
                            </Button>
                            <Button variant='contained' color='primary' type='submit'>
                                Enviar para fornecedor
                            </Button>
                        </div>
                    </DialogActions>
                </form>
            </Dialog>

            {/* Modal pra exibir mensagem de conslusão */}
            <Dialog
                open={openModalConclusion}
                aria-labelledby='form-dialog-title'
                disableEscapeKeyDown
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleCloseConclusion()
                    }
                }}
            >
                <DialogTitle id='form-dialog-title'>
                    <div className='flex justify-between items-center'>
                        <span>Formulário enviado ao fornecedor</span>
                        <IconButton size='medium' title='Clear' aria-label='Clear' onClick={handleCloseConclusion}>
                            <Icon icon='mdi:close' fontSize={20} />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Box display='flex' flexDirection='column' sx={{ gap: 4 }}>
                        <Typography variant='body2'>
                            <strong>E-mail enviado para: </strong> {fields?.email}
                        </Typography>
                        <Typography variant='body2'>
                            <strong>Link do formulário: </strong> {responseConclusion?.link}
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions className='dialog-actions-dense'>
                    <div className='flex justify-between items-center gap-2'>
                        <Button
                            variant='contained'
                            color='primary'
                            startIcon={<Icon icon='uil:copy' fontSize={20} />}
                            onClick={() => copyLink(responseConclusion?.link)}
                        >
                            Copiar Link
                        </Button>
                        <Button variant='outlined' onClick={handleCloseConclusion}>
                            Fechar
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default NewFornecedor
