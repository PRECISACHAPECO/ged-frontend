import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import React from 'react'
import Check from 'src/components/Form/Check'
import Input from 'src/components/Form/Input'
import Remove from 'src/components/Form/Remove'
import Select from 'src/components/Form/Select'

const Blocos = ({ blocks, errors, control, register, getValues, removeItem, addItem, setValue, options }) => {
    return (
        getValues('blocks') &&
        blocks &&
        getValues('blocks').map((block, index) => (
            <Card key={index} md={12} sx={{ mt: 4 }}>
                <CardContent>
                    <Typography variant='subtitle1' sx={{ fontWeight: 600, mb: 4 }}>
                        {`Bloco ${index + 1}`}
                    </Typography>
                    {/* Header */}
                    <input
                        type='hidden'
                        name={`blocks.[${index}].parRecebimentompBlocoID`}
                        defaultValue={block.dados.parRecebimentompBlocoID}
                        {...register(`blocks.[${index}].parRecebimentompBlocoID`)}
                    />

                    <Grid container spacing={4}>
                        <Input
                            className='order-1'
                            xs={10}
                            md={1}
                            title='Sequência'
                            name={`blocks.[${index}].dados.ordem`}
                            value={block.dados.ordem}
                            required={true}
                            control={control}
                            errors={errors?.blocks?.[index]?.dados?.ordem}
                        />

                        <Input
                            className='order-3 md:order-2'
                            xs={10}
                            md={9}
                            title='Nome do Bloco'
                            name={`blocks.[${index}].dados.nome`}
                            value={block.dados.nome}
                            required={true}
                            control={control}
                            errors={errors?.blocks?.[index]?.dados?.nome}
                        />

                        <Check
                            className='order-2 md:order-3'
                            xs={2}
                            md={1}
                            title='Ativo'
                            name={`blocks.[${index}].dados.status`}
                            value={blocks[index]?.dados.status}
                            register={register}
                        />

                        <Check
                            className='order-4'
                            xs={2}
                            md={1}
                            title='Observação'
                            name={`blocks.[${index}].dados.obs`}
                            value={blocks[index]?.dados.obs}
                            register={register}
                        />
                    </Grid>

                    {/* Itens */}
                    <Grid container spacing={4} sx={{ mt: 0 }}>
                        <Grid item xs={12} md={12}>
                            <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                                {`Itens`}
                            </Typography>
                        </Grid>
                        {getValues('blocks') &&
                            blocks &&
                            block.itens &&
                            block.itens.map((item, indexItem) => (
                                <>
                                    <input
                                        type='hidden'
                                        name={`blocks.[${index}].itens.[${indexItem}].parRecebimentompBlocoItemID`}
                                        defaultValue={item.parRecebimentompBlocoItemID}
                                        {...register(
                                            `blocks.[${index}].itens.[${indexItem}].parRecebimentompBlocoItemID`
                                        )}
                                    />

                                    <Input
                                        xs={12}
                                        md={1}
                                        title='Sequência'
                                        name={`blocks.[${index}].itens.[${indexItem}].ordem`}
                                        value={item.ordem}
                                        required={true}
                                        control={control}
                                        errors={errors?.blocks?.[index]?.itens?.[indexItem]?.ordem}
                                    />

                                    <Select
                                        xs={12}
                                        md={5}
                                        title={
                                            blocks[index]?.itens[indexItem]?.itemID
                                                ? `Item [${blocks[index].itens[indexItem].itemID}]`
                                                : 'Item'
                                        }
                                        name={`blocks.[${index}].itens.[${indexItem}].item`}
                                        value={blocks[index]?.itens[indexItem]?.item ?? null}
                                        required={true}
                                        disabled={item.hasPending == 1 ? true : false}
                                        options={options.itens}
                                        register={register}
                                        setValue={setValue}
                                        control={control}
                                        errors={errors?.blocks?.[index]?.itens?.[indexItem]?.item}
                                    />

                                    <Select
                                        xs={12}
                                        md={2}
                                        title='Alternativa'
                                        name={`blocks.[${index}].itens.[${indexItem}].alternativa`}
                                        value={blocks[index]?.itens[indexItem]?.alternativa ?? null}
                                        required={true}
                                        disabled={item.hasPending == 1 ? true : false}
                                        options={options.alternativas}
                                        register={register}
                                        setValue={setValue}
                                        control={control}
                                        errors={errors?.blocks?.[index]?.itens?.[indexItem]?.alternativa}
                                    />

                                    <Check
                                        xs={3}
                                        md={1}
                                        title='Ativo'
                                        index={indexItem}
                                        name={`blocks.[${index}].itens.[${indexItem}].status`}
                                        value={blocks[index]?.itens[indexItem]?.status}
                                        register={register}
                                    />

                                    <Check
                                        xs={3}
                                        md={1}
                                        title='Obs'
                                        index={indexItem}
                                        name={`blocks.[${index}].itens.[${indexItem}].obs`}
                                        value={blocks[index]?.itens[indexItem]?.obs}
                                        register={register}
                                    />

                                    <Check
                                        xs={3}
                                        md={1}
                                        title='Obrigatório'
                                        index={indexItem}
                                        name={`blocks.[${index}].itens.[${indexItem}].obrigatorio`}
                                        value={blocks[index]?.itens[indexItem]?.obrigatorio}
                                        register={register}
                                    />

                                    <Remove
                                        xs={3}
                                        md={1}
                                        title={indexItem == 0 ? 'Remover' : ''}
                                        index={index}
                                        removeItem={() => removeItem(item, index, indexItem)}
                                        item={item}
                                        pending={item.hasPending}
                                        textSuccess='Remover este item'
                                        textError='Este item não pode mais ser removido pois já foi respondido em um formulário'
                                    />
                                </>
                            ))}

                        {/* Botão inserir item */}
                        <Grid item xs={12} md={12}>
                            <Button
                                variant='outlined'
                                color='primary'
                                startIcon={<Icon icon='material-symbols:add-circle-outline-rounded' />}
                                onClick={() => {
                                    addItem(index)
                                }}
                            >
                                Inserir Item
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        ))
    )
}

export default Blocos
