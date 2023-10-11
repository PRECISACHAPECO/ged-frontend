import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Card, CardContent, Grid, List, Typography, Box } from '@mui/material'
import { RouteContext } from 'src/context/RouteContext'
import Router from 'next/router'
import { api } from 'src/configs/api'
import FormHeader from 'src/components/Defaults/FormHeader'
import { AuthContext } from 'src/context/AuthContext'
import toast from 'react-hot-toast'
import { backRoute, toastMessage } from 'src/configs/defaultConfigs'
import Loading from 'src/components/Loading'
import Icon from 'src/@core/components/icon'

//* Custom components
import Input from 'src/components/Form/Input'
import Check from 'src/components/Form/Check'
import CheckLabel from 'src/components/Form/CheckLabel'
import Blocos from './Blocos'
import DialogNewCreate from 'src/components/Defaults/Dialogs/DialogNewCreate'
import FormItem from 'src/components/Cadastros/Item/FormItem'
import HelpText from 'src/components/Defaults/HelpText'
import { IndeterminateCheckBoxOutlined } from '@mui/icons-material'

const FormParametrosFornecedor = ({ id }) => {
    const { setId } = useContext(RouteContext)

    const { loggedUnity } = useContext(AuthContext)
    const [model, setModel] = useState()
    const [headers, setHeaders] = useState()
    const [allOptions, setAllOptions] = useState(null)
    const [blocks, setBlocks] = useState()
    const [orientacoes, setOrientacoes] = useState()
    const [openModalConfirmScore, setOpenModalConfirmScore] = useState(false)
    const [itemScore, setItemScore] = useState()
    const [savingForm, setSavingForm] = useState(false)
    const [arrRemovedItems, setArrRemovedItems] = useState([])
    const [arrRemovedBlocks, setArrRemovedBlocks] = useState([])
    const [change, setChange] = useState(false)
    const [openModalNew, setOpenModalNew] = useState(false) //? Abre modal para criar novo item
    const [openModalSelectedItem, setOpenModalSelectedItem] = useState(false) //? Abre modal para exibir item selecionado
    const [idInfoItem, setIdInfoItem] = useState(null)
    const [newChange, setNewChange] = useState(false)
    const [indexNewItem, setIndexNewItem] = useState(null)

    const createNew = index => {
        setOpenModalNew(true)
        setIndexNewItem(index)
    }

    const viewItem = item => {
        if (item && item.id > 0) {
            console.log('🚀 ~ item:', item)
            setIdInfoItem(item.id)
            setOpenModalSelectedItem(true)
        }
    }

    const handleConfirmNew = id => {
        setOpenModalNew(false)
        getData()
        setTimeout(() => {
            addItem(indexNewItem)
            console.log('🚀 ~ indexNewItem depois do settimerout:', indexNewItem)
        }, 1000)
    }

    const router = Router
    const type = id && id > 0 ? 'edit' : 'new'
    const staticUrl = router.pathname

    const {
        setValue,
        register,
        handleSubmit,
        reset,
        getValues,
        control,
        watch,
        formState: { errors }
    } = useForm()

    const onSubmit = async values => {
        const data = {
            id: id ?? null,
            unidadeID: loggedUnity.unidadeID,
            model: values.model,
            header: values.header ?? null,
            blocks: values.blocks ?? [],
            arrRemovedBlocks: arrRemovedBlocks ?? [],
            arrRemovedItems: arrRemovedItems ?? [],
            orientacoes: values.orientations ?? null
        }
        console.log('🚀 ~ onSubmit:', data)

        setHeaders(null) //? Pra exibir loading

        try {
            if (type === 'new') {
                //? New
                await api.put(`/configuracoes/formularios/fornecedor/insertData`, data).then(response => {
                    toast.success(toastMessage.successUpdate)
                    router.push(`/configuracoes/formularios/fornecedor/`)
                    setTimeout(() => {
                        setId(response.data.id)
                    }, 1000)
                })
            } else {
                //? Edit
                await api.put(`/configuracoes/formularios/fornecedor/updateData`, data).then(response => {
                    toast.success(toastMessage.successUpdate)
                    setSavingForm(!savingForm)
                    if (openModalNew) {
                        setOutsideLink(true)
                    }
                })
            }
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

    const addItem = index => {
        const newBlock = [...blocks]

        newBlock[index].itens.push({
            ordem: newBlock[index].itens?.length + 1,
            obs: 1,
            status: 1,
            obrigatorio: 1
        })
        setBlocks(newBlock)

        setValue(`blocks.[${index}].itens.[${newBlock[index].itens.length - 1}].new`, true)

        refreshOptions(newBlock[index], index, blocks, allOptions)
    }

    const removeItem = (item, indexBlock, indexItem) => {
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

        setValue('blocks', updatedBlocks)

        setBlocks(updatedBlocks)

        refreshOptions(blocks[indexBlock], indexBlock, blocks, allOptions)
        setChange(!change)
    }

    const removeBlock = (block, index) => {
        // Verifica se o bloco possui itens com pendência
        let canDelete = true
        block &&
            block.itens.map(item => {
                if (item.hasPending == 1) {
                    canDelete = false
                }
            })

        if (!canDelete) {
            toast.error('Este bloco não pode ser removido pois possui itens respondidos em um formulário')
            return
        }

        // Inserir no array de blocos removidos
        let newRemovedBlocks = [...arrRemovedBlocks]
        newRemovedBlocks.push(block.dados.parFornecedorModeloBlocoID)
        setArrRemovedBlocks(newRemovedBlocks)

        // Remove bloco
        const updatedBlocks = [...blocks]
        updatedBlocks.splice(index, 1)
        setBlocks(updatedBlocks)

        setValue(`blocks`, updatedBlocks) //* Remove bloco do formulário

        toast.success('Bloco pré-removido. Salve para concluir!')
    }

    //  Ao clicar no icone de pontuação, abre o modal de confirmação de pontuação e envia para o back o item selecionado
    // const openScoreModal = item => {
    //     setItemScore(null)
    //     api.post(`/formularios/fornecedor/getItemScore`, { data: item }).then(response => {
    //         setItemScore(response.data)
    //     })
    //     if (setItemScore) {
    //         setOpenModalConfirmScore(true)
    //     }
    // }

    const addBlock = () => {
        const newBlock = [...getValues('blocks')]
        newBlock.push({
            dados: {
                ordem: newBlock.length + 1,
                nome: '',
                status: 1
            },
            categorias: [],
            atividades: [],
            optionsBlock: {
                itens: [...allOptions.itens]
            },
            itens: [
                {
                    parFormularioID: 1,
                    new: true,
                    ordem: '1',
                    nome: '',
                    status: 1,
                    item: null
                }
            ]
        })
        setValue('blocks', newBlock)
        setBlocks(newBlock)
    }

    const getData = () => {
        try {
            if (type === 'new') {
                setModel({
                    nome: '',
                    ciclo: '',
                    cabecalho: '',
                    status: 1
                })
            } else {
                api.post(`/configuracoes/formularios/fornecedor/getData/${id}`, {
                    unidadeID: loggedUnity.unidadeID
                }).then(response => {
                    console.log('🚀 ~ getData: ', response.data)
                    //* Estados
                    setModel(response.data.model)
                    setHeaders(response.data.header)
                    setBlocks(response.data.blocks)
                    setAllOptions({
                        itens: response.data.options?.itens
                    })
                    setOrientacoes(response.data.orientations)
                    //* Insere os dados no formulário
                    reset(response.data)

                    setTimeout(() => {
                        response.data.blocks &&
                            response.data.blocks.map((block, indexBlock) => {
                                refreshOptions(block, indexBlock, response.data.blocks, response.data.options)
                            })
                    }, 3000)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [id, savingForm])

    const handleSave = async data => {
        setNewChange(true)
        // getData()
        setOpenModalNew(false)
    }

    return (
        <>
            <Loading show={!model} />
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Modelo */}
                {model && (
                    <Card>
                        <FormHeader
                            partialRoute
                            btnCancel
                            btnSave
                            handleSubmit={() => handleSubmit(onSubmit)}
                            type={type}
                        />
                        <CardContent>
                            <Grid container spacing={4}>
                                <Input
                                    className='order-1'
                                    xs={12}
                                    md={8}
                                    title='Modelo'
                                    name={`model.nome`}
                                    value={model.nome}
                                    required={true}
                                    control={control}
                                    errors={errors?.model?.nome}
                                />
                                <Input
                                    className='order-1'
                                    xs={12}
                                    md={3}
                                    type='number'
                                    title={`Ciclo (dias)`}
                                    name={`model.ciclo`}
                                    value={model.ciclo}
                                    required={true}
                                    control={control}
                                    helpText='Ciclo de vencimento deste formulário.'
                                    errors={errors?.model?.ciclo}
                                />
                                <Check
                                    className='order-2 md:order-3'
                                    xs={2}
                                    md={1}
                                    title='Ativo'
                                    name={`model.status`}
                                    value={model.status}
                                    register={register}
                                />

                                <Input
                                    xs={12}
                                    md={12}
                                    className='order-4'
                                    title='Cabeçalho'
                                    name={`model.cabecalho`}
                                    required={false}
                                    value={model.cabecalho}
                                    multiline
                                    rows={4}
                                    control={control}
                                    helpText='Texto que será exibido no cabeçalho do formulário. Adicione aqui instruções e orientações para auxiliar o preenchimento pelo fornecedor.'
                                />
                            </Grid>
                        </CardContent>
                    </Card>
                )}

                {/* Cabeçalho */}
                {headers && (
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

                                    {headers.map((header, index) => (
                                        <>
                                            <Grid item md={4} xs={6}>
                                                <Box display='flex' alignItems='center' sx={{ gap: 2 }}>
                                                    <p>{header.nomeCampo}</p>
                                                    {/* <HelpText text='opaaa' /> */}
                                                </Box>
                                            </Grid>
                                            <Grid item md={3} xs={3}>
                                                <CheckLabel
                                                    title=''
                                                    name={`header.[${index}].mostra`}
                                                    register={register}
                                                    value={header.nomeColuna}
                                                    //     value={
                                                    //         header.nomeColuna == 'cnpj' ||
                                                    //         header.nomeColuna == 'razaoSocial' ||
                                                    //         header.nomeColuna == 'dataAvaliacao'
                                                    //             ? true
                                                    //             : header.mostra
                                                    //     }
                                                    //     readonly={
                                                    //         header.nomeColuna == 'cnpj' ||
                                                    //         header.nomeColuna == 'razaoSocial' ||
                                                    //         header.nomeColuna == 'dataAvaliacao'
                                                    //             ? true
                                                    //             : false
                                                    //     }
                                                />
                                            </Grid>
                                            <Grid item md={3} xs={3}>
                                                <CheckLabel
                                                    title=''
                                                    name={`header.[${index}].obrigatorio`}
                                                    value={
                                                        header.nomeColuna == 'cnpj' ||
                                                        header.nomeColuna == 'razaoSocial' ||
                                                        header.nomeColuna == 'dataAvaliacao'
                                                            ? true
                                                            : header.obrigatorio
                                                    }
                                                    register={register}
                                                    disabled={
                                                        header.nomeColuna == 'cnpj' ||
                                                        header.nomeColuna == 'razaoSocial' ||
                                                        header.nomeColuna == 'dataAvaliacao'
                                                            ? true
                                                            : false
                                                    }
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
                {!blocks && <Loading />}
                {blocks && (
                    <Blocos
                        blocks={blocks}
                        errors={errors}
                        control={control}
                        register={register}
                        watch={watch}
                        removeItem={removeItem}
                        addItem={addItem}
                        getValues={getValues}
                        removeBlock={removeBlock}
                        setValue={setValue}
                        allOptions={allOptions}
                        openModalConfirmScore={openModalConfirmScore}
                        setOpenModalConfirmScore={setOpenModalConfirmScore}
                        itemScore={itemScore}
                        setItemScore
                        createNew={createNew}
                        viewItem={viewItem}
                        key={change}
                    />
                )}
                {/* Botão inserir bloco */}
                {type === 'edit' && model && (
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
                )}

                {/* Orientações */}
                {orientacoes && (
                    <Card md={12} sx={{ mt: 4 }}>
                        <CardContent>
                            <Grid container spacing={4}>
                                <Input
                                    xs={12}
                                    md={12}
                                    title='Orientações'
                                    name={`orientations.obs`}
                                    required={false}
                                    value={orientacoes?.obs}
                                    multiline
                                    rows={4}
                                    control={control}
                                />
                            </Grid>
                        </CardContent>
                    </Card>
                )}
            </form>

            {/* Modal para criação de novo item */}
            <DialogNewCreate
                title='Novo item'
                size='md'
                openModal={openModalNew}
                setOpenModal={setOpenModalNew}
                handleSave={handleSave}
            >
                <FormItem
                    setNewChange={setNewChange}
                    btnClose
                    handleModalClose={() => setOpenModalNew(false)}
                    newChange={newChange}
                    outsideID={id}
                    handleConfirmNew={handleConfirmNew}
                />
            </DialogNewCreate>

            {/* Modal para ver item selecionado */}
            <DialogNewCreate
                title='Detalhes do Item'
                size='md'
                openModal={openModalSelectedItem}
                setOpenModal={setOpenModalSelectedItem}
            >
                <FormItem id={idInfoItem} btnClose handleModalClose={() => setOpenModalSelectedItem(false)} />
            </DialogNewCreate>
        </>
    )
}

export default FormParametrosFornecedor
