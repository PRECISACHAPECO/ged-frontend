import Router from 'next/router'

import { Button } from '@mui/material'
import Link from 'next/link'
import { AuthContext } from 'src/context/AuthContext'
import { useContext } from 'react'
import { RouteContext } from 'src/context/RouteContext'
import { backRoute } from 'src/configs/defaultConfigs'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import useLoad from 'src/hooks/useLoad'

const ListHeader = ({ btnNew, btnPrint, btnSave, btnBack, handleSave, hasListChange, openModal }) => {
    const router = Router
    const { setId } = useContext(RouteContext)
    const { routes } = useContext(AuthContext)
    const { isLoading } = useLoad()

    return (
        <>
            <div className='flex items-center justify-between my-2 w-full'>
                <div></div>
                {/* Div Direira */}
                <div className='flex items-center gap-4 '>
                    <div>
                        {btnPrint && (
                            <Button
                                onClick={() => window.print()}
                                type='button'
                                variant='outlined'
                                color='primary'
                                size='medium'
                                sx={{ display: 'flex', gap: 2 }}
                            >
                                <Icon icon='mdi:printer' />
                                <span className='hidden sm:block'>Imprimir</span>
                            </Button>
                        )}
                    </div>
                    <div className=''>
                        {btnNew &&
                            routes.find(
                                route =>
                                    (route.rota === router.pathname || route.rota === backRoute(router.pathname)) &&
                                    route.inserir
                            ) && (
                                <Link href={!openModal ? `${router.pathname}/novo` : ''}>
                                    <Button
                                        type='button'
                                        variant='outlined'
                                        color='primary'
                                        size='medium'
                                        onClick={openModal ? openModal : null}
                                        sx={{ display: 'flex', gap: 2 }}
                                    >
                                        <Icon icon='ic:outline-plus' />
                                        <span className='hidden sm:block'>Novo</span>
                                    </Button>
                                </Link>
                            )}
                    </div>
                    <div>
                        {btnSave && (
                            <Button
                                onClick={handleSave}
                                disabled={!hasListChange || isLoading}
                                type='button'
                                variant='outlined'
                                color={isLoading ? 'secondary' : 'primary'}
                                size='medium'
                                sx={{ display: 'flex', gap: 2 }}
                            >
                                <Icon icon='mdi:check-bold' />
                                <span className='hidden sm:block'>Salvar</span>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListHeader
