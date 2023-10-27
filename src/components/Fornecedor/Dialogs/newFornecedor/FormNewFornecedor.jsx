import { useContext, useEffect, useState } from 'react'
import { api } from 'src/configs/api'
import { AuthContext } from 'src/context/AuthContext'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import { Box, Typography } from '@mui/material'
import DialogNewCreate from 'src/components/Defaults/Dialogs/DialogNewCreate'
import FormGrupoAnexos from 'src/components/Cadastros/grupoAnexos/FormGrupoAnexos'
import FormProduto from 'src/components/Cadastros/Produto/FormProduto'

const FormNewFornecedor = ({
    fields,
    setFields,
    handleCnpj,
    validCnpj,
    getValues,
    control,
    errors,
    setValue,
    register,
    reset,
    setGruposAnexosAux,
    grupoAnexosAux
}) => {
    console.log('🚀 ~ grupoAnexosAux:', grupoAnexosAux)
    const { loggedUnity } = useContext(AuthContext)
    const [models, setModels] = useState([])
    const [products, setProducts] = useState([])
    const [gruposAnexo, setGruposAnexo] = useState([])
    const [newChange, setNewChange] = useState(false)
    const [openModalNew, setOpenModalNew] = useState(false)
    const [titleModal, setTitleModal] = useState('')
    const [componetSelect, setComponetSelect] = useState(null)

    const getModels = async () => {
        const result = await api.post(`/formularios/fornecedor/getModels`, { unidadeID: loggedUnity.unidadeID })
        setModels(result.data)
    }

    const getProducts = async () => {
        const result = await api.post(`/formularios/fornecedor/getProducts`, { unidadeID: loggedUnity.unidadeID })
        setProducts(result.data)
    }

    const getGruposAnexo = async () => {
        const result = await api.post(`/formularios/fornecedor/getGruposAnexo`, { unidadeID: loggedUnity.unidadeID })
        setGruposAnexo(result.data)
    }

    const clearCnpj = () => {
        setFields(null)
        setValue('fields.cnpj', '')
        setValue('fields.razaoSocial', '')
        setValue('fields.email', '')
        setValue('fields.modelo', null)
        setValue('fields.gruposAnexo', [])
        setValue('fields.produtos', [])
    }

    useEffect(() => {
        reset()
        getModels()
        getProducts()
        getGruposAnexo()
    }, [])

    const handleConfirmNew = async data => {
        // Feche o modal
        setOpenModalNew(false)

        setGruposAnexo(prevGruposAnexo => [...prevGruposAnexo, data])
        // setGruposAnexo(prevGruposAnexo => [...prevGruposAnexo, data])

        // setValue('fields.gruposAnexo', grupoAnexosAux)

        setNewChange(!newChange)
    }

    const createNew = async name => {
        console.log('🚀 ~ name:', name)
        setOpenModalNew(true)
        const gruposTemp = getValues('fields.gruposAnexo')
        setGruposAnexosAux(gruposTemp)
        if (name == 'gruposAnexo') {
            setTitleModal('Novo grupo de anexos')
            setComponetSelect(<FormGrupoAnexos btnClose newChange={newChange} handleConfirmNew={handleConfirmNew} />)
        } else if (name == 'produtos') {
            setTitleModal('Novo produto')
            setComponetSelect(<FormProduto btnClose newChange={newChange} handleConfirmNew={handleConfirmNew} />)
        }
    }

    const handleSave = async data => {
        setOpenModalNew(false)
    }

    return (
        models &&
        products && (
            <>
                <Box>
                    <Input
                        xs={12}
                        md={12}
                        title='CNPJ'
                        name='fields.cnpj'
                        value={fields?.cnpj}
                        onChange={handleCnpj}
                        clearField={getValues('fields.cnpj') ? clearCnpj : null}
                        mask='cnpj'
                        required
                        control={control}
                        errors={errors?.fields?.cnpj}
                    />
                    {validCnpj == false && (
                        <Typography variant='body2' color='error'>
                            CNPJ inválido!
                        </Typography>
                    )}
                </Box>
                <Input
                    xs={12}
                    md={12}
                    title='Razão Social'
                    name='fields.razaoSocial'
                    value={fields?.razaoSocial}
                    disabled={!validCnpj}
                    required
                    control={control}
                    errors={errors?.fields?.razaoSocial}
                />
                <Input
                    xs={12}
                    md={12}
                    title='Nome Fantasia'
                    name='fields.nomeFantasia'
                    value={fields?.nomeFantasia}
                    disabled={!validCnpj}
                    required
                    control={control}
                    errors={errors?.fields?.nomeFantasia}
                />
                <Input
                    xs={12}
                    md={12}
                    type='email'
                    title='E-mail'
                    name='fields.email'
                    value={fields?.email}
                    disabled={!validCnpj}
                    required
                    control={control}
                    errors={errors?.fields?.email}
                />
                <Select
                    xs={12}
                    md={12}
                    title='Modelo de Formulário'
                    name={`fields.modelo`}
                    options={models}
                    required
                    value={fields?.modelo}
                    disabled={!validCnpj}
                    register={register}
                    setValue={setValue}
                    control={control}
                    errors={errors?.fields?.modelo}
                />
                <Select
                    xs={12}
                    md={12}
                    title='Grupos de Anexo'
                    multiple
                    createNew={() => {
                        createNew('gruposAnexo')
                    }}
                    name={`fields.gruposAnexo`}
                    value={fields?.gruposAnexo ?? []}
                    disabled={!validCnpj}
                    options={gruposAnexo ?? []}
                    register={register}
                    setValue={setValue}
                    control={control}
                    errors={errors?.fields?.gruposAnexo}
                />
                <Select
                    xs={12}
                    md={12}
                    title='Produtos'
                    name='fields.produtos'
                    value={fields?.produtos ?? []}
                    disabled={!validCnpj}
                    multiple
                    createNew={() => createNew('produtos')}
                    required
                    options={products ?? []}
                    register={register}
                    setValue={setValue}
                    control={control}
                    errors={errors?.fields?.produtos}
                />
                {/* Modal para criação de novo grupo de anexo ou  */}
                <DialogNewCreate
                    title={titleModal}
                    size='md'
                    openModal={openModalNew}
                    setOpenModal={setOpenModalNew}
                    handleSave={handleSave}
                >
                    {componetSelect}
                </DialogNewCreate>
            </>
        )
    )
}

export default FormNewFornecedor
