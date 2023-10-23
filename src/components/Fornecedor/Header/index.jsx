import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import Fields from 'src/components/Defaults/Formularios/Fields'
import Input from 'src/components/Form/Input'
import DateField from 'src/components/Form/DateField'
import Select from 'src/components/Form/Select'
import { dateConfig } from 'src/configs/defaultConfigs'
import { api } from 'src/configs/api'
import { backRoute } from 'src/configs/defaultConfigs'
import Router from 'next/router'

const HeaderFields = ({ modeloID, values, fields, disabled, register, errors, setValue, control, getAddressByCep }) => {
    const [dateStatus, setDateStatus] = useState({})
    const [profissionaisPreenche, setProfissionaisPreenche] = useState([])
    const [profissionaisAprova, setProfissionaisAprova] = useState([])
    const router = Router
    const staticUrl = backRoute(router.pathname)
    console.log('🚀 ~ staticUrl:', staticUrl)

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
            formularioID: 1, // fornecedor
            modeloID: modeloID
        })
        setProfissionaisPreenche(response.data.preenche)
        setProfissionaisAprova(response.data.aprova)
    }

    useEffect(() => {
        getProfissionais()
    }, [])

    return (
        <Grid container spacing={4}>
            {/* Data de abertura */}
            <DateField
                xs={12}
                md={4}
                title='Data da avaliação'
                name={`fieldsHeader.dataAvaliacao`}
                type='date'
                value={values?.dataAvaliacao}
                disabled={disabled}
                register={register}
                control={control}
                setDateFormat={setDateFormat}
                typeValidation='dataPassado'
                daysValidation={365}
                dateStatus={dateStatus}
                errors={errors?.fieldsHeader?.['dataAvaliacao']}
            />

            {/* Hora de Abertura */}
            <Input
                xs={12}
                md={4}
                title='Hora da avaliação'
                name={`fieldsHeader.horaAvaliacao`}
                type='time'
                disabled={disabled}
                register={register}
                control={control}
                errors={errors?.fieldsHeader?.['horaAvaliacao']}
            />

            {/* Profissional responsável */}
            <Select
                xs={12}
                md={4}
                title='Profissional responsável'
                name={`fieldsHeader.profissionalPreenche`}
                type='string'
                options={profissionaisPreenche}
                value={values?.profissionalPreenche}
                disabled={disabled}
                register={register}
                setValue={setValue}
                control={control}
                errors={errors?.fieldsHeader?.['profissionalPreenche']}
            />

            {/* CNPJ */}
            <Input
                xs={12}
                md={4}
                title='CNPJ'
                name={`fieldsHeader.cnpj`}
                type='string'
                mask='cnpj'
                disabled={disabled}
                register={register}
                control={control}
                errors={errors?.fieldsHeader?.['cnpj']}
            />

            {/* Razao Social */}
            <Input
                xs={12}
                md={4}
                title='Razão Social'
                name={`fieldsHeader.razaoSocial`}
                type='string'
                disabled={disabled}
                register={register}
                control={control}
                errors={errors?.fieldsHeader?.['razaoSocial']}
            />

            {/* Nome fantasia */}
            <Input
                xs={12}
                md={4}
                title='Nome Fantasia'
                name={`fieldsHeader.nomeFantasia`}
                type='string'
                disabled={disabled}
                register={register}
                control={control}
                errors={errors?.fieldsHeader?.['nomeFantasia']}
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
        </Grid>
    )
}

export default HeaderFields
