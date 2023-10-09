import { Text, View, Image } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import { api } from 'src/configs/api'
import Router from 'next/router'

const styles = {
    header: {
        position: 'fixed',
        top: -5,
        left: 0,
        right: 0,
        margin: '0 auto',
        fontSize: 12,
        height: 50,
        width: '92%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center'
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    image: {
        aspectRatio: 1,
        objectFit: 'contain',
        height: '100%',
        marginLeft: 'auto'
    }
}

const Header = () => {
    const route = Router.pathname.split('/')[2]
    const [data, setData] = useState([])

    const reportJSON = localStorage.getItem('report')
    const report = JSON.parse(reportJSON)

    const fetchData = async () => {
        const data = {
            ...report,
            isFornecedor: route === 'fornecedor' ? true : false
        }

        try {
            const response = await api.post('relatorio/header', data)
            setData(response.data)
        } catch (error) {
            console.error('Erro ao buscar os dados do cabeçalho:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <View style={styles.header}>
            {/* Vazio... */}
            <View style={{ width: '100%' }}>
                <Text></Text>
            </View>
            {/* Descrição */}
            <View style={{ width: '100%' }}>
                <Text style={[styles.title, styles.content]}>
                    {data?.unidade?.tituloRelatorio ?? 'Cabeçalho não definido'}
                </Text>
            </View>
            {/* Imagem */}
            <View style={styles.imageContainer}>
                {data?.unidade?.url ? <Image src={data?.unidade?.url} style={styles.image} /> : ''}
            </View>
        </View>
    )
}

export default Header
