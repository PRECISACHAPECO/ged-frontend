import { useContext, useEffect, useState } from 'react'
import { api } from 'src/configs/api'
import { AuthContext } from 'src/context/AuthContext'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import { Box, Typography } from '@mui/material'

const FormNewFornecedor = ({ fields, handleCnpj, validCnpj, control, errors, setValue, register }) => {
    const { loggedUnity } = useContext(AuthContext)
    const [models, setModels] = useState([])
    const [products, setProducts] = useState([])
    const [gruposAnexo, setGruposAnexo] = useState([])

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

    useEffect(() => {
        getModels()
        getProducts()
        getGruposAnexo()
    }, [])

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
                    required
                    options={products ?? []}
                    register={register}
                    setValue={setValue}
                    control={control}
                    errors={errors?.fields?.produtos}
                />
            </>
        )
    )
}

export default FormNewFornecedor
