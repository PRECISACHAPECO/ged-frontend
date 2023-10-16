import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import getData from './getData'
import { styles } from './styles'

const index = () => {
    const data = getData()
    return (
        data && (
            <>
                {/* Fields / Campos dinamicos  */}
                <View style={styles.containerFields}>
                    {data.fields?.map((field, index) => (
                        <Fragment key={index}>
                            <View style={[styles.fields, { width: '33%' }]}>
                                <Text style={styles.fieldTitle}>{field.title ?? 'NI'}</Text>
                                <Text style={styles.fieldValue}>{field.value ?? 'NI'}</Text>
                            </View>
                            {(index + 1) % 3 === 0 && <View style={styles.separator} />}
                        </Fragment>
                    ))}
                </View>
                <View style={styles.separator} />
                {/* Dados adicionais */}
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 7,
                        paddingVertical: 10,
                        paddingBottom: 10
                    }}
                >
                    <Text style={styles.fieldTitle}>
                        Atividades: <Text style={styles.fieldValue}>{data.atividades ?? 'NI'}</Text>
                    </Text>
                    <Text style={styles.fieldTitle}>
                        Sistema de qualidade: <Text style={styles.fieldValue}>{data.sistemaQualidade ?? 'NI'}</Text>
                    </Text>
                    <Text style={styles.fieldTitle}>
                        Categoria: <Text style={styles.fieldValue}>{data.categoria ?? 'NI'}</Text>
                    </Text>
                </View>
                <View style={styles.separator} />
                {/* Tabela contendo os itens por bloco */}
                {data.blocos?.map((block, index) => (
                    <View style={block} key={index}>
                        <Text style={[styles.blockTitle, { paddingTop: 20 }]}>{block.nome}</Text>
                        <View style={styles.table}>
                            <View style={styles.tableTitle}>
                                <Text style={[styles.tableTitlecolumn, { width: '60%' }]}>Item</Text>
                                <Text
                                    style={[
                                        styles.tableTitlecolumn,
                                        {
                                            width: '20%',
                                            borderLeft: '1px solid #ddd'
                                        }
                                    ]}
                                >
                                    Resposta
                                </Text>
                                <Text style={[styles.tableTitlecolumn, { width: '20%', borderLeft: '1px solid #ddd' }]}>
                                    Observação
                                </Text>
                            </View>
                            {block.itens.map((item, index) => (
                                <View style={styles.tableContainer}>
                                    <View style={[styles.tableContent, { width: '60%' }]}>
                                        <Text style={styles.tableContentcolumn}>{item.nome}</Text>
                                    </View>
                                    <View style={[styles.tableContent, { width: '20%' }]}>
                                        <Text style={styles.tableContentcolumn}>{item.resposta ?? '--'}</Text>
                                    </View>
                                    <View style={[styles.tableContent, { width: '20%' }]}>
                                        <Text style={styles.tableContentcolumn}>{item.obsResposta ?? '--'}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </>
        )
    )
}

export default index
