import { Autocomplete, Box, Button, Card, CardContent, FormControl, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from 'src/components/Defaults/Formularios/Item'
import CheckLabel from 'src/components/Form/CheckLabel'
import RadioLabel from 'src/components/Form/RadioLabel'

const Block = ({
    index,
    setBlocos,
    values,
    blockKey,
    setItemResposta,
    handleFileSelect,
    handleRemoveAnexoItem,
    register,
    control,
    setValue,
    errors,
    disabled
}) => {
    console.log('🚀 ~ values:', values)
    const [totalColumns, setTotalColumns] = useState(0)
    const [newValues, setNewValues] = useState([])
    console.log('🚀 ~ totalColumns:', totalColumns)
    console.log('🚀 ~ newValues:', newValues)

    const updateResponse = ({ e, values, blockIndex, index }) => {
        console.log('🚀 ~ e.target.value:', e.target.value, blockIndex, index, values)

        setValue(
            `blocos[${blockIndex}].itens[${index}].resposta`,
            values.alternativas.find(item => item.id == e.target.value)
        )
        setItemResposta({
            parFornecedorModeloBlocoID: values.parFornecedorModeloBlocoID ?? 0,
            parRecebimentoMpModeloBlocoID: values.parRecebimentoMpModeloBlocoID ?? 0,
            itemID: values.itemID,
            alternativa: values.alternativas.find(item => item.id == e.target.value)
        })
    }

    const handleChangeOptions = colIndex => {
        console.log('🚀 ~ colIndex:', colIndex)
        // const
    }

    const getTotalColumns = () => {
        let total = 0
        values &&
            values.itens &&
            values.itens.map(item => {
                if (item.alternativas.length > total) total = item.alternativas.length
            })
        setTotalColumns(total)
        insertFirstBlankItem(total)
    }

    //? Insere um item vazio na 1ª posição do array de itens, pra crie a coluna de marcar todos
    const insertFirstBlankItem = total => {
        const tempValues = [...values.itens]
        tempValues.unshift({
            // alternativas: array com o total de colunas em totalColumns
            alternativas: [...Array(total)].map(() => ({
                id: null,
                nome: 'Marcar todos'
            }))
        })
        setNewValues(tempValues)
    }

    useEffect(() => {
        getTotalColumns()
    }, [])

    return (
        <>
            <Card key={index} sx={{ mt: 4 }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Typography color='primary' variant='subtitle1' sx={{ fontWeight: 700, mb: 6 }}>
                                {values?.nome}
                            </Typography>
                        </Grid>

                        {/* Itens */}
                        {newValues &&
                            newValues.map((item, indexItem) => (
                                <Item
                                    key={indexItem}
                                    blockIndex={index}
                                    blockKey={blockKey}
                                    index={indexItem}
                                    setBlocos={setBlocos}
                                    updateResponse={updateResponse}
                                    onClick={handleChangeOptions}
                                    handleFileSelect={handleFileSelect}
                                    setItemResposta={setItemResposta}
                                    handleRemoveAnexoItem={handleRemoveAnexoItem}
                                    values={item}
                                    control={control}
                                    register={register}
                                    setValue={setValue}
                                    errors={errors}
                                    disabled={disabled}
                                />
                            ))}
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Block
