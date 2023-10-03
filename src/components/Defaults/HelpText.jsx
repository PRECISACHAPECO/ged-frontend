import { Tooltip } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { makeStyles } from '@material-ui/core/styles'

const HelpText = ({ text, position }) => {
    return (
        <Tooltip title={text} placement={position ?? 'top'} arrow>
            <p>
                <Icon icon='clarity:help-solid' className='cursor-pointer text-base' />
            </p>
        </Tooltip>
    )
}

export default HelpText
