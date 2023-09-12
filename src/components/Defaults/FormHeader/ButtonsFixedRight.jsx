import { Button } from '@mui/material'
import Icon from 'src/@core/components/icon'

const ButtonsFixedRight = ({
    btnSend,
    btnSave,
    routes,
    currentUrl,
    disabled,
    disabledSend,
    disabledSubmit,
    handleSubmit,
    handleSend,
    iconConclusion,
    titleConclusion
}) => {
    return (
        <div className='flex items-center gap-2'>
            {/* Salvar */}
            {btnSave && routes.find(route => route.rota === currentUrl && route.editar) && (
                <Button
                    onClick={handleSubmit}
                    type='submit'
                    variant='outlined'
                    size='medium'
                    color='primary'
                    disabled={disabled || disabledSubmit}
                    sx={{ display: 'flex', gap: 2 }}
                >
                    <Icon icon='mdi:check-bold' />
                    <span className='hidden sm:block'>Salvar</span>
                </Button>
            )}

            {/* Fornecedor concluir formulário e envia pra fábrica avaliar */}
            {btnSend && (
                <Button
                    onClick={handleSend}
                    type='button'
                    variant='contained'
                    size='medium'
                    color='primary'
                    disabled={disabled || disabledSend}
                    sx={{ display: 'flex', gap: 2 }}
                >
                    <Icon icon={iconConclusion ?? 'carbon:send-filled'} />
                    <span className='hidden sm:block'>{titleConclusion}</span>
                </Button>
            )}
        </div>
    )
}

export default ButtonsFixedRight
