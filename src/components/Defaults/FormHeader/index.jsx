import Router from 'next/router'
import { useState, useContext, useEffect } from 'react'
import { CardContent, Box } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { backRoute } from 'src/configs/defaultConfigs'
import { AuthContext } from 'src/context/AuthContext'
import { RouteContext } from 'src/context/RouteContext'
import LayoutReport from 'src/components/Reports/Layout'
import CustomChip from 'src/@core/components/mui/chip'
import useMediaQuery from '@mui/material/useMediaQuery'
import OptionsDots from './OptionsDots'
import ButtonsFloating from './ButtonsFloating'
import ButtonsFixedRight from './ButtonsFixedRight'
import ButtonsFixedLeft from './ButtonsFixedLeft'

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
    onclickDelete,
    btnDelete,
    btnPrint,
    disabledPrint,
    disabled,
    actions,
    actionsData,
    type,
    status,
    partialRoute
}) => {
    const router = Router
    const { routes } = useContext(AuthContext)
    const { setId } = useContext(RouteContext)
    const [isVisible, setIsVisible] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const matches = useMediaQuery('(min-width:640px)')

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

    const currentUrl = type === 'new' || partialRoute ? backRoute(router.pathname) : router.pathname

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
            id: 3,
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
            <CardContent>
                <div className='flex items-center justify-between'>
                    {/* Div da esquerda */}
                    <ButtonsFixedLeft
                        routes={routes}
                        currentUrl={currentUrl}
                        btnCancel={btnCancel}
                        btnDelete={btnDelete}
                        btnStatus={btnStatus}
                        handleBtnStatus={handleBtnStatus}
                        onclickDelete={onclickDelete}
                        setId={setId}
                        router={router}
                    />
                    {/* // 3 pontinhos ao clicar abre opções de seleção */}
                    <div className='flex items-center gap-2'>
                        {/*Div direita */}
                        {actions && (
                            <OptionsDots
                                anchorEl={anchorEl}
                                open={open}
                                handleClose={handleClose}
                                handleClick={handleClick}
                                disabled={disabled}
                                disabledPrint={disabledPrint}
                                btnPrint={btnPrint}
                                actionsData={actionsData}
                                matches={matches}
                            />
                        )}
                        <ButtonsFixedRight
                            btnSave={btnSave}
                            btnSend={btnSend}
                            routes={routes}
                            currentUrl={currentUrl}
                            handleSubmit={handleSubmit}
                            disabled={disabled}
                            disabledSend={disabledSend}
                            disabledSubmit={disabledSubmit}
                            handleSend={handleSend}
                            iconConclusion={iconConclusion}
                            titleConclusion={titleConclusion}
                        />
                    </div>
                </div>
                {/* Botões flutuantes */}
                <ButtonsFloating
                    isVisible={isVisible}
                    dataButtons={dataButtons}
                    btnSave={btnSave}
                    btnPrint={btnPrint}
                    matches={matches}
                    routes={routes}
                    currentUrl={currentUrl}
                />
                <Box sx={{ mt: 4 }}>
                    {status && !matches && (
                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <CustomChip
                                size='small'
                                skin='light'
                                color={status.color}
                                label={status.title}
                                sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
                            />
                        </Box>
                    )}
                </Box>
            </CardContent>
        </>
    )
}

export default FormHeader