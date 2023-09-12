import { IconButton, Menu, MenuItem, Box, Button } from '@mui/material'
import Icon from 'src/@core/components/icon'
import MenuReports from '../MenuReports'
import LayoutReport from 'src/components/Reports/Layout'

const OptionsDots = ({
    anchorEl,
    open,
    handleClose,
    handleClick,
    disabled,
    disabledPrint,
    btnPrint,
    dataReports,
    matches
}) => {
    return (
        <div>
            <IconButton
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Icon icon='tabler:dots' fontSize={20} />
            </IconButton>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                {/* Imprimir com 1 opção */}
                {btnPrint && dataReports.length === 1 && matches && (
                    <MenuItem onClick={handleClose}>
                        <div className='flex items-center gap-1'>
                            <Icon icon='material-symbols:print' />
                            <LayoutReport
                                titleButton={dataReports[0].titleButton}
                                title={dataReports[0].title}
                                content={dataReports[0].component}
                            />
                        </div>
                    </MenuItem>
                )}
                {/* Imprimir com +1 opção (dropdown) */}
                {btnPrint && dataReports.length > 1 && matches && (
                    <MenuItem onClick={handleClose}>
                        <Box>
                            <Button
                                id='fade-button'
                                onClick={handleClick}
                                color='primary'
                                disabled={disabled || disabledPrint}
                                variant='outlined'
                                size='medium'
                                type='button'
                                sx={{ display: 'flex', gap: 2 }}
                            >
                                <Icon icon='material-symbols:print' />
                                <span className='hidden sm:block'>Imprimir</span>
                            </Button>
                            <MenuReports
                                dataReports={dataReports}
                                handleClick={handleClick}
                                handleClose={handleClose}
                                open={open}
                                anchorEl={anchorEl}
                            />
                        </Box>
                    </MenuItem>
                )}
            </Menu>
        </div>
    )
}

export default OptionsDots
