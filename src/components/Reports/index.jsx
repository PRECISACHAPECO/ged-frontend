import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'

const GenerateReport = ({ title, component }) => {
    return (
        <div>
            <PDFDownloadLink document={component} fileName={title}>
                {({ blob, url, loading, error }) => (
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        {/* <a href='/relatorio' target='_blank' rel='noopener noreferrer'> */}
                        {title}
                    </a>
                )}
            </PDFDownloadLink>
        </div>
    )
}

export default GenerateReport
