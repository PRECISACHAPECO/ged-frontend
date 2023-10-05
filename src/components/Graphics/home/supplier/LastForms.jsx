import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Router from 'next/router'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Icon from 'src/@core/components/icon'
import { SettingsContext } from 'src/@core/context/settingsContext'
import { useContext } from 'react'
import CustomChip from 'src/@core/components/mui/chip'

const LastForms = ({ row }) => {
    const { settings } = useContext(SettingsContext)
    const mode = settings.mode
    const router = Router

    const handleFilterStatus = () => {
        router.push(`/formularios/fornecedor/?s=${row.status}`)
    }

    return (
        <Card
            onClick={handleFilterStatus}
            className={`cursor-pointer ${
                mode === 'dark' ? 'hover:bg-[#232327]' : 'hover:bg-[#EEEEF1]'
            }  shadow-xl transition-all`}
        >
            <CardContent>
                <div className='space-y-4 p-1'>
                    <div className='flex  justify-between'>
                        <div className='flex gap-4'>
                            <CustomAvatar
                                skin='light-static'
                                variant='rounded'
                                sx={{ width: 70, height: 70 }}
                                className='p-1'
                            >
                                <img src={row.logo} alt='Imagem do logo da fábrica' />
                            </CustomAvatar>
                            <div className='space-y-2'>
                                <CustomChip
                                    size='small'
                                    skin='light'
                                    color={row.cor}
                                    label={row.status}
                                    sx={{
                                        mx: 2,
                                        '& .MuiChip-label': { textTransform: 'capitalize' }
                                    }}
                                />
                                <div className='leading-4'>
                                    <Typography variant='body2'>Aberto em {row.dataCriacao_formatada}</Typography>
                                    <Typography variant='caption'>há {row.quantidadeDias} dias</Typography>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Icon icon='uil:external-link-alt' className='text-base text-[#35553B]' />
                        </div>
                    </div>
                    <div className='w-full flex justify-between'>
                        <Typography variant='h6 '>{row.fabrica}</Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default LastForms
