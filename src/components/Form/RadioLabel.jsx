// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Box, Tooltip } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { useEffect, useState } from 'react'

const RadioLabel = ({
    xs,
    md,
    index,
    values,
    totalColumns,
    defaultValue,
    name,
    changeAllOptions,
    disabled,
    errors,
    handleChange,
    blockForm
}) => {
    return (
        <Grid item xs={xs} md={md}>
            {/* <Box display='flex' alignItems='center' sx={{ gap: 2 }}> */}
            {/* <Grid container sx={{ backgroundColor: 'green' }}> */}

            {/* Marcar todos */}
            <RadioGroup row>
                {index == 0 &&
                    [...Array(totalColumns)].map((item, indexCol) => (
                        <Grid item xs={12} md={2}>
                            <FormControlLabel
                                key={indexCol}
                                value={indexCol}
                                control={<Radio disabled={disabled} error={errors ? true : false} />}
                                onChange={() => changeAllOptions(indexCol)}
                                label='Marcar todos'
                                fullWidth
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontSize: '0.8rem',
                                        color: 'text.secondary'
                                    },
                                    '&:hover': {
                                        '& .MuiFormControlLabel-label': {
                                            color: 'primary.main'
                                        }
                                    }
                                }}
                            />
                        </Grid>
                    ))}
            </RadioGroup>

            <RadioGroup row name={name} defaultValue={defaultValue} onChange={handleChange}>
                {values &&
                    values.map((item, indexCol) => (
                        <Grid item xs={12} md={2}>
                            <FormControlLabel
                                key={indexCol}
                                value={item.id}
                                control={<Radio disabled={disabled} error={errors ? true : false} />}
                                label={item.nome}
                                fullWidth
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontSize: '0.8rem',
                                        color: 'text.secondary'
                                    },
                                    '&:hover': {
                                        '& .MuiFormControlLabel-label': {
                                            color: 'primary.main'
                                        }
                                    }
                                }}
                            />
                        </Grid>
                    ))}
            </RadioGroup>

            {/* ícone informando que resposta impede aprovação do formulário */}
            {blockForm && (
                <Tooltip
                    title='Esta resposta impede a aprovação deste formulário e obrigatoriamente será gerada uma Não Conformidade (plano de ação)'
                    placement='top'
                    arrow
                >
                    <p>
                        <Icon icon='typcn:warning' color='#FFC107' />
                    </p>
                </Tooltip>
            )}
            {/* </Grid> */}
            {/* </Box> */}
        </Grid>
    )
}

export default RadioLabel
