import { Grid, FormControl, Autocomplete, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const Select = ({
    xs,
    md,
    title,
    options,
    name,
    type,
    limitTags,
    value,
    required,
    control,
    disabled,
    multiple,
    setValue,
    errors,
    className,
    handleRegistroEstabelecimento
}) => {
    return (
        <Grid item xs={xs} md={md} sx={{ my: 1 }} className={className}>
            <FormControl fullWidth>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={value}
                    rules={{ required }}
                    render={({ field }) => (
                        <Autocomplete
                            {...field}
                            multiple={multiple}
                            limitTags={limitTags}
                            size='small'
                            options={options}
                            getOptionLabel={option => (option.cnpj ? `${option.cnpj} - ${option.nome}` : option.nome)}
                            value={
                                multiple && field.value && field.value.length > 0
                                    ? field.value.map(item => options.find(option => option.nome === item.nome))
                                    : field.value ?? { nome: '' }
                            }
                            disabled={disabled}
                            onChange={(e, newValue) => {
                                setValue(name, newValue)
                                type == 'registroestabelecimento'
                                    ? handleRegistroEstabelecimento(newValue ? newValue.id : null)
                                    : null
                            }}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label={title}
                                    placeholder={title}
                                    error={errors ? true : false}
                                />
                            )}
                            noOptionsText='Sem opções'
                        />
                    )}
                />
            </FormControl>
        </Grid>
    )
}

export default Select
