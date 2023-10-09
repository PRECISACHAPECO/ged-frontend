import BlankLayout from 'src/@core/layouts/BlankLayout'
import LayoutReport from 'src/components/Reports/Layout'
import ButtonsFloating from 'src/components/Reports/Layout/ButtonsFloating'

// Componentes dos relatórios
import Fornecedor from '../../components/Reports/Formularios/Fornecedor'

const PageReport = () => {
    return (
        <BlankLayout>
            <>
                <ButtonsFloating />
                <LayoutReport>
                    <Fornecedor />
                </LayoutReport>
            </>
        </BlankLayout>
    )
}

PageReport.getLayout = page => <BlankLayout>{page}</BlankLayout>

PageReport.setConfig = () => {
    return {
        mode: 'light'
    }
}

export default PageReport
