import { Box, Button, Grid, Typography, Divider } from '@mui/material'
import { api } from 'src/configs/api'
import Input from 'src/components/Form/Input'
import CheckLabel from 'src/components/Form/CheckLabel'
import DateField from 'src/components/Form/DateField'
import Select from 'src/components/Form/Select'
import Icon from 'src/@core/components/icon'
import { useEffect, useState } from 'react'

const RecebimentoMpProdutos = ({ fornecedorID, setValue, register, control, errors }) => {
    const [produtos, setProdutos] = useState([])
    console.log('🚀 ~ produtos:', produtos)

    const getProdutosFornecedor = async () => {
        try {
            if (fornecedorID && fornecedorID > 0) {
                const response = await api.post(`/cadastros/produto/getProdutosFornecedor`, {
                    fornecedorID: fornecedorID
                })
                setProdutos(response.data)
            }
        } catch (error) {
            console.log('🚀 ~ error:', error)
        }
    }

    useEffect(() => {
        getProdutosFornecedor()
    }, [fornecedorID])

    return (
        <>
            <Typography color='primary' variant='subtitle1' sx={{ fontWeight: 700, mb: 2 }}>
                Produtos aprovados do fornecedor
            </Typography>

            {!fornecedorID && (
                <Typography color='primary' variant='subtitle1' className='italic'>
                    Nenhum fornecedor selecionado!
                </Typography>
            )}

            {fornecedorID && !produtos.length && (
                <Typography color='primary' variant='subtitle1' className='italic'>
                    Nenhum produto aprovado para o fornecedor selecionado!
                </Typography>
            )}

            {/* Listagem dos produtos */}
            {produtos &&
                produtos.length > 0 &&
                produtos.map((produto, index) => (
                    <>
                        <Grid container spacing={4} sx={{ pb: 2 }}>
                            {/* Checkbox com produto */}
                            <Grid item xs={12} md={4}>
                                <CheckLabel title='Arroz' name={`aaa`} value={null} register={register} />
                            </Grid>

                            {/* Informações do produto */}
                            <Grid item xs={12} md={8}>
                                <Box display='flex' alignItems='center' justifyContent='end' sx={{ gap: 4, mt: 3 }}>
                                    <Typography variant='body2'>Última avaliação: 10/01/2023</Typography>
                                    <Typography variant='body2'>
                                        Próxima avaliação: 10/01/2024 (47 dias) triangeulo menos 30 dias
                                    </Typography>
                                    <Button variant='outlined' size='small'>
                                        <Box display='flex' alignItems='center' sx={{ gap: 1 }}>
                                            <Icon icon='fluent:form-new-20-regular' width={18} height={18} />
                                            Nova avaliação
                                        </Box>
                                    </Button>
                                    <Button variant='outlined' size='small'>
                                        <Box display='flex' alignItems='center' sx={{ gap: 1 }}>
                                            <Icon icon='raphael:lab' width={18} height={18} />
                                            Laboratório (dev)
                                        </Box>
                                    </Button>
                                </Box>
                            </Grid>

                            {/* Quantidade */}
                            <Input
                                xs={12}
                                md={2}
                                title='Quantidade'
                                name='aayyyua'
                                required={true}
                                register={register}
                                control={control}
                                errors={errors?.fields?.razaoSocial}
                            />

                            {/* Data de fabricação */}
                            <DateField
                                xs={12}
                                md={2}
                                title='Data da fabricação'
                                name={`assa`}
                                type='date'
                                value={null}
                                // disabled={disabled}
                                register={register}
                                control={control}
                                // setDateFormat={setDateFormat}
                                // typeValidation='dataPassado'
                                // daysValidation={365}
                                // dateStatus={dateStatus}
                                errors={errors?.fieldsHeader?.['data']}
                            />

                            {/* Nº Lote */}
                            <Input
                                xs={12}
                                md={2}
                                title='Nº Lote'
                                name='aaasasa'
                                required={true}
                                register={register}
                                control={control}
                                errors={errors?.fields?.razaoSocial}
                            />

                            {/* Apresentação */}
                            <Select
                                xs={12}
                                md={2}
                                title='Apresentação'
                                name={`uasuauh`}
                                type='string'
                                options={[]}
                                value={null}
                                // disabled={disabled}
                                register={register}
                                setValue={setValue}
                                control={control}
                                errors={errors?.fieldsHeader?.['profissional']}
                            />

                            {/* NF */}
                            <Input
                                xs={12}
                                md={2}
                                title='NF'
                                name='aaasasdda'
                                required={true}
                                register={register}
                                control={control}
                                errors={errors?.fields?.razaoSocial}
                            />

                            {/* Data de validade */}
                            <DateField
                                xs={12}
                                md={2}
                                title='Data da validade'
                                name={`assahhhh`}
                                type='date'
                                value={null}
                                // disabled={disabled}
                                register={register}
                                control={control}
                                // setDateFormat={setDateFormat}
                                // typeValidation='dataPassado'
                                // daysValidation={365}
                                // dateStatus={dateStatus}
                                errors={errors?.fieldsHeader?.['data']}
                            />
                        </Grid>

                        {index < produtos.length - 1 && <Divider />}
                    </>
                ))}
        </>
    )
}

export default RecebimentoMpProdutos
