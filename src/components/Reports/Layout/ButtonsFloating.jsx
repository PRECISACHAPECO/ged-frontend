import React from 'react'
import Fab from '@mui/material/Fab'
import Icon from 'src/@core/components/icon'
import { PDFDownloadLink, PDFViewer, Text } from '@react-pdf/renderer'
import { useState } from 'react'

// Componentes dos relatórios
// import Fornecedor from '../../Reports/Formularios/Fornecedor''

const MyDocument = () => (
    <PDFViewer width='100%' height='600'>
        <Text>Hellloo</Text>
    </PDFViewer>
)

const ButtonsFloating = () => {
    const signature = () => {
        console.log('Assinatura eletronica')
    }

    const closePage = () => {
        window.close()
    }

    const savePdf = () => {
        return (
            <PDFDownloadLink document={<MyDocument />} fileName='somename.pdf'>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        )
    }

    const dataButtons = [
        {
            id: 2,
            title: 'Assinar digitalmente',
            color: 'primary',
            size: 'large',
            variant: 'outlined',
            icon: 'fluent:signature-24-filled',
            function: signature
        },
        {
            id: 3,
            title: 'Salvar PDF',
            color: 'primary',
            size: 'large',
            variant: 'outlined',
            icon: 'basil:download-solid',
            function: savePdf
        },
        {
            id: 4,
            title: 'Fechar',
            color: 'primary',
            size: 'large',
            variant: 'outlined',
            icon: 'ooui:close',
            function: closePage
        }
    ]

    return (
        <div className='fixed bottom-10 right-8 flex flex-col-reverse gap-2 no-print '>
            {dataButtons &&
                dataButtons.map(item => (
                    <div key={item.id} style={{ textAlign: 'center' }} onClick={item.function}>
                        <Fab color={item.color} size={item.size} variant={item.variant}>
                            <Icon icon={item.icon} />
                        </Fab>
                    </div>
                ))}
        </div>
    )
}

export default ButtonsFloating
