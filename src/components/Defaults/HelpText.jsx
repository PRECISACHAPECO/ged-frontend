import { Tooltip } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { makeStyles } from '@material-ui/core/styles'

const HelpText = ({ text, position }) => {
    const useStyles = makeStyles(theme => ({
        customTooltip: {
            backgroundColor: '#666CFF', // Cor de fundo do Tooltip
            '& .MuiTooltip-arrow': {
                color: '#666CFF' // Cor da seta do Tooltip
            }
        }
    }))

    const classes = useStyles()
    return (
        <Tooltip title={text} placement={position ?? 'top'} arrow classes={{ tooltip: classes.customTooltip }}>
            <p>
                <Icon icon='clarity:help-solid' className='text-[#666CFF] cursor-pointer text-base' />
            </p>
        </Tooltip>
    )
}

export default HelpText
