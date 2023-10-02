import { Box, Grid } from '@mui/material'
import Input from 'src/components/Form/Input'
import CheckLabel from 'src/components/Form/CheckLabel'

const ListOptionsAnexo = ({ data, index, indexAnexo, control, register, errors }) => {
    return (
        <>
            <Input
                xs={12}
                md={10}
                title='Nome'
                name={`fields.opcoes[${index}].anexos[${indexAnexo}].nome`}
                required
                control={control}
                errors={errors?.fields?.opcoes?.[index]?.anexos?.[indexAnexo]?.nome}
            />
            <CheckLabel
                xs={12}
                md={2}
                title='Obrigatório'
                name={`fields.opcoes[${index}].anexos[${indexAnexo}].obrigatorio`}
                value={data.obrigatorio}
                register={register}
            />
        </>
    )
}

export default ListOptionsAnexo
