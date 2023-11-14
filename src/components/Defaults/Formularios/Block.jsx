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
    changeAllOptions,
    setItemResposta,
    handleFileSelect,
    handleRemoveAnexoItem,
    register,
    control,
    setValue,
    errors,
    disabled
}) => {
    const [totalColumns, setTotalColumns] = useState(0)
    const [newValues, setNewValues] = useState([])

    const updateResponse = ({ e, values, blockIndex, index }) => {
        setValue(
            `blocos[${blockIndex}].itens[${index}].resposta`,
            values.alternativas.find(item => item.id == e.target.value)
        )
        setItemResposta({
            // parFornecedorModeloBlocoID: values.parFornecedorModeloBlocoID ?? 0,
            // parRecebimentoMpModeloBlocoID: values.parRecebimentoMpModeloBlocoID ?? 0,
            itemID: values.itemID,
            alternativa: values.alternativas.find(item => item.id == e.target.value)
        })
    }

    const getTotalColumns = () => {
        let total = 0
        values &&
            values.itens &&
            values.itens.map(item => {
                if (item.alternativas.length > total) total = item.alternativas.length
            })
        setTotalColumns(total)
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
                        {values &&
                            values.itens &&
                            values.itens.map((item, indexItem) => (
                                <Item
                                    key={indexItem}
                                    blockIndex={index}
                                    blockKey={blockKey}
                                    index={indexItem}
                                    setBlocos={setBlocos}
                                    totalColumns={totalColumns}
                                    updateResponse={updateResponse}
                                    changeAllOptions={changeAllOptions}
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
