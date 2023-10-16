import React from 'react'
import Header from './Header'
import { Document, PDFViewer, Page, View } from '@react-pdf/renderer'
import Footer from './Footer'

const LayoutReport = ({ children }) => {
    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                <Page
                    size='A4'
                    style={{
                        paddingHorizontal: 25
                    }}
                >
                    <Header />
                    {children}
                    <Footer />
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default LayoutReport
