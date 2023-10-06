import { PDFDownloadLink } from '@react-pdf/renderer'

const GenerateReport = ({ title, component }) => (
    <div>
        <PDFDownloadLink document={component} fileName='somenaaaaaaame.pdf'>
            {({ blob, url, loading, error }) => (
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    {loading ? 'Loading document...' : 'Download now!'}
                </a>
            )}
        </PDFDownloadLink>
    </div>
)

export default GenerateReport
