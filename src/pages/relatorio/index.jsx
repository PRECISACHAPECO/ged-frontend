import { Document, PDFViewer, Page, Text } from '@react-pdf/renderer'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import ButtonsReport from 'src/components/Defaults/Reports/ButtonsReport'
import LayoutReport from 'src/components/Defaults/Reports/LayoutReport'

const MyDocument = () => {
    const reportJSON = localStorage.getItem('report')
    const report = JSON.parse(reportJSON)
    console.log('🚀 ~ report:', report)
    return <Text>React-pdf</Text>
}

const InvoicePrint = () => {
    return (
        <BlankLayout>
            <>
                <ButtonsReport />
                <LayoutReport>
                    <MyDocument />
                </LayoutReport>
            </>
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
