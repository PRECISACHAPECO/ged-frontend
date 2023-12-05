import { Button, ButtonGroup, Card, CardContent, Grid, Typography } from '@mui/material'
import CheckLabel from 'src/components/Form/CheckLabel'
import RadioLabel from 'src/components/Form/RadioLabel'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import DateField from 'src/components/Form/DateField'
import useDateFormat from 'src/hooks/useDateFormat'
import Icon from 'src/@core/components/icon'
import RadioGroup from '@mui/material/RadioGroup'
import CustomChip from 'src/@core/components/mui/chip'
import { useState } from 'react'
import FieldsFabrica from './FieldsFabrica'
import FieldsFornecedor from './FieldsFornecedor'
import FieldsFabricaConclusion from './FieldsFabricaConclusion'

const RecebimentoMpNaoConformidade = ({ recebimentoMpID, register, control, setValue }) => {
    console.log('🚀 ~  RecebimentoMpNaoConformidade recebimentoMpID:', recebimentoMpID)
    const { setDateFormat, dateStatus } = useDateFormat()

    return (
        <>
            <div className='flex flex-col gap-2'>
                <Typography color='error' variant='subtitle1' sx={{ fontWeight: 700 }}>
                    <div className='flex items-center gap-1'>
                        <Icon icon='typcn:warning' color='#FF4D49' />
                        Plano de Ação
                    </div>
                </Typography>

                <Card>
                    <CardContent>
                        <Typography variant='subtitle1'>
                            Deve ser preenchido pelos colaboradores responsáveis pelas ações de monitoramento e/ou
                            verificação e/ou responsável pela execução da ação corretiva.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Bloco preenchimento fábrica */}
                <FieldsFabrica register={register} control={control} setValue={setValue} />

                {/* Bloco preenchimento fornecedor */}
                <FieldsFornecedor register={register} control={control} setValue={setValue} />

                {/* Bloco conclusão da fábrica */}
                <FieldsFabricaConclusion register={register} control={control} setValue={setValue} />

                {/* Botão inserir nova não conformidade */}
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Button
                            variant='outlined'
                            color='primary'
                            startIcon={<Icon icon='material-symbols:add-circle-outline-rounded' />}
                            sx={{ mt: 2 }}
                        >
                            Inserir nova não conformidade
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default RecebimentoMpNaoConformidade
