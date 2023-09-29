import { Button } from '@mui/material'
import Icon from 'src/@core/components/icon'

const ButtonsFixedLeft = ({
    routes,
    currentUrl,
    btnCancel,
    btnDelete,
    btnStatus,
    handleBtnStatus,
    setId,
    router,
    onclickDelete
}) => {
    return (
        <div className='flex gap-2'>
            {btnCancel && (
                <Button
                    onClick={() => {
                        setId(null)
                        router.push(currentUrl)
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

            {status && matches && (
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
