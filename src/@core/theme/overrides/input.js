const input = theme => {
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    lineHeight: '.2rem',
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    '&.Mui-disabled:before': {
                        borderBottomStyle: 'solid'
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.05)`,
                    '&:hover:not(.Mui-disabled)': {
                        // backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
                        backgroundColor: theme.palette.customColors.disabledBg,
                    },
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    // '&.Mui-disabled': {
                    //     backgroundColor: `rgba(${theme.palette.customColors.main}, 0.05)`,
                    //     '&:before': {
                    //         borderBottomStyle: 'solid'
                    //     }
                    // }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.error.main
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&.Mui-disabled': {
                        backgroundColor: theme.palette.customColors.disabledBg,
                    },
                }
            }
        }
    }
}

export default input
