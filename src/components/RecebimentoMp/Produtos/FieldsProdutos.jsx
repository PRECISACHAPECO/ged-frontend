const FieldsProdutos = ({ index, apresentacoes, register, control, errors }) => {
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
                value={produto.dataFabricacao}
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
                value={produto.dataValidade}
                name={`produtos[${index}].dataValidade`}
                control={control}
                errors={errors?.produtos?.[index]?.dataValidade}
            />
        </>
    )
}

export default FieldsProdutos