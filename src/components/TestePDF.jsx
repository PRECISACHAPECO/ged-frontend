import React from 'react'

import { Fab } from '@mui/material'
import { Icon } from '@iconify/react'
import { Document, PDFDownloadLink, Page, Text } from '@react-pdf/renderer'
import { api } from 'src/configs/api'

const MyDoc = () => {
    return (
        <Document>
            <Page
                size='A4'
                style={{
                    paddingHorizontal: 25
                }}
            >
                <Text>Helllo</Text>
            </Page>
        </Document>
    )
}

const TestePDF = () => {
    console.log('entrou akiiii')
    const data = {
        id: 1,
        unidadeID: 1,
        usuarioID: 1
    }

    const sendPdfToServer = async blob => {
        const formData = new FormData()
        formData.append('files[]', blob, 'fornecedor.pdf')

        try {
            const response = await api.post(
                `/formularios/fornecedor/saveRelatorio/${data.id}/${data.usuarioID}/${data.unidadeID}`,

                formData
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PDFDownloadLink document={<MyDoc />} fileName='teste.pdf'>
            {({ blob, url, loading, error }) => (
                <div style={{ textAlign: 'center' }}>
                    <Fab color='primary' size='large' variant='outlined' onClick={() => sendPdfToServer(blob)}>
                        <Icon icon='basil:download-solid' />
                    </Fab>
                </div>
            )}
        </PDFDownloadLink>
    )
}

export default TestePDF
