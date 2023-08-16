import { Grid, Typography, Box, FormControlLabel, Checkbox, ListItem, ListItemButton } from '@mui/material'

const CheckLabel = ({ xs, md, title, index, name, typePage, value, req, disabled, register }) => {
    console.log('🚀 ~ CheckLabel:', value)

    return (
        <Grid item xs={xs} md={md}>
            <Box display='flex' flexDirection='column' alignItems='start'>
                <FormControlLabel
                    control={
                        <Checkbox
                            name={name}
                            {...register(name, { required: req })}
                            defaultChecked={value}
                            disabled={disabled}
                        />
                    }
                    label={title}
                    sx={{
                        '&:hover': {
                            '& .MuiFormControlLabel-label': {
                                color: 'primary.main'
                            }
                        }
                    }}
                />
            </Box>
        </Grid>
    )
}

export default CheckLabel
