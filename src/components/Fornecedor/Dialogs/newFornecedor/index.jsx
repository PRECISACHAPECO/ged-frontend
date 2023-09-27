import DialogContentText from '@mui/material/DialogContentText'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { AuthContext } from 'src/context/AuthContext'
import { validationCNPJ } from '../../../../configs/validations'
import { api } from 'src/configs/api'
import FormNewFornecedor from './FormNewFornecedor'
import toast from 'react-hot-toast'
import { cnpjMask } from 'src/configs/masks'

const NewFornecedor = ({ control, setValue, register, errors }) => {
    const { loggedUnity } = useContext(AuthContext)
    const [fields, setFields] = useState(null)
    const [validationCnpj, setValidationCnpj] = useState(null)

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

    return (
        <>
            <DialogContentText>
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
                                                <strong>Data de preenchimento:</strong> {fields?.preenchimento?.data}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Modelo:</strong> {fields?.preenchimento?.modelo}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Produtos:</strong> {fields?.preenchimento?.produtos}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Grupos de anexo:</strong> {fields?.preenchimento?.gruposAnexo}
                                            </Typography>
                                        </>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </DialogContentText>
        </>
    )
}

export default NewFornecedor
