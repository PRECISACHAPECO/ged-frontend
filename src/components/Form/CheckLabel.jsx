import { Grid, Typography, Box, FormControlLabel, Checkbox, ListItem, ListItemButton } from '@mui/material'

const CheckLabel = ({ xs, md, title, index, name, typePage, value, disabled, register, onClick }) => {
    return (
        <Grid item xs={xs} md={md}>
            <Box display='flex' flexDirection='column' alignItems='start'>
                <FormControlLabel
                    control={
                        <Checkbox
                            name={name}
                            onClick={onClick}
                            {...register(name)}
                            defaultChecked={value}
                            disabled={disabled}
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
