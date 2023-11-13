import { FormControl, Grid } from '@mui/material'
import { useEffect, useState, useContext } from 'react'
import { dateConfig } from 'src/configs/defaultConfigs'
import { AuthContext } from 'src/context/AuthContext'
import { backRoute } from 'src/configs/defaultConfigs'
import Router from 'next/router'

//* Custom inputs
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import DateField from 'src/components/Form/DateField'

const Fields = ({
    register,
    errors,
    setValue,
    fields,
    values,
    disabled,
    disabledFields,
    getAddressByCep,
    control,
    setCopiedDataContext
}) => {
    const [dateStatus, setDateStatus] = useState({})
    const [watchRegistroEstabelecimento, setWatchRegistroEstabelecimento] = useState(null)
    const { loggedUnity, user } = useContext(AuthContext)
    const router = Router
    const staticUrl = backRoute(router.pathname)

    const dataLocalStorage = localStorage.getItem('loggedUnity')
    const formatDataLocalStorage = JSON.parse(dataLocalStorage)
    console.log('🚀 ~ dataLocalStorage:', formatDataLocalStorage)

    const setDateFormat = (type, name, value, numDays) => {
        const newDate = new Date(value)
        const status = dateConfig(type, newDate, numDays)
        console.log('status', status)
        setDateStatus(prevState => ({
            ...prevState,
            [name]: status
        }))
    }

    const setRegistroEstabelecimento = () => {
        fields &&
            fields.map((field, index) => {
                if (field?.nomeColuna == 'registroEstabelecimentoID') {
                    setWatchRegistroEstabelecimento(field?.[field.tabela]?.id > 0 ? field?.[field.tabela].id : null)
                }
            })
    }

    const getMaskForField = fieldName => {
        switch (fieldName) {
            case 'telefone':
            case 'telefone1':
            case 'telefone2':
                return 'telefone'
            case 'cep':
                return 'cep'
            case 'cnpj':
                return 'cnpj'
            default:
                return null
        }
    }

    const disabledField = field => {
        // verifica se o campo está na lista de campos desabilitados, retorna true ou false para desabilitar o campo
        if (disabledFields && disabledFields.length > 0) {
            return disabledFields.includes(field)
        }
        return false
    }

    useEffect(() => {
        setRegistroEstabelecimento()
    }, [])

    return (
        // <Grid container spacing={4}>
        fields &&
        fields.map((field, index) => (
            <>
                {/* Autocomplete (int) */}
                {field && field.tipo === 'int' && field.tabela && (
                    <Select
                        xs={12}
                        md={4}
                        title={field.nomeCampo}
                        name={`fields[${index}].${field.tabela}`}
                        type={field.tabela}
                        options={field.options}
                        value={field?.[field.tabela]}
                        mask={field.tabela}
                        disabled={disabled || disabledField(field.nomeColuna)}
                        register={register}
                        setValue={setValue}
                        control={control}
                        errors={errors?.fields?.[index]?.[field.tabela]}
                        handleRegistroEstabelecimento={setWatchRegistroEstabelecimento}
                    />
                )}

                {/* Date */}
                {field && field.tipo == 'date' && (
                    <DateField
                        xs={12}
                        md={4}
                        title='Data da avaliação'
                        disabled={disabled || disabledField(field.nomeColuna)}
                        value={field?.[field.nomeColuna] ?? new Date()}
                        type={field.nomeColuna}
                        name={`fields[${index}].${field.nomeColuna}`}
                        errors={errors?.fields?.[index]?.[field.nomeColuna]}
                        control={control}
                        setDateFormat={setDateFormat}
                        typeValidation='dataPassado'
                        daysValidation={365}
                        dateStatus={dateStatus}
                        register={register}
                    />
                )}

                {/* Textfield */}
                {field &&
                    field.tipo == 'string' &&
                    (field.nomeColuna != 'numeroRegistro' || watchRegistroEstabelecimento > 1) && (
                        <Input
                            xs={12}
                            md={4}
                            title={field.nomeCampo}
                            name={`fields[${index}].${field.nomeColuna}`}
                            value={field?.[field.nomeColuna]}
                            type={field.nomeColuna}
                            getAddressByCep={getAddressByCep}
                            mask={getMaskForField(field.nomeColuna)}
                            disabled={
                                disabled || disabledField(field.nomeColuna) || field.nomeColuna == 'cnpj' ? true : false
                            }
                            control={control}
                            // errors field[index] nomeColuna
                            errors={errors?.fields?.[index]?.[field.nomeColuna]}
                        />
                    )}
            </>
        ))
        // </Grid>
    )
}

export default Fields
