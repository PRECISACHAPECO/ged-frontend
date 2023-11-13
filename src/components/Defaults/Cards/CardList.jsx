import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { useContext } from 'react'
import Icon from 'src/@core/components/icon'
import { SettingsContext } from 'src/@core/context/settingsContext'

const CardList = ({ icon, title, subtitle, handleClick }) => {
    const { settings } = useContext(SettingsContext)
    const mode = settings.mode

    return (
        <Grid item xs={12} md={3}>
            <Card
                onClick={handleClick}
                className={`cursor-pointer ${
                    mode == 'dark' ? 'hover:bg-[#232327]' : 'hover:bg-[#EEEEF1]'
                }  shadow-xl transition-all`}
            >
                <CardContent className='text-center'>
                    <Box display='flex' flexDirection='column' alignItems='center' sx={{ gap: 3, padding: 6 }}>
                        <Icon icon={icon} width={38} />

                        <Typography variant='h6' className='!font-extrabold'>
                            {title}
                        </Typography>
                        <Typography variant='subtitle2'>{subtitle}</Typography>
                        <div className='flex items-center gap-1 text-[#4a8b57] '>
                            <Icon icon='icon-park-solid:add-one' width={16} />
                            <Typography variant='body2' color='primary'>
                                Criar novo
                            </Typography>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CardList
