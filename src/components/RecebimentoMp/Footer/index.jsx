import { Card, CardContent, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import Input from 'src/components/Form/Input'
import DateField from 'src/components/Form/DateField'
import Select from 'src/components/Form/Select'
import { dateConfig } from 'src/configs/defaultConfigs'
import { api } from 'src/configs/api'

const RecebimentoMpFooterFields = ({ modeloID, values, disabled, register, errors, setValue, control }) => {
    const [dateStatus, setDateStatus] = useState({})
    const [profissionaisAprova, setProfissionaisAprova] = useState([])

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
            formularioID: 2, // recebimento de mp
            modeloID: modeloID
        })
        console.log('🚀 ~ response.data:', response.data)
        setProfissionaisAprova(response.data.aprova)
    }

    useEffect(() => {
        getProfissionais()
    }, [])

    return (
        <Card>
            <CardContent>
                <Grid container spacing={4}>
                    {/* Data de abertura */}
                    <DateField
                        xs={12}
                        md={2}
                        title='Data da conclusão'
                        name={`fieldsFooter.dataConclusao`}
                        type='date'
                        value={values?.dataConclusao}
                        disabled={disabled}
                        register={register}
                        control={control}
                        setDateFormat={setDateFormat}
                        typeValidation='dataPassado'
                        daysValidation={365}
                        dateStatus={dateStatus}
                        errors={errors?.fieldsFooter?.dataConclusao}
                    />

                    {/* Hora de Abertura */}
                    <Input
                        xs={12}
                        md={2}
                        title='Hora da conclusão'
                        name={`fieldsFooter.horaConclusao`}
                        type='time'
                        disabled={disabled}
                        register={register}
                        control={control}
                        errors={errors?.fieldsFooter?.horaConclusao}
                    />

                    {/* Profissional responsável */}
                    <Select
                        xs={12}
                        md={8}
                        title='Profissional que aprova'
                        name={`fieldsFooter.profissional`}
                        type='string'
                        options={profissionaisAprova ?? []}
                        value={values?.profissional}
                        disabled={disabled}
                        register={register}
                        setValue={setValue}
                        control={control}
                        errors={errors?.fieldsFooter?.profissional}
                    />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default RecebimentoMpFooterFields
