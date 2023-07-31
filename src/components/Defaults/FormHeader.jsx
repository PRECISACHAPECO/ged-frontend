import Router from 'next/router'
import { useState, useContext, useEffect } from 'react'

import { CardContent, Button, Box, Tooltip } from '@mui/material'
import Link from 'next/link'
import Icon from 'src/@core/components/icon'
import { backRoute } from 'src/configs/defaultConfigs'
import MenuReports from './MenuReports'
import { AuthContext } from 'src/context/AuthContext'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import Fab from '@mui/material/Fab'
import LayoutReport from 'src/components/Reports/Layout'

const FormHeader = ({
    btnCancel,
    btnSave,
    btnSend,
    btnStatus,
    handleSubmit,
    disabledSubmit,

    handleSend,
    iconConclusion,
    titleConclusion,

    disabledSend,
    handleBtnStatus,
    btnDelete,
    onclickDelete,
    btnPrint,
    disabledPrint,
    disabled,
    dataReports,
    generateReport,
    type
}) => {
    const router = Router
    const { user, routes, loggedUnity } = useContext(AuthContext)
    const { setId } = useContext(RouteContext)
    const [isVisible, setIsVisible] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    //? Função que volta ao topo
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    //? Função que volta a página anterior
    const previousPage = () => {
        setId(null)
    }

    const currentUrl = type === 'new' ? backRoute(router.pathname) : router.pathname

    const dataButtons = [
        {
            id: 1,
            title: 'Salvar',
            color: 'primary',
            size: 'large',
            type: 'submit',
            variant: 'contained',
            disabled: disabled || disabledSubmit,
            icon: <Icon icon='material-symbols:save' />,
            function: handleSubmit
        },
        {
            id: 2,
            title: 'Imprimir',
            color: 'default',
            size: 'large',
            type: 'button',
            variant: 'outlined',
            disabled: disabled || disabledPrint,
            icon: (
                <LayoutReport
                    titleButton={<Icon icon='material-symbols:print' />}
                    title='Imprimir'
                    content={dataReports?.[0].component}
                />
            ),
            function: handleClick
        },
        {
            id: 3,
            title: 'Voltar ao topo',
            color: 'default',
            size: 'large',
            type: 'button',
            variant: 'outlined',
            disabled: false,
            icon: <Icon icon='ion:arrow-up' />,
            function: backToTop
        },
        {
            id: 4,
            title: 'Voltar para a página anterior',
            color: 'default',
            size: 'large',
            type: 'button',
            variant: 'outlined',
            disabled: false,
            icon: <Icon icon='material-symbols:arrow-back-rounded' />,
            function: previousPage
        }
    ]

    //? Verifica se o usuário deu scroll na página e mostra o botão de salvar
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(false)
            if (window.scrollY > 0) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: '8px' }}>
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
                            startIcon={<Icon icon='material-symbols:delete-outline' />}
                        >
                            Excluir
                        </Button>
                    )}

                    {btnStatus && (
                        <Button
                            type='button'
                            onClick={handleBtnStatus}
                            variant='outlined'
                            color='primary'
                            size='medium'
                            startIcon={<Icon icon='fluent:status-12-filled' />}
                        >
                            Status
                        </Button>
                    )}
                </Box>

                <Box sx={{ display: 'flex', gap: '8px' }}>
                    {/* Imprimir com 1 opção */}
                    {btnPrint && dataReports.length === 1 && (
                        <Button
                            id='fade-button'
                            color='primary'
                            disabled={disabled || disabledPrint}
                            variant='outlined'
                            size='medium'
                            type='button'
                            startIcon={<Icon icon='material-symbols:print' />}
                        >
                            <LayoutReport
                                titleButton={dataReports[0].titleButton}
                                title={dataReports[0].title}
                                content={dataReports[0].component}
                            />
                        </Button>
                    )}
                    {/* Imprimir com +1 opção (dropdown) */}
                    {btnPrint && dataReports.length > 1 && (
                        <Box>
                            <Button
                                id='fade-button'
                                onClick={handleClick}
                                color='primary'
                                disabled={disabled || disabledPrint}
                                variant='outlined'
                                size='medium'
                                type='button'
                                sx={{ mr: 0 }}
                                startIcon={<Icon icon='material-symbols:print' />}
                            >
                                Imprimir
                            </Button>
                            <MenuReports
                                dataReports={dataReports}
                                handleClick={handleClick}
                                handleClose={handleClose}
                                open={open}
                                anchorEl={anchorEl}
                            />
                        </Box>
                    )}

                    {btnSave && routes.find(route => route.rota === currentUrl && route.editar) && (
                        <Button
                            onClick={handleSubmit}
                            type='submit'
                            variant='outlined'
                            size='medium'
                            color='primary'
                            disabled={disabled || disabledSubmit}
                            startIcon={<Icon icon='material-symbols:save' />}
                        >
                            Salvar
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
                            startIcon={<Icon icon={iconConclusion ?? 'carbon:send-filled'} />}
                        >
                            {titleConclusion}
                        </Button>
                    )}

                    {/* Botão flutuante de salvar (aparece quando o usuário dá scroll na página) */}

                    <div
                        className={`
                        ${
                            isVisible ? 'fadeIn' : 'hidden'
                        } trasition duration-200 fixed bottom-10 right-8 z-50 flex flex-col-reverse gap-3
                    `}
                    >
                        {/*  Oculta o botão de salvar se o usuário não tiver permissão para editar */}
                        {dataButtons.map(item => {
                            if (
                                item.id === 1 &&
                                (!btnSave || !routes.find(route => route.rota === currentUrl && route.editar))
                            ) {
                                return null
                            }
                            // if (item.id === 2 && !btnBackToTop) {
                            //     return null
                            // }

                            if (item.id === 2 && !btnPrint) {
                                return null
                            }

                            return (
                                <Tooltip title={item.title} key={item.id} placement='left'>
                                    <div key={item.id}>
                                        <Fab
                                            color={item.color}
                                            size='large'
                                            onClick={item.function}
                                            variant='contained'
                                            type={item.type}
                                            disabled={item.disabled}
                                        >
                                            {item.icon}
                                        </Fab>
                                    </div>
                                </Tooltip>
                            )
                        })}
                    </div>
                </Box>
            </CardContent>
        </>
    )
}

export default FormHeader
