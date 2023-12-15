// ** React Imports
import { useState, useEffect, useContext } from 'react'
import Router from 'next/router'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import { cpfMask } from 'src/configs/masks'
import { validationCPF } from 'src/configs/validations'
import { RouteContext } from 'src/context/RouteContext'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import { AuthContext } from 'src/context/AuthContext'

import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import DialogSelectUnit from 'src/components/Defaults/Dialogs/DialogSelectUnit'
import { toast } from 'react-hot-toast'
import Logo from 'src/components/Defaults/Logo'

// ** Styled Components
const LoginIllustrationWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(20),
    paddingRight: '0 !important',
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(10)
    }
}))

const LoginIllustration = styled('img')(({ theme }) => ({
    maxWidth: '48rem',
    [theme.breakpoints.down('xl')]: {
        maxWidth: '38rem'
    },
    [theme.breakpoints.down('lg')]: {
        maxWidth: '30rem'
    }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('md')]: {
        maxWidth: 400
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: 450
    }
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
        maxWidth: 400
    }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    letterSpacing: '0.18px',
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontSize: '0.875rem',
        color: theme.palette.text.secondary
    }
}))

const schema = yup.object().shape({
    cpf: yup
        .string()
        .min(14, 'O CPF deve ser preenchido completamente')
        .required('O CPF é obrigatório')
        .test('valida-cpf', 'CPF inválido', value => validationCPF(value)),

    password: yup.string().min(4, 'A senha deve conter no mínimo 4 digitos').required('A senha é obrigatória')
})

const defaultValues = {
    password: '',
    cpf: ''
}

const LoginPage = ({ units }) => {
    const [rememberMe, setRememberMe] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    // ** Contexto que controla se usuário tentando logar precisar selecionar unidade ou não
    const { openModalSelectUnits, setOpenModalSelectUnits, unitsUser, userAux, setLoggedUnity, getRoutes, getMenu } =
        useContext(AuthContext)

    // Abre modal para selecionar unidade
    const [openModalSelectUnit, setOpenModalSelectUnit] = useState(false)
    // Dados do usuário
    const [data, setData] = useState({})
    const { setId } = useContext(RouteContext)
    // Unidade selecionada
    const [selectedUnit, setSelectedUnit] = useState(null)
    const router = Router

    // ** Hooks
    const auth = useAuth()
    const theme = useTheme()
    const bgColors = useBgColor()
    const { settings } = useSettings()
    const hidden = useMediaQuery(theme.breakpoints.down('md'))

    // ** Vars
    const { skin } = settings

    const {
        control,
        setError,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = data => {
        const { cpf, password } = data
        const verifyUnits = true
        setData(data)
        setId(null)
        auth.login({ cpf, password, rememberMe, verifyUnits }, error => {
            setError('cpf', {
                type: 'manual',
                message: 'CPF e/ou senha inválidos!'
            })
            if (error && error.response && error.response.status === 401) {
                toast.error('CPF e/ou senha inválidos!')
            }
        })
    }
    const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

    const handleCloseModalSelectUnits = () => {
        setOpenModalSelectUnit(false)
        setOpenModalSelectUnits(null)
    }

    const handleConfirmUnit = () => {
        const { cpf, password } = data
        const verifyUnits = false
        setOpenModalSelectUnit(false)

        setId(null)

        setLoggedUnity(selectedUnit)
        localStorage.setItem('loggedUnity', JSON.stringify(selectedUnit))

        getMenu(selectedUnit.papelID)

        // Recebe usuário e unidade e seta rotas de acordo com o perfil
        getRoutes(userAux.usuarioID, selectedUnit.unidadeID, userAux.admin, selectedUnit.papelID)

        auth.login({ cpf, password, rememberMe, verifyUnits, selectedUnit }, () => {
            setError('cpf', {
                type: 'manual',
                message: 'CPF e/ou senha inválidos!'
            })
        })
    }

    return (
        <>
            <Box className='content-right'>
                {!hidden ? (
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            position: 'relative',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img src='/images/storyset/login.svg' style={{ height: '100vh' }} />
                        <img
                            alt='mask'
                            src='https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-3/images/pages/misc-mask-light.png'
                            className='css-84vgca'
                            style={{
                                position: 'absolute',
                                zIndex: '-1',
                                bottom: '0',
                                left: '0',
                                width: '100%'
                            }}
                        />
                    </Box>
                ) : null}
                <RightWrapper
                    sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}
                >
                    <Box
                        sx={{
                            p: 7,
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'background.paper'
                        }}
                    >
                        <BoxWrapper>
                            <Box
                                sx={{
                                    top: 30,
                                    left: 40,
                                    display: 'flex',
                                    position: 'absolute',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {/* Logo do sistema GED */}
                                <Logo />
                            </Box>
                            <Box sx={{ mb: 6 }}>
                                <TypographyStyled
                                    variant='h6'
                                    sx={{ fontWeight: 600 }}
                                >{`Bem-vindo ao ${themeConfig.templateName}! 👋🏻`}</TypographyStyled>
                                <Typography variant='body2'>Digite seu CPF e senha para começar</Typography>
                            </Box>

                            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                                <FormControl fullWidth sx={{ mb: 4 }}>
                                    <Controller
                                        name='cpf'
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <TextField
                                                autoFocus
                                                label='CPF'
                                                value={cpfMask(value ?? '')}
                                                onBlur={onBlur}
                                                size='small'
                                                onChange={onChange}
                                                error={Boolean(errors.cpf)}
                                                placeholder='000.000.000-00'
                                                inputProps={{
                                                    maxLength: 14,
                                                    type: 'tel', // define o tipo de entrada como 'tel'
                                                    inputMode: 'numeric' // define o inputMode como 'numeric'
                                                }}
                                            />
                                        )}
                                    />
                                    {errors.cpf && (
                                        <FormHelperText sx={{ color: 'error.main' }}>
                                            {errors.cpf.message}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <FormControl fullWidth>
                                    <Controller
                                        name='password'
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label='Senha'
                                                variant='outlined'
                                                size='small'
                                                id='auth-login-v2-password'
                                                error={Boolean(errors.password)}
                                                type={showPassword ? 'text' : 'password'}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position='end'>
                                                            <IconButton
                                                                edge='end'
                                                                onMouseDown={e => e.preventDefault()}
                                                                onClick={() => setShowPassword(!showPassword)}
                                                            >
                                                                <Icon
                                                                    icon={
                                                                        showPassword
                                                                            ? 'mdi:eye-outline'
                                                                            : 'mdi:eye-off-outline'
                                                                    }
                                                                    fontSize={20}
                                                                />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        )}
                                    />
                                    {errors.password && (
                                        <FormHelperText sx={{ color: 'error.main' }} id=''>
                                            Campo obrigatório
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <Box
                                    sx={{
                                        mb: 4,
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <FormControlLabel
                                        label='Lembrar-me'
                                        control={
                                            <Checkbox
                                                checked={rememberMe}
                                                onChange={e => setRememberMe(e.target.checked)}
                                            />
                                        }
                                    />
                                    <Typography
                                        variant='body2'
                                        component={Link}
                                        href='/esqueceu-sua-senha?type=login'
                                        sx={{ color: 'primary.main', textDecoration: 'none' }}
                                    >
                                        Esqueceu sua senha?
                                    </Typography>
                                </Box>
                                <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
                                    Entrar
                                </Button>
                            </form>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography sx={{ mr: 2, color: 'text.secondary' }}>É um fornecedor?</Typography>
                                <Typography
                                    href='/fornecedor'
                                    component={Link}
                                    sx={{ color: 'primary.main', textDecoration: 'none' }}
                                >
                                    Login
                                </Typography>
                            </Box>
                        </BoxWrapper>
                    </Box>
                </RightWrapper>
            </Box>

            {/* Modal de seleção de unidade pra logar */}
            {openModalSelectUnits && (
                <DialogSelectUnit
                    openModal={openModalSelectUnits}
                    handleClose={handleCloseModalSelectUnits}
                    handleSubmit={handleConfirmUnit}
                    unidades={unitsUser}
                    setSelectedUnit={setSelectedUnit}
                />
            )}
        </>
    )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
