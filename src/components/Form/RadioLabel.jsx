// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioLabel = ({ values, defaultValue, name, handleChange }) => {
    return (
        <Grid item xs={12} sm={6}>
            <RadioGroup row name={name} defaultValue={defaultValue} onChange={handleChange}>
                {values &&
                    values.length > 0 &&
                    values.map((item, index) => (
                        <FormControlLabel
                            key={index}
                            value={item.id}
                            control={<Radio />}
                            label={item.nome}
                            sx={{
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
