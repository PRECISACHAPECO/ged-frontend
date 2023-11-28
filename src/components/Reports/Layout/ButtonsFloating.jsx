import React from 'react'
import Fab from '@mui/material/Fab'
import Icon from 'src/@core/components/icon'
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'

// reports defaults
import Footer from './Footer'
import Header from './Header'

// reports
import Fornecedor from '../Formularios/Fornecedor/DadosFornecedor'

const reportComponents = {
    Fornecedor: Fornecedor
    // Adicione outros componentes conforme necessário
}

const MyDoc = ({ nameComponent }) => {
    const ReportComponent = reportComponents[nameComponent]

    return (
        <Document>
            <Page
                size='A4'
                style={{
                    paddingHorizontal: 25
                }}
            >
                <Header />
                {ReportComponent && <ReportComponent />}
                <Footer />
            </Page>
        </Document>
    )
}

const ButtonsFloating = () => {
    const signature = () => {
        console.log('Assinatura eletronica')
    }

    const closePage = () => {
        window.close()
    }

    const dataButtons = [
        {
            id: 1,
            title: 'Fechar',
            color: 'primary',
            size: 'large',
            variant: 'outlined',
            icon: 'ooui:close',
            function: closePage
        },
        {
            id: 2,
            title: 'Assinar digitalmente',
            color: 'primary',
            size: 'large',
            variant: 'outlined',
            icon: 'fluent:signature-24-filled',
            function: signature
        }
    ]

    return (
        <div className='fixed bottom-10 right-8 flex flex-col gap-2'>
            {dataButtons &&
                dataButtons.map(item => (
                    <div key={item.id} style={{ textAlign: 'center' }} onClick={item.function}>
                        <Fab color={item.color} size={item.size} variant={item.variant}>
                            <Icon icon={item.icon} />
                        </Fab>
                    </div>
                ))}
            <div>
                <PDFDownloadLink document={<MyDoc nameComponent='Fornecedor' />} fileName='somename.pdf'>
                    {({ blob, url, loading, error }) => (
                        <div style={{ textAlign: 'center' }}>
                            <Fab color='primary' size='large' variant='outlined'>
                                <Icon icon='basil:download-solid' />
                            </Fab>
                        </div>
                    )}
                </PDFDownloadLink>
            </div>
        </div>
    )
}

export default ButtonsFloating
