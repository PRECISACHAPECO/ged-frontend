import { Grid, Typography, Box, FormControlLabel, Checkbox, ListItem, ListItemButton } from '@mui/material'

const CheckLabel = ({ xs, md, title, index, name, typePage, value, disabled, register, onChange, ...props }) => {
    return (
        <Grid item xs={xs} md={md}>
            <Box display='flex' flexDirection='column' alignItems='start'>
                <FormControlLabel
                    control={
                        <Checkbox
                            {...props}
                            name={name}
                            {...register(name)}
                            defaultChecked={value}
                            disabled={disabled}
                            onChange={onChange} // Pass the onChange prop to the Checkbox component
                        />
                    }
                    label={title}
                    size='small'
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
