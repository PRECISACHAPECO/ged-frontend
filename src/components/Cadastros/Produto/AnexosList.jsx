import React from 'react'
import Input from 'src/components/Form/Input'
import Check from 'src/components/Form/Check'
import Remove from 'src/components/Form/Remove'

const AnexosList = ({ anexos, removeAnexo, control, register, errors, type }) => {
    return (
        anexos &&
        anexos.map((item, index) => (
            <>
                <Input
                    md={9}
                    title='Nome'
                    name={`anexos[${index}].nome`}
                    required
                    control={control}
                    errors={errors?.anexos?.[index]?.nome}
                />
                <Check
                    xs={1}
                    md={1}
                    title='Obrigatório'
                    name={`anexos[${index}].obrigatorio`}
                    value={item.obrigatorio == 1 ? true : false}
                    typePage={type}
                    register={register}
                />
                <Check
                    xs={1}
                    md={1}
                    title='Ativo'
                    name={`anexos[${index}].status`}
                    value={item.obrigatorio == 1 ? true : false}
                    typePage={type}
                    register={register}
                />
                <Remove
                    xs={4}
                    md={1}
                    title='Remover'
                    index={index}
                    removeItem={removeAnexo}
                    item={item}
                    pending={item.hasPending}
                    textSuccess='Remover este item'
                    textError='Este item não pode mais ser removido pois possui anexo vinculado a ele'
                />
                <Input
                    xs={11}
                    md={12}
                    multiline
                    items={4}
                    title='Descrição (opcional)'
                    name={`anexos[${index}].descricao`}
                    control={control}
                    errors={errors?.anexos?.[index]?.descricao}
                />
            </>
        ))
    )
}

export default AnexosList
