import DialogContentText from '@mui/material/DialogContentText'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from 'src/context/AuthContext'
import { validationCNPJ } from '../../../../configs/validations'
import { api } from 'src/configs/api'
import FormNewFornecedor from './FormNewFornecedor'
import toast from 'react-hot-toast'
import { cnpjMask } from 'src/configs/masks'

const NewFornecedor = ({ cnpj, control, setValue, register, errors }) => {
    const [change, setChange] = useState(false)
    const { loggedUnity } = useContext(AuthContext)
    const [fields, setFields] = useState(null)
    const [validationCnpj, setValidationCnpj] = useState(null)

    const handleCnpj = cnpj => {
        console.log('🚀 ~ handleCnpj:', cnpj)
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
            const responseLastForm = await api.post(`/formularios/fornecedor/cnpj`, {
                unidadeID: loggedUnity.unidadeID,
                cnpj: cnpj
            })

            //? Seta informações do último preenchimento desse fornecedor
            const lastForm = {
                new: responseLastForm.data.new,
                fornecedorID: responseLastForm.data.fornecedorID,
                data: responseLastForm.data.dataAvaliacao,
                modelo: responseLastForm.data.modelo.nome,
                produtos: responseLastForm.data.produtos,
                gruposAnexo: responseLastForm.data.gruposAnexo
            }

            //? Chama função pra obter dados da API e preencher as informações do fornecedor
            const resultAPI = await getFornecedorAPIData(cnpj)

            //? Seta informações do fornecedor
            setFields({
                ...fields,
                cnpj: cnpjMask(resultAPI.data['CNPJ']),
                status: resultAPI.data['STATUS'],
                dataAbertura: resultAPI.data['DATA ABERTURA'],
                telefone: resultAPI.data['DDD'] + ' ' + resultAPI.data['TELEFONE'],
                razaoSocial: resultAPI.data['RAZAO SOCIAL'],
                nomeFantasia: resultAPI.data['NOME FANTASIA'],
                email: resultAPI.data['EMAIL'],
                cidade: resultAPI.data['MUNICIPIO'] + '/' + resultAPI.data['UF'],
                preenchimento: lastForm
            })

            //? Seta informações do formulário
            setValue('fields.cnpj', cnpj)
            setValue('fields.razaoSocial', resultAPI.data['RAZAO SOCIAL'])
            setValue('fields.nome', resultAPI.data['NOME FANTASIA'])
            setValue('fields.email', resultAPI.data['EMAIL'])
            setValue('fields.modelo', responseLastForm.data.modelo.id > 0 ? responseLastForm.data.modelo : null)
            setValue('fields.gruposAnexo', responseLastForm.data.gruposAnexo)
            setValue('fields.produtos', responseLastForm.data.produtos)
        } catch (err) {
            console.error(err)
        }
    }

    const getFornecedorAPIData = async cnpj => {
        const cnpjNumber = cnpj.replace(/\D/g, '')

        //* Requisição a API
        const result = await api.get(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpjNumber}`)

        // const result = {
        //     data: {
        //         'NOME FANTASIA': 'RDA DESENVOLVIMENTO WEB',
        //         'RAZAO SOCIAL': 'ROBERTO DELAVI DE ARAUJO 02116471010',
        //         CNPJ: '41153569000174',
        //         STATUS: 'ATIVA',
        //         'CNAE PRINCIPAL DESCRICAO': 'Outras atividades de telecomunicações não especificadas anteriormente',
        //         'CNAE PRINCIPAL CODIGO': '6190699',
        //         CEP: '89812600',
        //         'DATA ABERTURA': '09/03/2021',
        //         DDD: '49',
        //         TELEFONE: '33160672',
        //         EMAIL: 'roberto.delavy@gmail.com',
        //         'TIPO LOGRADOURO': 'RUA',
        //         LOGRADOURO: 'EUCLIDES PRADE',
        //         NUMERO: '465 E',
        //         COMPLEMENTO: 'COND BOULEVARD DAS ACACIAS;BLOCO A;APT 406',
        //         BAIRRO: 'SANTA MARIA',
        //         MUNICIPIO: 'Chapecó',
        //         UF: 'SC'
        //     }
        // }

        return result
    }

    useEffect(() => {
        console.log('🚀 ~ cnpj:', cnpj)
        setFields(null)
        setValue('fields', null)
        setChange(!change)
        if (cnpj && cnpj.length > 0) handleCnpj(cnpj)
    }, [])

    return (
        <>
            <DialogContentText>
                <Grid container spacing={4}>
                    {/* Esquerda */}
                    <Grid item xs={12} md={6}>
                        <Box display='flex' flexDirection='column' sx={{ gap: 4 }}>
                            <FormNewFornecedor
                                key={change}
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
                                        <strong>Dados do último formulário deste fornecedor</strong>
                                    </Typography>
                                    {fields?.preenchimento?.new ? (
                                        <Typography variant='body2' color='primary'>
                                            <strong>Novo fornecedor</strong>
                                        </Typography>
                                    ) : (
                                        <>
                                            <Typography variant='caption'>
                                                <strong>ID: </strong> {fields?.preenchimento?.fornecedorID}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Data de preenchimento:</strong> {fields?.preenchimento?.data}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Modelo:</strong> {fields?.preenchimento?.modelo}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Grupos de anexo: </strong>
                                                {fields?.preenchimento?.gruposAnexo.map(
                                                    (grupo, index) =>
                                                        `${grupo.nome}${
                                                            index < fields?.preenchimento?.gruposAnexo.length - 1
                                                                ? ', '
                                                                : ''
                                                        }`
                                                )}
                                            </Typography>
                                            <Typography variant='caption'>
                                                <strong>Produtos: </strong>
                                                {fields?.preenchimento?.produtos.map(
                                                    (produto, index) =>
                                                        `${produto.nome}${
                                                            index < fields?.preenchimento?.produtos.length - 1
                                                                ? ', '
                                                                : ''
                                                        }`
                                                )}
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
