import { Document, PDFViewer, Page, Text } from '@react-pdf/renderer'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import PageReport from 'src/components/Defaults/Reports/PageReport'

const MyDocument = () => {
    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                <Page>
                    <Text>React-pdf</Text>
                </Page>
            </Document>
        </PDFViewer>
    )
}

const InvoicePrint = () => {
    return (
        <BlankLayout>
            <PageReport>
                <MyDocument />
            </PageReport>
        </BlankLayout>
    )
}

InvoicePrint.getLayout = page => <BlankLayout>{page}</BlankLayout>

InvoicePrint.setConfig = () => {
    return {
        mode: 'light'
    }
}

export default InvoicePrint
