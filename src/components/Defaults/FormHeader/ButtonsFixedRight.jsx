import { Button } from '@mui/material'
import Icon from 'src/@core/components/icon'
import Router from 'next/router'
import Link from 'next/link'
import useLoad from 'src/hooks/useLoad'

const ButtonsFixedRight = ({
    btnSend,
    btnSave,
    btnNew,
    btnNext,
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
    const router = Router
    const { isLoading } = useLoad()

    return (
        <div className='flex items-center gap-2'>
            {/* Novo */}
            {btnNew && routes.find(route => route.rota === router.pathname && route.inserir) && (
                <Link href={`${router.pathname}/novo`}>
                    <Button
                        type='button'
                        variant='outlined'
                        color='primary'
                        size='medium'
                        sx={{ display: 'flex', gap: 2 }}
                    >
                        <Icon icon='ic:outline-plus' />
                        <span className='hidden sm:block'>Novo</span>
                    </Button>
                </Link>
            )}
            {/* Salvar */}
            {btnSave && routes.find(route => route.rota === currentUrl && route.editar) && (
                <Button
                    onClick={handleSubmit}
                    type='submit'
                    variant='outlined'
                    size='medium'
                    color={isLoading ? 'secondary' : 'primary'}
                    disabled={disabled || disabledSubmit || isLoading}
                    sx={{ display: 'flex', gap: 2 }}
                >
                    <Icon icon='mdi:check-bold' />
                    <span className='hidden sm:block'>Salvar</span>
                </Button>
            )}

            {router.pathname == '/formularios/fornecedor' && (
                <Button
                    onClick={handleSubmit}
                    type='submit'
                    variant='outlined'
                    size='medium'
                    color={isLoading ? 'secondary' : 'primary'}
                    disabled={disabled || disabledSubmit || isLoading}
                    sx={{ display: 'flex', gap: 2 }}
                >
                    <Icon icon='mdi:check-bold' />
                    <span className='hidden sm:block'>Salvar</span>
                </Button>
            )}
            {btnNext && (
                <Button
                    onClick={handleSubmit}
                    type='submit'
                    variant='outlined'
                    size='medium'
                    color={isLoading ? 'secondary' : 'primary'}
                    disabled={disabled || isLoading}
                >
                    <Icon icon='grommet-icons:form-next-link' />
                    <span className='hidden sm:block'>Avançar</span>
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
