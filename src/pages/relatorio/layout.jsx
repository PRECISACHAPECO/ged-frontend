import BlankLayout from 'src/@core/layouts/BlankLayout'
import { Document, PDFViewer, Page, Text } from '@react-pdf/renderer'
import Fornecedor from '../formularios/fornecedor'

const InvoicePrint = () => {
    return <Fornecedor />
}

InvoicePrint.getLayout = () => {
    return (
        <BlankLayout>
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <Fornecedor />
            </PDFViewer>
        </BlankLayout>
    )
}

InvoicePrint.setConfig = () => {
    return {
        mode: 'light'
    }
}

export default InvoicePrint
