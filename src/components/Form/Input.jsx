import { Controller } from 'react-hook-form'
import { FormControl, Grid, TextField } from '@mui/material'
import { cnpjMask, cellPhoneMask, cepMask, ufMask, cpfMask, rgMask } from 'src/configs/masks'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline' // Importe o ícone que deseja usar

import HelpText from 'src/components/Defaults/HelpText'

const Input = ({
    xs,
    md,
    title,
    name,
    rows,
    value,
    type,
    mask,
    getAddressByCep,
    multiline,
    disabled,
    required,
    control,
    errors,
    onChange,
    className,
    help,
    ...props
}) => {
    return (
        <Grid item xs={xs} md={md} sx={{ my: 1 }} className={className}>
            {/* {help && <HelpText text={help.text} position={help.position} />} */}
            <FormControl fullWidth>
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: required }}
                    render={({ field }) => (
                        <TextField
                            {...props}
                            multiline={multiline}
                            value={field?.value}
                            label={title}
                            placeholder={title}
                            rows={rows}
                            type={type ?? 'text'}
                            title='uhsauhsauuashuhsau'
                            size='small'
                            disabled={disabled}
                            aria-describedby='validation-schema-nome'
                            error={errors}
                            onChange={e => {
                                let value = e.target.value

                                mask === 'cnpj'
                                    ? (value = cnpjMask(value))
                                    : mask === 'cep'
                                    ? ((value = cepMask(value)), getAddressByCep(value))
                                    : mask === 'cep2'
                                    ? (value = cepMask(value))
                                    : mask === 'telefone'
                                    ? (value = cellPhoneMask(value))
                                    : mask === 'estado'
                                    ? (value = ufMask(value))
                                    : mask === 'cpf'
                                    ? (value = cpfMask(value))
                                    : mask === 'rg'
                                    ? (value = rgMask(value))
                                    : null

                                field.onChange(value)

                                if (onChange) {
                                    onChange(value)
                                }
                            }}
                            InputLabelProps={{
                                shrink: true
                                // Icone de ajuda
                            }}
                            inputProps={
                                mask === 'cnpj'
                                    ? {
                                          maxLength: 18,
                                          type: 'tel',
                                          inputMode: 'numeric'
                                      }
                                    : mask === 'cep' || mask === 'cep2'
                                    ? {
                                          maxLength: 9,
                                          type: 'tel',
                                          inputMode: 'numeric'
                                      }
                                    : mask === 'telefone'
                                    ? {
                                          maxLength: 15
                                      }
                                    : mask === 'cpf'
                                    ? {
                                          maxLength: 14
                                      }
                                    : mask === 'rg'
                                    ? {
                                          maxLength: 11
                                      }
                                    : mask === 'estado'
                                    ? { maxLength: 2 }
                                    : {}
                            }
                        />
                    )}
                />
            </FormControl>
        </Grid>
    )
}

export default Input
