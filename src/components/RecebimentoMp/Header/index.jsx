import { Grid } from '@mui/material'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'
import Fields from 'src/components/Defaults/Formularios/Fields'
import Input from 'src/components/Form/Input'
import DateField from 'src/components/Form/DateField'
import Select from 'src/components/Form/Select'
import { dateConfig } from 'src/configs/defaultConfigs'
import { api } from 'src/configs/api'
import { SettingsContext } from 'src/@core/context/settingsContext'
import Router from 'next/router'
import { RouteContext } from 'src/context/RouteContext'
import Icon from 'src/@core/components/icon'

const HeaderFields = ({
    modeloID,
    values,
    fields,
    fornecedor,
    setFornecedor,
    disabled,
    register,
    errors,
    setValue,
    control,
    getAddressByCep
}) => {
    const { user, loggedUnity } = useContext(AuthContext)
    const [dateStatus, setDateStatus] = useState({})
    const [profissionaisPreenchimento, setProfissionaisPreenchimento] = useState([])
    const [fornecedoresAprovados, setFornecedoresAprovados] = useState([])
    const { settings } = useContext(SettingsContext)
    const mode = settings.mode
    const router = Router
    const { setId } = useContext(RouteContext)

    const setDateFormat = (type, name, value, numDays) => {
        const newDate = new Date(value)
        const status = dateConfig(type, newDate, numDays)
        setDateStatus(prevState => ({
            ...prevState,
            [name]: status
        }))
    }

    const getProfissionais = async () => {
        const response = await api.post(`/cadastros/profissional/getProfissionaisAssinatura`, {
            formularioID: 2, // recebimento de MP
            modeloID: modeloID
        })
        setProfissionaisPreenchimento(response.data.preenche)
        setDefaultProfissional(response.data.preenche)
    }

    const getFornecedoresAprovados = async () => {
        const response = await api.post(`/formularios/fornecedor/getFornecedoresAprovados`, {
            unidadeID: loggedUnity.unidadeID
        })
        setFornecedoresAprovados(response.data)
    }

    const setDefaultProfissional = arrProfissionais => {
        const profissionalID = user.profissionalID //? Profissional logado
        const profissional = arrProfissionais.find(profissional => profissional.id === profissionalID)
        if (profissional && profissional.id > 0) setValue('fieldsHeader.profissional', profissional)
    }

    // Função que envia para o formulario do fornecedor selecionado
    const handleGoToSupplier = () => {
        setId(fornecedor.id)
        router.push('/formularios/fornecedor/')
    }

    useEffect(() => {
        getProfissionais()
        getFornecedoresAprovados()
    }, [])

    return (
        <Grid container spacing={4}>
            {/* Inputs fixos */}
            {/* Data de abertura */}
            <DateField
                xs={12}
                md={2}
                title='Data da abertura'
                name={`fieldsHeader.abertoPor.dataInicio`}
                type='date'
                value={values?.abertoPor?.dataInicio}
                disabled
                control={control}
            />
            {/* Hora de Abertura */}
            <Input
                xs={12}
                md={2}
                title='Hora da abertura'
                name={`fieldsHeader.abertoPor.horaInicio`}
                type='time'
                disabled
                register={register}
                control={control}
            />
            {/* Profissional que abriu */}
            <Input
                xs={12}
                md={8}
                title='Profissional que abriu'
                name={`fieldsHeader.abertoPor.profissional.nome`}
                value={values?.abertoPor?.profissional?.nome}
                disabled
                register={register}
                control={control}
            />
            {/* Inputs com preenchimento */}
            {/* Data de avaliação */}
            <DateField
                xs={12}
                md={2}
                title='Data da avaliação'
                name={`fieldsHeader.data`}
                type='date'
                value={values?.data ?? new Date()}
                disabled={disabled}
                register={register}
                control={control}
                setDateFormat={setDateFormat}
                typeValidation='dataPassado'
                daysValidation={365}
                dateStatus={dateStatus}
                errors={errors?.fieldsHeader?.['data']}
            />
            {/* Hora de avaliação */}
            <Input
                xs={12}
                md={2}
                title='Hora da avaliação'
                name={`fieldsHeader.hora`}
                type='time'
                // value={values?.hora ?? '10:20'}
                disabled={disabled}
                register={register}
                control={control}
                errors={errors?.fieldsHeader?.['hora']}
            />
            {/* Profissional que preenche */}
            <Select
                xs={12}
                md={4}
                title='Profissional preenchimento'
                name={`fieldsHeader.profissional`}
                type='string'
                options={profissionaisPreenchimento}
                // value={profissionaisPreenchimento[1]}
                disabled={disabled}
                register={register}
                setValue={setValue}
                control={control}
                errors={errors?.fieldsHeader?.['profissional']}
            />
            {/* Fiels dinâmicos */}
            <Fields
                register={register}
                errors={errors}
                setValue={setValue}
                control={control}
                fields={fields}
                values={fields}
                getAddressByCep={getAddressByCep}
                disabled={disabled}
            />
            {/* Fornecedor */}
            <Select
                xs={12}
                md={4}
                title='Fornecedor'
                name={`fieldsHeader.fornecedor`}
                type='string'
                options={fornecedoresAprovados}
                onChange={e => setFornecedor(e)}
                value={values?.fornecedor}
                disabled={disabled}
                register={register}
                setValue={setValue}
                control={control}
                errors={errors?.fieldsHeader?.['fornecedor']}
            />
            {/* Informações do fornecedor */}
            <Grid item xs={12} md={4}>
                {fornecedor && fornecedor.id > 0 && (
                    <div
                        onClick={handleGoToSupplier}
                        className={`${
                            mode == 'dark' ? 'bg-[#18181a]' : 'bg-[#EEEEF1]'
                        } flex flex-col gap-2 p-4 rounded-xl cursor-pointer relative`}
                    >
                        <Icon icon='uil:external-link-alt' className='absolute top-4 right-4 text-xl' />
                        <p className='text-xs'>Dados do Fornecedor</p>
                        <p>Nome: {fornecedor.nome}</p>
                        <p>Telefone: {fornecedor.telefone}</p>
                        <p>Cidade: {fornecedor.cidade}</p>
                    </div>
                )}
            </Grid>
        </Grid>
    )
}

export default HeaderFields
