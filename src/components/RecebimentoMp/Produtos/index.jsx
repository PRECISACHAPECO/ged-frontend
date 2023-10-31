import { Box, Button, Grid, Typography, Divider } from '@mui/material'
import { api } from 'src/configs/api'
import Input from 'src/components/Form/Input'
import CheckLabel from 'src/components/Form/CheckLabel'
import DateField from 'src/components/Form/DateField'
import Select from 'src/components/Form/Select'
import Icon from 'src/@core/components/icon'
import { useEffect, useState } from 'react'
import FieldsProdutos from './FieldsProdutos'

const RecebimentoMpProdutos = ({ recebimentoMpID, fornecedorID, getValues, setValue, register, control, errors }) => {
    const [produtos, setProdutos] = useState([])
    console.log('🚀 ~ produtos:', produtos)
    const [apresentacoes, setApresentacoes] = useState([])
    const [change, handleChange] = useState(false)

    const getProdutosFornecedor = async () => {
        try {
            if (fornecedorID && fornecedorID > 0) {
                const response = await api.post(`/cadastros/produto/getProdutosFornecedor`, {
                    recebimentoMpID: recebimentoMpID,
                    fornecedorID: fornecedorID
                })
                console.log('🚀 ~ renderiza response.data:', response.data[0])
                setProdutos(response.data)
                setValue('produtos', response.data)
            } else {
                setProdutos([])
            }
        } catch (error) {
            console.log('🚀 ~ error:', error)
        }
    }

    const getApresentacoes = async () => {
        try {
            const response = await api.get(`/cadastros/apresentacao`)
            setApresentacoes(response.data)
        } catch (error) {
            console.log('🚀 ~ error:', error)
        }
    }

    const handleCheck = index => {
        handleChange(!change)
        setValue(`produtos[${index}].checked`, !getValues(`produtos[${index}].checked`))
        const copyProducts = [...produtos]
        copyProducts[index].checked = !copyProducts[index].checked
        setProdutos(copyProducts)
    }

    useEffect(() => {
        getProdutosFornecedor()
        getApresentacoes()
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
                        <input
                            type='hidden'
                            value={produto.produtoID}
                            name={`produtos[${index}].produtoID`}
                            {...register(`produtos[${index}].produtoID`)}
                        />

                        <Grid container spacing={4} sx={{ pb: 2 }}>
                            {/* Checkbox com produto */}
                            <Grid item xs={12} md={4}>
                                <CheckLabel
                                    title={produto.nome}
                                    name={`produtos[${index}].checked`}
                                    value={produtos[index].checked}
                                    onClick={() => handleCheck(index)}
                                    register={register}
                                />
                            </Grid>

                            {/* Informações do produto */}
                            <Grid item xs={12} md={8}>
                                <Box display='flex' alignItems='center' justifyContent='end' sx={{ gap: 4, mt: 3 }}>
                                    <Typography variant='body2'>Última avaliação: {produto.ultimaAvaliacao}</Typography>
                                    <Typography variant='body2'>
                                        Próxima avaliação: {produto.proximaAvialacao} (
                                        {produto.diasRestantes == 1
                                            ? `${produto.diasRestantes} dia`
                                            : `${produto.diasRestantes} dias`}
                                        )
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

                            {produtos && produtos[index].checked && (
                                <FieldsProdutos
                                    key={index}
                                    value={produto}
                                    apresentacoes={apresentacoes}
                                    index={index}
                                    setValue={setValue}
                                    register={register}
                                    control={control}
                                    errors={errors}
                                />
                            )}
                        </Grid>

                        {index < produtos.length - 1 && <Divider />}
                    </>
                ))}
        </>
    )
}

export default RecebimentoMpProdutos
