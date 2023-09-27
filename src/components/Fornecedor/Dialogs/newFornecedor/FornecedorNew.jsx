import { useContext, useEffect, useState } from 'react'
import { api } from 'src/configs/api'
import { AuthContext } from 'src/context/AuthContext'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import { cnpjMask } from 'src/configs/masks'

const FornecedorNew = ({ fields, setFields, control, errors, setValue, register }) => {
    const { loggedUnity } = useContext(AuthContext)
    const [models, setModels] = useState([])
    const [products, setProducts] = useState([])
    const [gruposAnexo, setGruposAnexo] = useState([])

    const getFornecedorAPIData = async () => {
        const cnpjNumber = fields.cnpj.replace(/\D/g, '')
        console.log('🚀 ~ cnpjNumber:', cnpjNumber)
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

        console.log('🚀 ~ result: ', result)
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
            produtos: []
        })

        setValue('fields.razaoSocial', result.data['RAZAO SOCIAL'])
        setValue('fields.nome', result.data['NOME FANTASIA'])
        setValue('fields.email', result.data['EMAIL'])
    }

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
        getFornecedorAPIData()
        getModels()
        getProducts()
        getGruposAnexo()
    }, [])

    return (
        models &&
        products && (
            <>
                <Input
                    xs={12}
                    md={12}
                    title='Razão Social'
                    name='fields.razaoSocial'
                    value={fields?.razaoSocial}
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
                    value={fields.gruposAnexo ?? []}
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
                    value={fields.produtos ?? []}
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

export default FornecedorNew
