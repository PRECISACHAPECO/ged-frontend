import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Loading = ({ show, title }) => {
    return (
        show && (
            <div className='absolute inset-0 flex items-center justify-center rounded-lg z-50'>
                <div className='flex flex-col justify-center items-center gap-2 '>
                    <CircularProgress color='primary' />
                    <p className='text-sm opacity-80'>{title ?? 'Carregando...'}</p>
                </div>
            </div>
        )
    )
}

export default Loading
