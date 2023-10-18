// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioLabel = ({ xs, md, values, defaultValue, name, disabled, errors, handleChange }) => {
    return (
        <Grid item xs={xs} md={md}>
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
        </Grid>
    )
}

export default RadioLabel
