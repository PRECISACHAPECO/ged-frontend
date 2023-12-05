import { Card, CardContent, Grid } from '@mui/material'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import DateField from 'src/components/Form/DateField'
import useDateFormat from 'src/hooks/useDateFormat'
import CustomChip from 'src/@core/components/mui/chip'

const FieldsFornecedor = ({ register, control, setValue }) => {
    const { setDateFormat, dateStatus } = useDateFormat()

    return (
        <Card>
            <CardContent>
                <CustomChip size='small' skin='light' color={'primary'} label='Fornecedor preenche' sx={{ mb: 6 }} />

                <Grid container spacing={4}>
                    <Input
                        xs={12}
                        md={12}
                        multiline
                        rows={4}
                        title='Observações do Fornecedor'
                        name={`naoConformidade.obsFornecedor`}
                        control={control}
                        errors={null}
                    />

                    <DateField
                        xs={12}
                        md={3}
                        title='Data'
                        name={`naoConformidade.dataFornecedor`}
                        type='date'
                        required
                        value={null}
                        register={register}
                        control={control}
                        setDateFormat={setDateFormat}
                        typeValidation='dataPassado'
                        daysValidation={999999999999}
                        dateStatus={dateStatus}
                        errors={null}
                    />

                    <Input
                        xs={12}
                        md={3}
                        title='Hora'
                        name={`naoConformidade.horaFornecedor`}
                        type='time'
                        required
                        register={register}
                        control={control}
                        errors={null}
                    />

                    <Select
                        xs={12}
                        md={6}
                        title='Profissional preenchimento'
                        name={`naoConformidade.profissionalFornecedor`}
                        type='string'
                        options={[]}
                        required
                        register={register}
                        setValue={setValue}
                        control={control}
                        errors={null}
                    />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default FieldsFornecedor
