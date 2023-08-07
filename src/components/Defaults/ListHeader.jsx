import Router from 'next/router'

import { CardContent, Button, Box, IconButton } from '@mui/material'
import Link from 'next/link'
import { AuthContext } from 'src/context/AuthContext'
import { useContext } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ListHeader = ({ btnNew, btnPrint, openModal }) => {
    const router = Router
    const { routes } = useContext(AuthContext)

    return (
        <>
            <div className='flex items-center justify-end sm:justify-normal gap-4 my-2 '>
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
                    {btnNew && routes.find(route => route.rota === router.pathname && route.inserir) && (
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
            </div>
        </>
    )
}

export default ListHeader
