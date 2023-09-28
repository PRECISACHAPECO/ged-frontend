import { useState, useEffect, useContext } from 'react'

import { useForm } from 'react-hook-form'
import {
    Autocomplete,
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    List,
    ListItem,
    ListItemButton,
    TextField,
    Typography
} from '@mui/material'
import Router from 'next/router'
import { backRoute } from 'src/configs/defaultConfigs'
import { api } from 'src/configs/api'
import FormHeader from 'src/components/Defaults/FormHeader'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'
import toast from 'react-hot-toast'
import { toastMessage } from 'src/configs/defaultConfigs'
import Loading from 'src/components/Loading'
import Icon from 'src/@core/components/icon'

//* Custom components
import Select from 'src/components/Form/Select'
import Input from 'src/components/Form/Input'
import Check from 'src/components/Form/Check'
import CheckLabel from 'src/components/Form/CheckLabel'
import Remove from 'src/components/Form/Remove'
import Blocos from './Blocos'

const FormParametrosRecebimentoMp = ({ id }) => {
    const { user, loggedUnity } = useContext(AuthContext)
    const [headers, setHeaders] = useState()
    const [products, setProducts] = useState()
    const [options, setOptions] = useState(null)
    const [blocks, setBlocks] = useState([])
    const [orientacoes, setOrientacoes] = useState(null)
    const [savingForm, setSavingForm] = useState(false)
    const [arrRemovedItems, setArrRemovedItems] = useState([])
    const [change, setChange] = useState(false)

    const router = Router
    const staticUrl = router.pathname
    const type = 'edit'

    const { setId } = useContext(RouteContext)

    const {
        setValue,
        register,
        reset,
        getValues,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm()

    // const initializeValues = values => {
    //     values.blocks.map((block, indexBlock) => {
    //         block.itens.map((item, indexItem) => {
    //             if (item) {
    //                 setValue(`blocks.[${indexBlock}].itens.[${indexItem}].item`, item.item)
    //                 setValue(`blocks.[${indexBlock}].itens.[${indexItem}].alternativa`, item.alternativa)
    //             }
    //         })
    //     })
    // }

    const onSubmit = async values => {
        const data = {
            unidadeID: loggedUnity.unidadeID,
            header: values.header,
            products: values.products,
            blocks: values.blocks,
            arrRemovedItems: arrRemovedItems,
            orientacoes: values.orientacoes
        }

        setHeaders(null) //? Pra exibir loading

        console.log('onSubmit: ', data)

        try {
            await api.put(`${staticUrl}/recebimentoMp/updateData`, data).then(response => {
                toast.success(toastMessage.successUpdate)
                setSavingForm(!savingForm)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addItem = index => {
        const newBlock = [...blocks]
        newBlock[index].itens.push({
            ordem: newBlock[index].itens.length + 1,
            obs: 1,
            status: 1,
            obrigatorio: 1
        })
        setBlocks(newBlock)

        setValue(`blocks.[${index}].itens.[${newBlock[index].itens.length - 1}].new`, true)

        refreshOptions(newBlock[index], index, blocks, options)
    }

    // Adiciona item no array do bloco
    const addBlock = () => {
        const newBlock = [...blocks]
        newBlock.push({
            dados: {
                ordem: newBlock.length + 1,
                nome: '',
                status: 1
            },
            itens: [
                // Obter primeiro item do primeiro bloco
                {
                    ordem: 1,
                    obs: 1,
                    status: 1,
                    obrigatorio: 1
                }
            ]
        })
        setBlocks(newBlock)
    }

    // Remove item do array do bloco
    const removeItem = (item, indexBlock, indexItem) => {
        console.log('🚀 ~ length:', blocks[indexBlock].itens.length)
        if (blocks[indexBlock].itens.length === 1) {
            toast.error('Você deve ter ao menos um item!')
            return
        }
        // Inserir no array de itens removidos
        let newRemovedItems = [...arrRemovedItems]
        newRemovedItems.push(item)
        setArrRemovedItems(newRemovedItems)

        const updatedBlocks = [...getValues('blocks')]
        updatedBlocks[indexBlock].itens.splice(indexItem, 1)

        setBlocks(updatedBlocks)
        setValue('blocks', updatedBlocks)

        refreshOptions(blocks[indexBlock], indexBlock, blocks, options)
        setChange(!change)
    }

    const getData = () => {
        try {
            api.post(`${staticUrl}/recebimentoMp/getData`, { unidadeID: loggedUnity.unidadeID }).then(response => {
                console.log('getData: ', response.data)

                //* Estados
                setHeaders(response.data.header)
                setProducts(response.data.products)
                setBlocks(response.data.blocks)
                setOrientacoes(response.data?.orientacoes?.obs)
                setOptions(response.data.options)

                //* Insere os dados no formulário
                reset(response.data)

                setTimeout(() => {
                    response.data.blocks.map((block, indexBlock) => {
                        refreshOptions(block, indexBlock, response.data.blocks, response.data.options)
                    })
                }, 3000)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const refreshOptions = (block, index, blocks, allOptions) => {
        let tempOptions = allOptions.itens

        //? Verifica se a opção está presente nos itens selecionados do bloco
        tempOptions = tempOptions.filter(option => {
            const isSelected = block.itens.some(i => i.item && option.id === i.item.id)
            return !isSelected // Retorna true para manter a opção, false para remover
        })

        // Atualiza block.optionsBlock do bloco
        let newBlock = [...blocks]
        newBlock[index].optionsBlock.itens = tempOptions
        setBlocks(newBlock)
    }

    useEffect(() => {
        getData()
    }, [id, savingForm])

    console.log('errors: ', errors)

    return (
        <>
            {!headers ? (
                <Loading />
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Cabeçalho */}
                    {headers && (
                        <Card>
                            <FormHeader btnCancel btnSave handleSubmit={() => handleSubmit(onSubmit)} type={type} />
                            <CardContent>
                                {/* Lista campos */}
                                <List component='nav' aria-label='main mailbox'>
                                    <Grid container spacing={2}>
                                        {/* Cabeçalho */}
                                        <Grid item md={4} xs={4}>
                                            <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                                                Nome do Campo
                                            </Typography>
                                        </Grid>
                                        <Grid item md={3} xs={4}>
                                            <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                                                Mostra no Formulário
                                            </Typography>
                                        </Grid>
                                        <Grid item md={3} xs={4}>
                                            <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                                                Obrigatório
                                            </Typography>
                                        </Grid>

                                        {headers.map((header, index) => (
                                            <>
                                                <input
                                                    type='hidden'
                                                    name={`header.[${index}].parRecebimentompID`}
                                                    defaultValue={header.parRecebimentompID}
                                                    {...register(`headers.[${index}].parRecebimentompID`)}
                                                />

                                                <Grid item md={4} xs={6}>
                                                    {header.nomeCampo}
                                                </Grid>
                                                <Grid item md={3} xs={3}>
                                                    <CheckLabel
                                                        title=''
                                                        name={`header.[${index}].mostra`}
                                                        value={header.mostra}
                                                        register={register}
                                                    />
                                                </Grid>
                                                <Grid item md={3} xs={3}>
                                                    <CheckLabel
                                                        title=''
                                                        name={`header.[${index}].obrigatorio`}
                                                        value={header.obrigatorio}
                                                        register={register}
                                                    />
                                                </Grid>
                                            </>
                                        ))}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    )}

                    {/* Produtos */}
                    {products && (
                        <Card sx={{ mt: 4 }}>
                            <CardContent>
                                {/* Lista campos */}
                                <List component='nav' aria-label='main mailbox'>
                                    <Grid container spacing={2}>
                                        {/* Cabeçalho */}
                                        <Grid item md={4} xs={4}>
                                            <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                                                Nome do Campo
                                            </Typography>
                                        </Grid>
                                        <Grid item md={3} xs={4}>
                                            <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                                                Mostra no Formulário
                                            </Typography>
                                        </Grid>
                                        <Grid item md={3} xs={4}>
                                            <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                                                Obrigatório
                                            </Typography>
                                        </Grid>

                                        {products.map((product, index) => (
                                            <>
                                                <input
                                                    type='hidden'
                                                    name={`products.[${index}].parRecebimentoMpProdutoID`}
                                                    defaultValue={product.parRecebimentompProdutoID}
                                                    {...register(`products.[${index}].parRecebimentoMpProdutoID`)}
                                                />

                                                <Grid item md={4} xs={6}>
                                                    {product.nomeCampo}
                                                </Grid>
                                                <Grid item md={3} xs={3}>
                                                    <CheckLabel
                                                        title=''
                                                        name={`products.[${index}].mostra`}
                                                        value={product.mostra}
                                                        register={register}
                                                    />
                                                </Grid>
                                                <Grid item md={3} xs={3}>
                                                    <CheckLabel
                                                        title=''
                                                        name={`products.[${index}].obrigatorio`}
                                                        value={product.obrigatorio}
                                                        register={register}
                                                    />
                                                </Grid>
                                            </>
                                        ))}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    )}

                    {/* Blocos */}
                    {blocks && (
                        <Blocos
                            blocks={blocks}
                            errors={errors}
                            control={control}
                            register={register}
                            removeItem={removeItem}
                            addItem={addItem}
                            getValues={getValues}
                            setValue={setValue}
                            options={options}
                            key={change}
                        />
                    )}
                    {/* Botão inserir bloco */}
                    <Grid item xs={12} md={12} sx={{ mt: 4 }}>
                        <Button
                            variant='outlined'
                            color='primary'
                            startIcon={<Icon icon='material-symbols:add-circle-outline-rounded' />}
                            onClick={() => {
                                addBlock()
                            }}
                        >
                            Inserir Bloco
                        </Button>
                    </Grid>

                    {/* Orientações */}
                    {headers && (
                        <Card md={12} sx={{ mt: 4 }}>
                            <CardContent>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={12}>
                                        <Input
                                            xs={12}
                                            md={12}
                                            title='Orientações'
                                            name={`orientacoes.obs`}
                                            required={false}
                                            value={orientacoes?.obs}
                                            multiline
                                            rows={4}
                                            control={control}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    )}
                </form>
            )}
        </>
    )
}

export default FormParametrosRecebimentoMp
