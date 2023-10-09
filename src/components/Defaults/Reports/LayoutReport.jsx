import React from 'react'
import HeaderReport from './HeaderReport'
import { Document, PDFViewer, Page } from '@react-pdf/renderer'

const LayoutReport = ({ children }) => {
    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                <Page>
                    {/* header */}
                    <HeaderReport />
                    {children}
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default LayoutReport
