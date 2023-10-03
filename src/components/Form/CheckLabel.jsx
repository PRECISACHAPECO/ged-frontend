import { Grid, Typography, Box, FormControlLabel, Checkbox, ListItem, ListItemButton } from '@mui/material'
import HelpText from '../Defaults/HelpText'

<<<<<<< HEAD
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
=======
const CheckLabel = ({
    xs,
    md,
    title,
    index,
    name,
    typePage,
    value,
    disabled,
    register,
    onClick,
    helpText,
    helpTextPosition
}) => {
    return (
        <Grid item xs={xs} md={md}>
            <Box display='flex' alignItems='center' justifyContent='start' sx={{ gap: 0 }}>
                <>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={name}
                                onClick={onClick}
                                {...register(name)}
                                defaultChecked={value}
                                disabled={disabled}
                            />
>>>>>>> 4a72384ba6f8dff81b73194975af8a26b99cc05b
                        }
                        label={title}
                        size='small'
                        sx={{
                            marginRight: '4px', // Define a margem como 0 para reduzir o espaçamento
                            '&:hover': {
                                '& .MuiFormControlLabel-label': {
                                    color: 'primary.main'
                                }
                            }
                        }}
                    />
                    {helpText && <HelpText text={helpText} position={helpTextPosition ?? 'top'} />}
                </>
            </Box>
        </Grid>
    )
}

export default CheckLabel
