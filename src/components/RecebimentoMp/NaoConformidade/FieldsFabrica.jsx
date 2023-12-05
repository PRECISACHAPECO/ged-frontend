import { Button, ButtonGroup, Card, CardContent, Grid } from '@mui/material'
import CheckLabel from 'src/components/Form/CheckLabel'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import DateField from 'src/components/Form/DateField'
import useDateFormat from 'src/hooks/useDateFormat'
import Icon from 'src/@core/components/icon'
import { useState } from 'react'

const FieldsFabrica = ({ register, control, setValue }) => {
    const { setDateFormat, dateStatus } = useDateFormat()
    const [ncType, setNcType] = useState(1)

    return (
        <Card>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <CheckLabel
                    xs={12}
                    md={4}
                    onClick={null}
                    title='Fornecedor preenche?'
                    name='naoConformidade.fornecedorPreenche'
                    value={false}
                    register={register}
                    helpText='Se marcado, o fornecedor deve preencher o plano de ação com seu acesso ao sistema.'
                />

                <Grid container spacing={4}>
                    <DateField
                        xs={12}
                        md={3}
                        title='Data'
                        name={`naoConformidade.data`}
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
                        name={`naoConformidade.hora`}
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
                        name={`naoConformidade.profissional`}
                        type='string'
                        options={[]}
                        required
                        register={register}
                        setValue={setValue}
                        control={control}
                        errors={null}
                    />

                    <Grid item xs={12} md={3}>
                        <ButtonGroup color='primary' fullWidth className='mt-1'>
                            <Button onClick={() => setNcType(1)} variant={ncType === 1 ? 'contained' : 'outlined'}>
                                <div className='flex items-center gap-2 px-1'>
                                    <Icon icon='ph:plant' />
                                    <p className='capitalize'>Produto</p>
                                </div>
                            </Button>
                            <Button onClick={() => setNcType(2)} variant={ncType === 2 ? 'contained' : 'outlined'}>
                                <div className='flex items-center gap-2 py-[2px] px-1'>
                                    <Icon icon='mdi:truck-fast-outline' />
                                    <p className='capitalize'>Transporte</p>
                                </div>
                            </Button>
                        </ButtonGroup>
                    </Grid>

                    {/* Se marcado produto */}
                    <Select
                        xs={12}
                        md={9}
                        title='Produto'
                        name={`naoConformidade.produto`}
                        type='string'
                        options={[]}
                        required
                        register={register}
                        setValue={setValue}
                        control={control}
                        errors={null}
                    />

                    <Input
                        xs={12}
                        md={12}
                        multiline
                        rows={4}
                        title='Descrição da não conformidade'
                        name={`naoConformidade.descricao`}
                        control={control}
                        errors={null}
                    />

                    <Input
                        xs={12}
                        md={12}
                        multiline
                        rows={4}
                        title='Ações solicitadas'
                        name={`naoConformidade.acoesSolicitadas`}
                        control={control}
                        errors={null}
                    />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default FieldsFabrica
