import Input from 'src/components/Form/Input'
import CheckLabel from 'src/components/Form/CheckLabel'
import DateField from 'src/components/Form/DateField'
import Select from 'src/components/Form/Select'

const FieldsProdutos = ({ value, index, apresentacoes, setValue, register, control, errors }) => {
    console.log('🚀 ~ value:', value)
    return (
        <>
            {/* Quantidade */}
            <Input
                xs={12}
                md={2}
                title='Quantidade'
                name={`produtos[${index}].quantidade`}
                register={register}
                control={control}
                required
                errors={errors?.produtos?.[index]?.quantidade}
            />

            {/* Data de fabricação */}
            <DateField
                xs={12}
                md={2}
                required
                title='Data da fabricação'
                value={value.dataFabricacao}
                name={`produtos[${index}].dataFabricacao`}
                control={control}
                errors={errors?.produtos?.[index]?.dataFabricacao}
            />

            {/* Nº Lote */}
            <Input
                xs={12}
                md={2}
                title='Nº Lote'
                name={`produtos[${index}].lote`}
                required
                register={register}
                control={control}
                errors={errors?.produtos?.[index]?.lote}
            />

            {/* Apresentação */}
            <Select
                xs={12}
                md={2}
                title='Apresentação'
                name={`produtos[${index}].apresentacao`}
                type='string'
                options={apresentacoes ?? []}
                required
                register={register}
                setValue={setValue}
                control={control}
                errors={errors?.produtos?.[index]?.apresentacao}
            />

            {/* NF */}
            <Input
                xs={12}
                md={2}
                title='NF'
                name={`produtos[${index}].nf`}
                required
                register={register}
                control={control}
                errors={errors?.produtos?.[index]?.nf}
            />

            {/* Data de validade */}
            <DateField
                xs={12}
                md={2}
                required
                title='Data de validade'
                value={value.dataValidade}
                name={`produtos[${index}].dataValidade`}
                control={control}
                errors={errors?.produtos?.[index]?.dataValidade}
            />
        </>
    )
}

export default FieldsProdutos
