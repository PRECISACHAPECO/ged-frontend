import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { api } from 'src/configs/api'
import Icon from 'src/@core/components/icon'
import FieldsFabrica from './FieldsFabrica'
import FieldsFornecedor from './FieldsFornecedor'
import FieldsFabricaConclusion from './FieldsFabricaConclusion'
import { useContext, useEffect, useState } from 'react'
import { add } from 'date-fns'
import { SettingsContext } from 'src/@core/context/settingsContext'

const RecebimentoMpNaoConformidade = ({
    recebimentoMpID,
    values,
    produtos,
    getValues,
    register,
    control,
    setValue
}) => {
    const { settings } = useContext(SettingsContext)
    const [change, setChange] = useState(false)

    const handlePreenchimentoFornecedor = () => {
        setChange(!change)
    }

    const addNaoConformidade = () => {
        const naoConformidades = getValues('naoConformidades')
        naoConformidades.push({
            profissionalPreenchimento: null,
            produto: null,
            profissionalConclusao: null,
            data: new Date(),
            hora: new Date(),
            dataFornecedor: new Date(),
            horaFornecedor: new Date(),
            dataConclusao: new Date(),
            horaConclusao: new Date()
        })
        setValue('naoConformidades', naoConformidades)
        setChange(!change)
    }

    return (
        <>
            <div className='flex flex-col gap-2'>
                <div
                    className={`${
                        settings.mode == 'dark' ? 'bg-[#353D39]' : 'bg-[#E2EAE4]'
                    } p-5 rounded-xl border border-[#4A8B57] text-center`}
                >
                    <Typography color='primary' variant='subtitle1' sx={{ fontWeight: 700 }}>
                        Plano de Ação
                    </Typography>
                </div>

                <Card>
                    <CardContent>
                        <Typography variant='subtitle1'>
                            Deve ser preenchido pelos colaboradores responsáveis pelas ações de monitoramento e/ou
                            verificação e/ou responsável pela execução da ação corretiva.
                        </Typography>
                    </CardContent>
                </Card>

                {getValues('naoConformidades') &&
                    getValues('naoConformidades').map((value, index) => (
                        <>
                            <Card>
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <Typography variant='subtitle1' color='error' sx={{ fontWeight: 700 }}>
                                        <div className='flex items-center gap-1'>
                                            <Icon icon='typcn:warning' color='#FF4D49' />
                                            <p>Não Conformidade {index + 1}</p>
                                        </div>
                                    </Typography>

                                    <FieldsFabrica
                                        key={index}
                                        index={index}
                                        value={value}
                                        produtos={produtos}
                                        handlePreenchimentoFornecedor={handlePreenchimentoFornecedor}
                                        getValues={getValues}
                                        register={register}
                                        control={control}
                                        setValue={setValue}
                                    />

                                    {/* Bloco preenchimento fornecedor */}
                                    <FieldsFornecedor
                                        key={index}
                                        index={index}
                                        value={value}
                                        register={register}
                                        control={control}
                                        setValue={setValue}
                                    />

                                    {/* Bloco conclusão da fábrica */}
                                    <FieldsFabricaConclusion
                                        key={index}
                                        index={index}
                                        value={value}
                                        register={register}
                                        control={control}
                                        setValue={setValue}
                                    />
                                </CardContent>
                            </Card>
                        </>
                    ))}

                {/* Botão inserir nova não conformidade */}
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Button
                            variant='outlined'
                            color='primary'
                            onClick={addNaoConformidade}
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
