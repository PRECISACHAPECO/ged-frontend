import { BlobProvider } from '@react-pdf/renderer'

const GenerateReport = ({ title, component }) => {
    return (
        <BlobProvider document={component}>
            {({ blob, url, loading, error }) => (
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    {title ?? 'Imprimir'}
                </a>
            )}
        </BlobProvider>
    )
}

export default GenerateReport
