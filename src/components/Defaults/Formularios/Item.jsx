import { useContext, useEffect, useRef, useState } from 'react'
import { SettingsContext } from 'src/@core/context/settingsContext'
import { Autocomplete, Card, CardContent, FormControl, Grid, TextField, Typography } from '@mui/material'
import { dateConfig } from 'src/configs/defaultConfigs'

//* Custom inputs
import AnexoListMultiple from 'src/components/Anexos/ModeView/AnexoListMultiple'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import DateField from 'src/components/Form/DateField'
import { api } from 'src/configs/api'

const Item = ({
    blockIndex,
    index,
    setBlocos,
    handleFileSelect,
    setItemResposta,
    handleRemoveAnexoItem,
    values,
    register,
    control,
    errors,
    setValue,
    disabled
}) => {
    console.log('🚀 ~ item ~ values:', values)
    const { settings } = useContext(SettingsContext)
    const modeTheme = settings.mode
    const [selectedItem, setSelectedItem] = useState(null)
    const fileInputRef = useRef(null)

    const [dateStatus, setDateStatus] = useState({})
    const [responseConfig, setResponseConfig] = useState(null)

    const setDateFormat = (type, name, value, numDays) => {
        console.log('🚀 ~ type, name, value, numDays:', type, name, value, numDays)
        const newDate = new Date(value)
        const status = dateConfig(type, newDate, numDays)
        console.log('status', status)
        setDateStatus(prevState => ({
            ...prevState,
            [name]: status
        }))
    }

    //? Se for tipo Data, inicializa os campos já com as validações de data, bloqueando datas anteriores ou posteriores
    useEffect(() => {
        if (values.alternativa === 'Data') {
            setDateFormat('dataPassado', null, values.resposta, 365)
        }
    }, [])

    //? Anexos
    const handleFileClick = item => {
        console.log('🚀 >>>>> handleFileClick:', item)

        item['parFornecedorModeloBlocoID'] = values.parFornecedorModeloBlocoID ?? 0

        fileInputRef.current.click()
        setSelectedItem(item)
    }

    useEffect(() => {
        console.log('no useEffect no useRef..')

        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }, [handleFileSelect])

    return (
        <Grid
            index={index}
            container
            spacing={4}
            sx={{
                mb: 4,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {/* Hidden do itemID */}
            <input
                type='hidden'
                name={`blocos[${blockIndex}].itens[${index}].itemID`}
                defaultValue={values.itemID}
                {...register(`blocos[${blockIndex}].itens[${index}].itemID`)}
            />

            {/* Descrição do item */}
            <Grid item xs={12} md={6}>
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                    {values.ordem + ' - ' + values.nome}
                </Typography>
            </Grid>

            {/* Alternativas de respostas */}
            <Grid item xs={12} md={3}>
                {/* Tipo de alternativa  */}
                <input
                    type='hidden'
                    name={`blocos[${blockIndex}].itens[${index}].tipoAlternativa`}
                    defaultValue={values.alternativa}
                    {...register(`blocos[${blockIndex}].itens[${index}].tipoAlternativa`)}
                />

                <FormControl fullWidth>
                    {/* +1 opção pra selecionar (Select) */}
                    {values && values.alternativas && values.alternativas.length > 1 && (
                        <Select
                            title='Selecione uma resposta'
                            options={values.alternativas}
                            name={`blocos[${blockIndex}].itens[${index}].resposta`}
                            idName={'alternativaID'}
                            value={values.resposta}
                            disabled={disabled}
                            onChange={e =>
                                setItemResposta({
                                    itemID: values.itemID,
                                    alternativa: e
                                })
                            }
                            control={control}
                            register={register}
                            setValue={setValue}
                            errors={errors?.blocos?.[blockIndex]?.itens[index]?.resposta}
                        />
                    )}

                    {/* Data */}
                    {values.alternativas.length == 0 && values.alternativa == 'Data' && (
                        <DateField
                            xs={12}
                            md={12}
                            title='Data da avaliação'
                            disabled={disabled}
                            value={values.resposta}
                            type={null}
                            name={`blocos[${blockIndex}].itens[${index}].resposta`}
                            errors={errors?.blocos?.[blockIndex]?.itens[index]?.resposta}
                            control={control}
                            setDateFormat={setDateFormat}
                            typeValidation='dataPassado'
                            daysValidation={365}
                            dateStatus={dateStatus}
                            register={register}
                        />
                    )}

                    {/* Dissertativa */}
                    {values.alternativas.length == 0 && values.alternativa == 'Dissertativa' && (
                        <Input
                            title='Descreva a resposta'
                            name={`blocos[${blockIndex}].itens[${index}].resposta`}
                            value={values.resposta}
                            multiline
                            disabled={disabled}
                            control={control}
                            errors={errors?.blocos?.[blockIndex]?.itens[index]?.resposta}
                        />
                    )}
                </FormControl>
            </Grid>

            {/* Texto longo (linha inteira) */}
            {values.alternativas.length == 0 && values.alternativa == 'Dissertativa longa' && (
                <Grid item xs={12} md={12} sx={{ pt: 0 }}>
                    <FormControl fullWidth>
                        <Input
                            title='Descreva a resposta'
                            name={`blocos[${blockIndex}].itens[${index}].resposta`}
                            rows={6}
                            value={values.resposta}
                            multiline
                            disabled={disabled}
                            control={control}
                            errors={errors?.blocos?.[blockIndex]?.itens[index]?.resposta}
                        />
                    </FormControl>
                </Grid>
            )}

            {/* Obs */}
            {values && values.obs == 1 && (
                <Grid item xs={12} md={values.alternativa == 'Dissertativa longa' ? 12 : 3}>
                    <FormControl fullWidth>
                        <Input
                            title='Observação'
                            name={`blocos[${blockIndex}].itens[${index}].observacao`}
                            value={values?.observacao}
                            multiline
                            disabled={disabled}
                            control={control}
                        />
                    </FormControl>
                </Grid>
            )}

            {/* Configs da resposta (se houver) */}
            {values &&
                values.respostaConfig &&
                values.respostaConfig.anexo == 1 &&
                values.respostaConfig.anexosSolicitados.length > 0 &&
                values.respostaConfig.anexosSolicitados.map((anexo, indexAnexo) => (
                    <Grid item xs={12} md={12}>
                        <AnexoListMultiple
                            modeTheme={modeTheme}
                            key={anexo}
                            handleFileClick={() =>
                                handleFileClick({
                                    ...anexo,
                                    itemOpcaoAnexoID: anexo.itemOpcaoAnexoID
                                })
                            }
                            selectedItem={selectedItem}
                            inputRef={fileInputRef}
                            item={anexo}
                            loadingFile={null}
                            // grupo={anexo}
                            indexGrupo={blockIndex}
                            indexItem={indexAnexo}
                            handleFileSelect={handleFileSelect}
                            folder='item'
                            handleRemove={handleRemoveAnexoItem}
                            error={false}
                            disabled={false}
                        />
                    </Grid>
                ))}
        </Grid>
    )
}

export default Item
