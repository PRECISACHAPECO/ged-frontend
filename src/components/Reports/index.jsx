import { PDFDownloadLink, Document, Page, usePDF, BlobProvider } from '@react-pdf/renderer'

const MyDoc = () => (
    <Document>
        <Page> My document data</Page>
    </Document>
)

const GenerateReport = () => (
    <div>
        <PDFDownloadLink document={<MyDoc />} fileName='somename.pdf'>
            {({ blob, url, loading, error }) => {
                if (loading) {
                    return 'Loading document...'
                }

                // Para abrir o PDF em uma nova guia, adicione o atributo `target="_blank"` ao link.
                return (
                    <a href={url} target='_blank'>
                        Download now!
                    </a>
                )
            }}
        </PDFDownloadLink>
    </div>
)

export default GenerateReport
