import React from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LayoutReport from 'src/components/Reports/Layout'
import ButtonsFloating from 'src/components/Reports/Layout/ButtonsFloating'
import ComponentError from '../../components/Reports/Layout/ComponentError'
import ReportComponents from 'src/components/Reports/Layout/reportComponents'

const PageReport = () => {
    const reportJSON = localStorage.getItem('report')
    const report = JSON.parse(reportJSON)
    const nameComponent = report?.nameComponent
    const reportComponents = ReportComponents()
    const DynamicComponent = reportComponents[nameComponent]

    return (
        <BlankLayout>
            {DynamicComponent ? (
                <>
                    <ButtonsFloating nameComponent={nameComponent} />
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
