import { BlobProvider } from '@react-pdf/renderer'
import useMediaQuery from '@mui/material/useMediaQuery'

const GenerateReport = ({ title, component }) => {
    const matches = useMediaQuery('(min-width:640px)')

    return (
        <BlobProvider document={component}>
            {({ blob, url, loading, error }) => (
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    {!matches ? '' : title ?? 'Imprimir'}
                </a>
            )}
        </BlobProvider>
    )
}

export default GenerateReport
