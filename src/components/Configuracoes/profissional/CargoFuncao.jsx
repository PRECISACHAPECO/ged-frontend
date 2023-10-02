import React from 'react'
import DateField from 'src/components/Form/DateField'
import Input from 'src/components/Form/Input'
import Remove from 'src/components/Form/Remove'

const CargoFuncao = ({ data, getValues, control, name, errors, removeItem }) => {
    return getValues('cargosFuncoes').map((item, index) => {
        return (
            <>
                <DateField
                    xs={12}
                    md={2}
                    title='Data'
                    value={item.data}
                    name={`cargosFuncoes[${index}].data`}
                    control={control}
                    errors={errors?.cargosFuncoes?.[index].data}
                />
                <Input
                    xs={12}
                    md={4}
                    title='Formação / Cargo'
                    name={`cargosFuncoes.[${index}].formacaoCargo`}
                    control={control}
                    errors={errors?.cargosFuncoes?.[index].formacaoCargo}
                />
                <Input
                    xs={12}
                    md={3}
                    title='Conselho'
                    name={`cargosFuncoes.[${index}].conselho`}
                    control={control}
                    errors={errors?.cargosFuncoes?.[index].conselho}
                />
                <DateField
                    xs={12}
                    md={2}
                    title='Data Inativação'
                    value={item.dataInativacao}
                    name={`cargosFuncoes[${index}].dataInativacao`}
                    control={control}
                    errors={errors?.cargosFuncoes?.[index].dataInativacao}
                />
                <Remove
                    xs={4}
                    md={1}
                    title='Remover'
                    index={index}
                    removeItem={removeItem}
                    item={item}
                    // pending={item.hasPending}
                    textSuccess='Remover este item'
                    textError='Este item não pode mais ser removido pois possui anexo vinculado a ele'
                />
            </>
        )
    })
}

export default CargoFuncao
