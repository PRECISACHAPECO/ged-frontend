import React, { useEffect, useState } from 'react'
import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import GenerateReport from 'src/components/Reports'
import { styles } from './Style'
import getHeader from './getHeader'

const Layout = ({ title, titleButton, unidadeID, content }) => {
    const data = getHeader(unidadeID)

    return (
        <>
            <GenerateReport
                // title={titleButton}
                title={title}
                component={
                    <Document>
                        <Page size='A4' style={styles.page}>
                            {/* Header */}
                            <View style={styles.header}>
                                {/* Vazio... */}
                                <View style={{ width: '100%' }}>
                                    <Text></Text>
                                </View>
                                {/* Descrição */}
                                <View style={{ width: '100%', textAlign: 'center' }}>
                                    <Text style={styles.title}>
                                        {data?.unidade?.tituloRelatorio ?? 'Cabeçalho não definido'}
                                    </Text>
                                </View>
                                {/* Imagem */}
                                <View style={{ width: '100%' }}>
                                    {data?.unidade?.url ? (
                                        <Image
                                            src={data?.unidade?.url}
                                            style={{
                                                aspectRatio: 1,
                                                objectFit: 'contain',
                                                height: '100%',
                                                marginLeft: 'auto' // Alinha a imagem à direita
                                            }}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </View>
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
