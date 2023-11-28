import React from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LayoutReport from 'src/components/Reports/Layout'
import ButtonsFloating from 'src/components/Reports/Layout/ButtonsFloating'
import { Page, Text, View } from '@react-pdf/renderer'

// Componentes dos relatórios
import DadosFornecedor from '../../components/Reports/Formularios/Fornecedor/DadosFornecedor'

const PageReport = () => {
    const reportJSON = localStorage.getItem('report')
    const report = JSON.parse(reportJSON)
    const nameComponent = report?.nameComponent

    const componentMap = {
        DadosFornecedor: DadosFornecedor,
        DadosFornecedores: DadosFornecedor
    }
    const DynamicComponent = componentMap[nameComponent]

    //! Erro ao gerar o relatório
    const ComponentError = () => {
        return (
            <Page size='A4'>
                <View>
                    <Text
                        style={{
                            color: 'red',
                            fontSize: 20,
                            padding: 10
                        }}
                    >
                        Erro ao carregar o relatório. Entre em contato com o suporte.
                    </Text>
                </View>
            </Page>
        )
    }

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
