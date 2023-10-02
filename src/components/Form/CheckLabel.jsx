import { Grid, Typography, Box, FormControlLabel, Checkbox, ListItem, ListItemButton } from '@mui/material'

<<<<<<< HEAD
const CheckLabel = ({ xs, md, title, index, name, typePage, value, disabled, register, onClick }) => {
=======
const CheckLabel = ({ xs, md, title, index, name, typePage, value, disabled, register, onChange, ...props }) => {
>>>>>>> 1ba8d3b344df29e3e52469e859ad780a91b8b54f
    return (
        <Grid item xs={xs} md={md}>
            <Box display='flex' flexDirection='column' alignItems='start'>
                <FormControlLabel
                    control={
                        <Checkbox
<<<<<<< HEAD
                            name={name}
                            onClick={onClick}
                            {...register(name)}
                            defaultChecked={value}
                            disabled={disabled}
=======
                            {...props}
                            name={name}
                            {...register(name)}
                            defaultChecked={value}
                            disabled={disabled}
                            onChange={onChange} // Pass the onChange prop to the Checkbox component
>>>>>>> 1ba8d3b344df29e3e52469e859ad780a91b8b54f
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
