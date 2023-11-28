import React from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LayoutReport from 'src/components/Reports/Layout'
import ButtonsFloating from 'src/components/Reports/Layout/ButtonsFloating'

// Componentes dos relatórios
import Fornecedor from '../../components/Reports/Formularios/Fornecedor'

const PageReport = () => {
    const reportJSON = localStorage.getItem('report')
    const report = JSON.parse(reportJSON)
    const nameComponent = report?.nameComponent

    const componentMap = {
        Fornecedor: Fornecedor
    }

    const DynamicComponent = componentMap[nameComponent]

    return (
        <BlankLayout>
            <>
                <ButtonsFloating />
                <LayoutReport>{DynamicComponent && <DynamicComponent />}</LayoutReport>
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
