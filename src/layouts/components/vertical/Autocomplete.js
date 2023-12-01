// ** React Imports
import { useEffect, useCallback, useRef, useState } from 'react'
import SearchDataNew from './SearchDataNew'
const searchData = SearchDataNew


// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import MuiDialog from '@mui/material/Dialog'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import ListItemButton from '@mui/material/ListItemButton'
import InputAdornment from '@mui/material/InputAdornment'
import MuiAutocomplete from '@mui/material/Autocomplete'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs Imports
import themeConfig from 'src/configs/themeConfig'
import NoResult from './PendenciaAutoComplete/NoResult'
import DefaultSuggestions from './PendenciaAutoComplete/DefaultSuggestions'

//! FilterDataNew
import FilterDataNewContent from './filterDataNew'
import { useContext } from 'react'
import { RouteContext } from 'src/context/RouteContext'
const filterDataNew = FilterDataNewContent

const categoryTitle = {
    Geral: 'Geral',
    Formulários: 'Formulários',
    Definições: 'Definições',
    Cadastros: 'Cadastros',
    Configurações: 'Configurações',
}

// ** Styled Autocomplete component
const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
    '& fieldset': {
        border: 0
    },
    '& + .MuiAutocomplete-popper': {
        '& .MuiAutocomplete-listbox': {
            paddingTop: 0,
            height: '100%',
            maxHeight: 'inherit',
            '& .MuiListSubheader-root': {
                top: 0,
                fontWeight: 400,
                lineHeight: '15px',
                fontSize: '0.75rem',
                letterSpacing: '1px',
                color: theme.palette.text.disabled
            }
        },
        '& .MuiAutocomplete-paper': {
            border: 0,
            height: '100%',
            borderRadius: 0,
            boxShadow: 'none'
        },
        '& .MuiListItem-root.suggestion': {
            padding: 0,
            '& .MuiListItemSecondaryAction-root': {
                display: 'flex'
            },
            '&.Mui-focused.Mui-focusVisible, &:hover': {
                backgroundColor: theme.palette.action.hover
            },
            '& .MuiListItemButton-root: hover': {
                backgroundColor: 'transparent'
            },
            '&:not(:hover)': {
                '& .MuiListItemSecondaryAction-root': {
                    display: 'none'
                },
                '&.Mui-focused, &.Mui-focused.Mui-focusVisible:not(:hover)': {
                    '& .MuiListItemSecondaryAction-root': {
                        display: 'flex'
                    }
                },
                [theme.breakpoints.down('sm')]: {
                    '&.Mui-focused:not(.Mui-focusVisible) .MuiListItemSecondaryAction-root': {
                        display: 'none'
                    }
                }
            }
        },
        '& .MuiAutocomplete-noOptions': {
            display: 'grid',
            minHeight: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: theme.spacing(10)
        }
    }
}))

// ** Styled Dialog component
const Dialog = styled(MuiDialog)({
    '& .MuiBackdrop-root': {
        backdropFilter: 'blur(4px)'
    },
    '& .MuiDialog-paper': {
        overflow: 'hidden',
        '&:not(.MuiDialog-paperFullScreen)': {
            height: '100%',
            maxHeight: 550
        }
    }
})


const AutocompleteComponent = ({ hidden, settings }) => {
    // ** States
    const [isMounted, setIsMounted] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [openDialog, setOpenDialog] = useState(false)
    const [options, setOptions] = useState([])
    const { setId } = useContext(RouteContext)



    // ** Hooks & Vars
    const theme = useTheme()
    const router = useRouter()
    const { layout } = settings
    const wrapper = useRef(null)
    const fullScreenDialog = useMediaQuery(theme.breakpoints.down('sm'))

    // Get all data using API
    useEffect(() => {
        setOptions(searchData)

        console.log('options', options)

        let resultFilter = filterDataNew(searchValue)
        if (resultFilter) {
            setOptions(searchData)
        } else {
            setOptions([])
        }

    }, [searchValue])

    useEffect(() => {
        if (!openDialog) {
            setSearchValue('')
        }
    }, [openDialog])
    useEffect(() => {
        setIsMounted(true)

        return () => setIsMounted(false)
    }, [])

    // Handle click event on a list item in search result
    const handleOptionClick = obj => {
        setSearchValue('')
        setOpenDialog(false)
        setId(null)
        if (obj.url) {
            router.push(obj.url)
        }
    }


    // efeito quando clicado crt + / abre o dialog
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === '/' && event.ctrlKey) {
                setOpenDialog(true)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])


    // Handle ESC & shortcut keys keydown events
    const handleKeydown = useCallback(
        event => {
            // ** Shortcut keys to open searchbox (Ctrl + /)
            if (!openDialog && event.ctrlKey && event.which === 191) {
                setOpenDialog(true)
            }
        },
        [openDialog]
    )

    // Handle shortcut keys keyup events
    const handleKeyUp = useCallback(
        event => {
            // ** ESC key to close searchbox
            if (openDialog && event.keyCode === 27) {
                setOpenDialog(false)
            }
        },
        [openDialog]
    )
    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeydown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [handleKeyUp, handleKeydown])
    if (!isMounted) {
        return null
    } else {
        return (
            <Box
                ref={wrapper}
                onClick={() => !openDialog && setOpenDialog(true)}
                sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center' }}
            >
                <IconButton color='inherit' sx={!hidden && layout === 'vertical' ? { mr: 1, ml: -2.75 } : {}}>
                    <Icon icon='mdi:magnify' />
                </IconButton>
                {!hidden && layout === 'vertical' ? (
                    <Typography sx={{ userSelect: 'none', color: 'text.opacity' }}>Pesquisar (Ctrl+/)</Typography>
                ) : null}
                {openDialog && (
                    <Dialog fullWidth open={openDialog} fullScreen={fullScreenDialog} onClose={() => setOpenDialog(false)}>
                        <Box sx={{ top: 0, width: '100%', position: 'sticky' }}>
                            <Autocomplete
                                autoHighlight
                                disablePortal
                                options={options}
                                id='appBar-search'
                                isOptionEqualToValue={() => true}
                                onInputChange={(event, value) => setSearchValue(value)}
                                onChange={(event, obj) => handleOptionClick(obj)}
                                noOptionsText={<NoResult value={searchValue} setOpenDialog={setOpenDialog} />}
                                getOptionLabel={option => option.title}
                                groupBy={option => (searchValue.length ? categoryTitle[option.category] : '')}
                                sx={{
                                    '& + .MuiAutocomplete-popper': {
                                        ...(searchValue.length
                                            ? {
                                                overflow: 'auto',
                                                maxHeight: 'calc(100vh - 69px)',
                                                borderTop: `1px solid ${theme.palette.divider}`,
                                                height: fullScreenDialog ? 'calc(100vh - 69px)' : 481,
                                                '& .MuiListSubheader-root': { p: theme.spacing(3.75, 6, 0.75) }
                                            }
                                            : {
                                                '& .MuiAutocomplete-listbox': { pb: 0 }
                                            })
                                    }
                                }}
                                renderInput={params => {
                                    return (
                                        <TextField
                                            {...params}
                                            value={searchValue}
                                            onChange={event => setSearchValue(event.target.value)}
                                            inputRef={input => {
                                                if (input) {
                                                    if (openDialog) {
                                                        input.focus()
                                                    } else {
                                                        input.blur()
                                                    }
                                                }
                                            }}
                                            InputProps={{
                                                ...params.InputProps,
                                                sx: { p: `${theme.spacing(3.75, 6)} !important` },
                                                startAdornment: (
                                                    <InputAdornment position='start' sx={{ color: 'text.primary' }}>
                                                        <Icon icon='mdi:magnify' />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment
                                                        position='end'
                                                        onClick={() => {
                                                            setOpenDialog(false)
                                                        }
                                                        }
                                                        sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center' }}
                                                    >
                                                        {!hidden ? <Typography sx={{ mr: 2.5, color: 'text.disabled' }}>[esc]</Typography> : null}
                                                        <IconButton size='small' sx={{ p: 1 }}>
                                                            <Icon icon='mdi:close' fontSize={20} />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    )
                                }}
                                renderOption={(props, option) => {
                                    return searchValue.length ? (
                                        <ListItem
                                            {...props}
                                            key={option.title}
                                            className={`suggestion ${props.className}`}
                                            onClick={() => handleOptionClick(option)}
                                            secondaryAction={<Icon icon='mdi:subdirectory-arrow-left' fontSize={20} />}
                                            sx={{
                                                '& .MuiListItemSecondaryAction-root': {
                                                    '& svg': {
                                                        cursor: 'pointer',
                                                        color: 'text.disabled'
                                                    }
                                                }
                                            }}
                                        >
                                            <ListItemButton
                                                sx={{
                                                    py: 2.5,
                                                    px: `${theme.spacing(6)} !important`,
                                                    '& svg': { mr: 2.5, color: 'text.primary' }
                                                }}
                                            >
                                                <Icon fontSize={20} icon={option.icon || themeConfig.navSubItemIcon} />
                                                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                                                    {option.title}
                                                </Typography>
                                            </ListItemButton>
                                        </ListItem>
                                    ) : null
                                }}
                            />
                        </Box>
                        {searchValue.length === 0 ? (
                            <Box
                                sx={{
                                    p: 10,
                                    display: 'grid',
                                    overflow: 'auto',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderTop: `1px solid ${theme.palette.divider}`,
                                    height: fullScreenDialog ? 'calc(100vh - 69px)' : '100%'
                                }}
                            >
                                <DefaultSuggestions setOpenDialog={setOpenDialog} />
                            </Box>
                        ) : null}
                    </Dialog>
                )}
            </Box>
        )
    }
}

export default AutocompleteComponent
