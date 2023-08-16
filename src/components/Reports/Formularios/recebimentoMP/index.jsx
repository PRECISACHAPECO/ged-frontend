import { Fragment, useEffect } from 'react'
import { Text, View, Font } from '@react-pdf/renderer'
import { styles as stylesDefault } from '../../Layout/Style'
import getData from './getData'

const RecebimentoMP = ({ params }) => {
    const data = getData(params)
    console.log(' data recebimento', data)

    return (
        <>
            {data && (
                <>
                    {/* Fields / Campos dinamicos  */}
                    <View style={stylesDefault.containerFields}>
                        {data.fields?.map((field, index) => (
                            <Fragment key={index}>
                                <View style={[stylesDefault.fields, { width: '33%' }]}>
                                    <Text style={stylesDefault.fieldTitle}>{field.title ?? 'NI'}</Text>
                                    <Text style={stylesDefault.fieldValue}>{field.value ?? 'NI'}</Text>
                                </View>
                                {(index + 1) % 3 === 0 && <View style={stylesDefault.separator} />}
                            </Fragment>
                        ))}
                    </View>
                    <View style={stylesDefault.separator} />
                    {/* Tabela contendo os produtos */}
                    <Text style={[stylesDefault.blockTitle, { paddingTop: 20 }]}>Produtos</Text>
                    <View style={stylesDefault.table}>
                        <View style={stylesDefault.tableTitle}>
                            <Text style={[stylesDefault.tableTitlecolumn, { width: '60%' }]}>Produto</Text>
                            <Text
                                style={[
                                    stylesDefault.tableTitlecolumn,
                                    {
                                        width: '20%',
                                        borderLeft: '1px solid #ddd'
                                    }
                                ]}
                            >
                                Apresentação
                            </Text>
                            <Text
                                style={[stylesDefault.tableTitlecolumn, { width: '20%', borderLeft: '1px solid #ddd' }]}
                            >
                                Atividade
                            </Text>
                        </View>
                        {data.produtos?.map((product, index) => (
                            <View key={index}>
                                <View style={stylesDefault.tableContainer}>
                                    <View style={[stylesDefault.tableContent, { width: '60%' }]}>
                                        <Text style={stylesDefault.tableContentcolumn}>{product.produto}</Text>
                                    </View>
                                    <View style={[stylesDefault.tableContent, { width: '20%' }]}>
                                        <Text style={stylesDefault.tableContentcolumn}>
                                            {product.apresentacao ?? '--'}
                                        </Text>
                                    </View>
                                    <View style={[stylesDefault.tableContent, { width: '20%' }]}>
                                        <Text style={stylesDefault.tableContentcolumn}>
                                            {product.atividade ?? '--'}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={stylesDefault.separator} />
                    {/* Tabela contendo os itens por bloco */}
                    {data.blocos?.map((block, index) => (
                        <View style={block} key={index}>
                            <Text style={[stylesDefault.blockTitle, { paddingTop: 20 }]}>{block.nome}</Text>
                            <View style={stylesDefault.table}>
                                <View style={stylesDefault.tableTitle}>
                                    <Text style={[stylesDefault.tableTitlecolumn, { width: '60%' }]}>Item</Text>
                                    <Text
                                        style={[
                                            stylesDefault.tableTitlecolumn,
                                            {
                                                width: '20%',
                                                borderLeft: '1px solid #ddd'
                                            }
                                        ]}
                                    >
                                        Resposta
                                    </Text>
                                    <Text
                                        style={[
                                            stylesDefault.tableTitlecolumn,
                                            { width: '20%', borderLeft: '1px solid #ddd' }
                                        ]}
                                    >
                                        Observação
                                    </Text>
                                </View>
                                {block.itens.map((item, index) => (
                                    <View style={stylesDefault.tableContainer}>
                                        <View style={[stylesDefault.tableContent, { width: '60%' }]}>
                                            <Text style={stylesDefault.tableContentcolumn}>{item.nome}</Text>
                                        </View>
                                        <View style={[stylesDefault.tableContent, { width: '20%' }]}>
                                            <Text style={stylesDefault.tableContentcolumn}>
                                                {item.resposta ?? '--'}
                                            </Text>
                                        </View>
                                        <View style={[stylesDefault.tableContent, { width: '20%' }]}>
                                            <Text style={stylesDefault.tableContentcolumn}>
                                                {item.obsResposta ?? '--'}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </>
            )}
        </>
    )
}

export default RecebimentoMP
