import { Autocomplete, Card, CardContent, FormControl, Grid, TextField, Typography } from '@mui/material'
import Item from 'src/components/Defaults/Formularios/Item'

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
                        {values.itens &&
                            values.itens.map((item, indexItem) => (
                                <Item
                                    key={indexItem}
                                    blockIndex={index}
                                    index={indexItem}
                                    setBlocos={setBlocos}
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
