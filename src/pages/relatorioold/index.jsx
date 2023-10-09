import BlankLayout from 'src/@core/layouts/BlankLayout'
import PageReport from 'src/components/Defaults/Reports/PageReport'
import Fornecedor from '../../components/Reports/Formularios/Fornecedor'

const InvoicePrint = () => {
    const reportParameters = JSON.parse(localStorage.getItem('reportParameters'))

    return <Fornecedor />
}

InvoicePrint.getLayout = page => (
    <BlankLayout>
        <PageReport>{page}</PageReport>
    </BlankLayout>
)

InvoicePrint.setConfig = () => {
    return {
        mode: 'light'
    }
}

export default InvoicePrint
