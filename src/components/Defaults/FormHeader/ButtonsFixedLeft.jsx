import { Box, Button } from '@mui/material'
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'

const ButtonsFixedLeft = ({
    routes,
    currentUrl,
    btnCancel,
    btnDelete,
    btnStatus,
    btnClose,
    handleModalClose,
    handleBtnStatus,
    status,
    setId,
    router,
    onclickDelete
}) => {
    return (
        <div className='flex gap-2'>
            {btnCancel && !btnClose && (
                <Button
                    onClick={() => {
                        setId(null)
                    }}
                    type='button'
                    variant='outlined'
                    color='primary'
                    size='medium'
                >
                    <Icon icon='material-symbols:arrow-back-rounded' />
                </Button>
            )}

            {btnDelete && routes.find(route => route.rota === currentUrl && route.excluir) && (
                <Button
                    type='button'
                    onClick={onclickDelete}
                    variant='outlined'
                    color='error'
                    size='medium'
                    sx={{ display: 'flex', gap: 2 }}
                >
                    <Icon icon='material-symbols:delete-outline' />
                    <span className='hidden sm:block'>Excluir</span>
                </Button>
            )}

            {btnClose && (
                <Button
                    type='button'
                    onClick={handleModalClose}
                    variant='outlined'
                    color='primary'
                    size='medium'
                    sx={{ display: 'flex', gap: 2 }}
                >
                    <span className='hidden sm:block'>Fechar</span>
                </Button>
            )}

            {btnStatus && (
                <Button
                    type='button'
                    onClick={handleBtnStatus}
                    variant='outlined'
                    color='primary'
                    size='medium'
                    sx={{ display: 'flex', gap: 2 }}
                >
                    <Icon icon='fluent:status-12-filled' />
                    <span className='hidden sm:block'>Status</span>
                </Button>
            )}

            {status && (
                <Box display='flex' alignItems='center' justifyContent='flex-end'>
                    <CustomChip
                        size='small'
                        skin='light'
                        color={status.color}
                        label={status.title}
                        sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
                    />
                </Box>
            )}
        </div>
    )
}

export default ButtonsFixedLeft
