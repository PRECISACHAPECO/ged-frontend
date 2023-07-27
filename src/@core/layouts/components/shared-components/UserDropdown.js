// ** React Imports
import { useState, Fragment, useContext } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { AuthContext } from 'src/context/AuthContext'
import { ParametersContext } from 'src/context/ParametersContext'


// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Context
import { useAuth, user } from 'src/hooks/useAuth'

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const UserDropdown = props => {
    // ** Props
    const { settings } = props
    const { user } = useContext(AuthContext)
    const { setId } = useContext(ParametersContext)

    // ** States
    const [anchorEl, setAnchorEl] = useState(null)

    // ** Hooks
    const router = useRouter()
    const { logout } = useAuth()

    // ** Vars
    const { direction } = settings

    const handleDropdownOpen = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleDropdownClose = url => {
        if (url) {
            router.push(url)
        }
        setAnchorEl(null)
    }

    const styles = {
        py: 2,
        px: 4,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        textDecoration: 'none',
        '& svg': {
            mr: 2,
            fontSize: '1.375rem',
            color: 'text.primary'
        }
    }

    const handleLogout = () => {
        logout()
        handleDropdownClose()
    }


    return (
        <Fragment>
            <Badge
                overlap='circular'
                onClick={handleDropdownOpen}
                sx={{ ml: 2, cursor: 'pointer' }}
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
            >
                <Avatar
                    alt={user.nome}
                    onClick={handleDropdownOpen}
                    sx={{ width: 40, height: 40 }}
                    src={user.imagem}
                />
            </Badge>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleDropdownClose()}
                sx={{ '& .MuiMenu-paper': { width: 230, mt: 4 } }}
                anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
            >
                <Box sx={{ pt: 2, pb: 3, px: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Badge
                            overlap='circular'
                            badgeContent={<BadgeContentSpan />}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                        >
                            <Avatar
                                alt='John Doe'
                                src={user.imagem}
                                sx={{ width: '2.5rem', height: '2.5rem' }}
                            />
                        </Badge>
                        <Box sx={{ display: 'flex', ml: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
                            <Typography sx={{ fontWeight: 600 }}>{user.nome}</Typography>
                            <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
                                {user.profissao}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ mt: '0 !important' }} />
                <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
                    <Box sx={styles}
                        onClick={() => {
                            handleDropdownClose(user.papelID === 1 ? `/configuracoes/usuario` : `/meus-dados`)
                            setId(user.usuarioID)
                        }}>

                        <Icon icon='mdi:account-outline' />
                        Meus Dados
                    </Box>
                </MenuItem>
                <MenuItem
                    onClick={handleLogout}
                    sx={{ py: 2, '& svg': { mr: 2, fontSize: '1.375rem', color: 'text.primary' } }}
                >
                    <Icon icon='mdi:logout-variant' />
                    Sair
                </MenuItem>

            </Menu>
        </Fragment >
    )
}

export default UserDropdown
