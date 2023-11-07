import React, { useState } from 'react'
import { Grid, Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useEffect } from 'react'

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
                <ToggleButtonGroup
                    exclusive
                    value={selectedOption}
                    onChange={(_, newValue) => {
                        handleOptionChange(newValue)
                    }}
                >
                    {options.map(option => (
                        <ToggleButton key={option.value} value={option.value}>
                            {option.label}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
                {name && register && <input type='hidden' name={name} {...register(name)} value={selectedOption} />}
            </Box>
        </Grid>
    )
}

export default ToggleButtonLabel
