import React, { useContext, useEffect } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LayoutReport from 'src/components/Reports/Layout'
import ButtonsFloating from 'src/components/Reports/Layout/ButtonsFloating'
import ComponentError from '../../components/Reports/Layout/ComponentError'
import ReportComponents from 'src/components/Reports/Layout/reportComponents'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material'

const PageReport = () => {
    const reportJSON = localStorage.getItem('report')
    const report = JSON.parse(reportJSON)
    const nameComponent = report?.nameComponent
    const reportComponents = ReportComponents()
    const DynamicComponent = reportComponents[nameComponent]
    const [params, setParams] = React.useState({})

    const router = useRouter()
    useEffect(() => {
        setParams(router.query)
    }, [router.query])

    return (
        <BlankLayout>
            {DynamicComponent ? (
                <>
                    <ButtonsFloating nameComponent={nameComponent} />
                    <LayoutReport params={router?.query}>
                        <DynamicComponent params={router?.query} />
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
    const { palette } = useTheme()
    return {
        mode: palette.mode
    }
}

export default PageReport
