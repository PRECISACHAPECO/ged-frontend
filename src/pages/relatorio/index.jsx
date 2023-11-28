import React from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LayoutReport from 'src/components/Reports/Layout'
import ButtonsFloating from 'src/components/Reports/Layout/ButtonsFloating'
import ComponentError from './ComponentError'

// Componentes dos relatórios
import DadosFornecedor from '../../components/Reports/Formularios/Fornecedor/DadosFornecedor'
import DadosRecebimentoMp from '../../components/Reports/Formularios/RecebimentoMP/DadosRecebimentoMp'

const PageReport = () => {
    const reportJSON = localStorage.getItem('report')
    const report = JSON.parse(reportJSON)
    console.log('🚀 ~ report:', report)
    const nameComponent = report?.nameComponent
    console.log('🚀 ~ nameComponent:', nameComponent)

    const componentMap = {
        DadosFornecedor: DadosFornecedor,
        DadosRecebimentoMp: DadosRecebimentoMp
    }
    const DynamicComponent = componentMap[nameComponent]

    return (
        <BlankLayout>
            {DynamicComponent ? (
                <>
                    <ButtonsFloating />
                    <LayoutReport>
                        <DynamicComponent />
                    </LayoutReport>
                </>
            ) : (
                <ComponentError />
            )}
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
