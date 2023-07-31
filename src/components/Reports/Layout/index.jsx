import React, { useEffect, useState } from 'react'
import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import GenerateReport from 'src/components/Reports'
import { styles } from './Style'
import getHeader from './getHeader'

const Layout = ({ title, titleButton, unidadeID, content }) => {
    const data = getHeader(unidadeID)
    console.log('data', data)
    return (
        <>
            <GenerateReport
                title={titleButton}
                component={
                    <Document>
                        <Page size='A4' style={styles.page}>
                            {/* Header */}
                            <View style={styles.header}>
                                <Text></Text>
                                <Text style={styles.title}>
                                    {data?.unidade?.tituloRelatorio ?? 'Cabeçalho não definido'}
                                </Text>
                                <Text>{data?.unidade?.url ? <Image src={data?.unidade?.url} /> : ''}</Text>
                            </View>

                            {/* Content */}
                            <View style={styles.content}>{content}</View>

                            {/* Footer */}
                            <View style={styles.footer} fixed>
                                <Text>
                                    Gerado em{' '}
                                    {new Date().toLocaleString('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </Text>

                                <Text render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} />
                            </View>
                        </Page>
                    </Document>
                }
            />
        </>
    )
}

export default Layout
