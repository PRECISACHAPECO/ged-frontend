import React, { useState } from 'react'
import { Grid, Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { useEffect } from 'react'
import HelpText from '../Defaults/HelpText'

const ToggleButtonLabel = ({ xs, md, name, register, options, defaultValue, setValue }) => {
    const [selectedOption, setSelectedOption] = useState(options[defaultValue]?.value ?? options[0].value)

    const handleOptionChange = newValue => {
        setSelectedOption(newValue)
        if (name && register) {
            register(name).value = newValue
        }
    }

    useEffect(() => {
        setValue(name, selectedOption)
    }, [selectedOption])

    return (
        <Grid item xs={xs} md={md}>
            <Box display='flex' flexDirection='column' alignItems='start'>
                <div className='flex items-center gap-1 mb-1'>
                    <Typography variant='caption'>Será preenchido por</Typography>

                    <div>
                        <HelpText
                            text='Define quem irá preencher esse formulário de qualificação. Se marcado fornecedor, será enviado um email com as instruções e dados de acesso para o fornecedor preencher.'
                            position={'top'}
                        />
                    </div>
                </div>

                <ToggleButtonGroup
                    exclusive
                    color='primary'
                    value={selectedOption}
                    onChange={(_, newValue) => {
                        handleOptionChange(newValue)
                    }}
                >
                    {options.map(option => (
                        <ToggleButton key={option.value} value={option.value}>
                            <div className='flex items-center gap-2'>
                                <Icon icon={option.icon} />
                                <p className='capitalize'>{option.label}</p>
                            </div>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
                {name && register && <input type='hidden' name={name} {...register(name)} value={selectedOption} />}
            </Box>
        </Grid>
    )
}

export default ToggleButtonLabel
