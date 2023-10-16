import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext } from 'react'
import LayoutReport from 'src/components/Reports/Layout'

export default function MenuReports({ actionsData, open, anchorEl, handleClick, handleClose }) {
    return (
        <Menu
            id='fade-menu'
            MenuListProps={{
                'aria-labelledby': 'fade-button'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            {actionsData.map(item => (
                <MenuItem
                    key={item.id}
                    onClick={() => {
                        handleClose()
                    }}
                >
                    <span>{item.identification}</span>
                    <span style={{ padding: '0 5px' }}>-</span>
                    <LayoutReport title={item.name} content={item.component} />
                </MenuItem>
            ))}
        </Menu>
    )
}
