import { Card, CardContent, Grid, Typography } from '@mui/material'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import DateField from 'src/components/Form/DateField'
import useDateFormat from 'src/hooks/useDateFormat'
import RadioGroup from '@mui/material/RadioGroup'

const FieldsFabricaConclusion = ({ register, control, setValue }) => {
    const { setDateFormat, dateStatus } = useDateFormat()

    const optionsConclusion = [
        {
            id: 1,
            nome: 'Conforme'
        },
        {
            id: 2,
            nome: 'Não Conforme'
        }
    ]

    return (
        <Card>
            <CardContent>
                <Grid container spacing={4}>
                    <Input
                        xs={12}
                        md={12}
                        multiline
                        rows={4}
                        title='Conclusão'
                        name={`naoConformidade.conclusao`}
                        control={control}
                        errors={null}
                    />

                    {/* Avaliação final */}
                    <Grid item xs={12} md={12}>
                        <RadioGroup
                            row
                            name={`naoConformidade.avaliacao`}
                            defaultValue={null}
                            onChange={null}
                            sx={{ mt: 0 }}
                        >
                            <div className='flex items-center gap-4'>
                                <Typography variant='subtitle2' sx={{ pb: 0 }}>
                                    Avaliação Final:
                                </Typography>
                                {optionsConclusion &&
                                    optionsConclusion.map((item, indexCol) => (
                                        <FormControlLabel
                                            key={indexCol}
                                            value={item.id}
                                            label={item.nome}
                                            control={<Radio disabled={false} error={false} sx={{ pr: 2 }} />}
                                            fullWidth
                                            sx={{
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize: '0.8rem',
                                                    color: 'text.secondary'
                                                },
                                                '&:hover': {
                                                    '& .MuiFormControlLabel-label': {
                                                        color: 'primary.main'
                                                    }
                                                }
                                            }}
                                        />
                                    ))}
                            </div>
                        </RadioGroup>
                    </Grid>

                    <DateField
                        xs={12}
                        md={3}
                        title='Data'
                        name={`naoConformidade.dataConclusao`}
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
                        name={`naoConformidade.horaConclusao`}
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
                        name={`naoConformidade.profissionalConclusao`}
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

export default FieldsFabricaConclusion