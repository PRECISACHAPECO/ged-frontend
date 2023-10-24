// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Box, Tooltip } from '@mui/material'
import Icon from 'src/@core/components/icon'

const RadioLabel = ({ xs, md, values, defaultValue, name, disabled, errors, handleChange, blockForm }) => {
    return (
        <Grid item xs={xs} md={md}>
            <Box display='flex' alignItems='center' sx={{ gap: 2 }}>
                <RadioGroup row name={name} defaultValue={defaultValue} onChange={handleChange}>
                    {values &&
                        values.length > 0 &&
                        values.map((item, index) => (
                            <FormControlLabel
                                key={index}
                                value={item.id}
                                control={<Radio disabled={disabled} error={errors ? true : false} />}
                                label={item.nome}
                                // diminuir tamanho do label

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
            </Box>
        </Grid>
    )
}

export default RadioLabel
