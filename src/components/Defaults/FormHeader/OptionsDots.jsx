import { IconButton, Menu, MenuItem } from '@mui/material'
import Icon from 'src/@core/components/icon'
import LayoutReport from 'src/components/Reports/Layout'

const OptionsDots = ({ anchorEl, open, handleClose, handleClick, dataReports }) => {
    return (
        <div className='relative'>
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
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        }
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {dataReports.map(item => (
                    <MenuItem
                        key={item.id}
                        onClick={() => {
                            handleClose()
                        }}
                        style={{ textAlign: 'left' }}
                    >
                        <span>{item.identification}</span>
                        <span style={{ padding: '0 5px' }}>-</span>
                        <LayoutReport title={item.name} content={item.component} />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default OptionsDots
