import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { api } from 'src/configs/api'
import Icon from 'src/@core/components/icon'
import FieldsFabrica from './FieldsFabrica'
import FieldsFornecedor from './FieldsFornecedor'
import FieldsFabricaConclusion from './FieldsFabricaConclusion'
import { useContext, useEffect, useState } from 'react'
import { add } from 'date-fns'
import { SettingsContext } from 'src/@core/context/settingsContext'
import { getCurrentTime } from 'src/configs/defaultConfigs'

const RecebimentoMpNaoConformidade = ({ recebimentoMpID, values, info, getValues, register, control, setValue }) => {
    console.log('🚀 ~ RecebimentoMpNaoConformidade => values: ', values)

    const { settings } = useContext(SettingsContext)
    const [change, setChange] = useState(false)

    const handlePreenchimentoFornecedor = () => {
        setChange(!change)
    }

    const addNaoConformidade = () => {
        const naoConformidades = getValues('naoConformidade.itens')
        naoConformidades.push({
            profissionalPreenchimento: null,
            produto: null,
            profissionalConclusao: null,
            data: new Date(),
            hora: getCurrentTime(),
            dataFornecedor: new Date(),
            horaFornecedor: getCurrentTime(),
            dataConclusao: new Date(),
            horaConclusao: getCurrentTime()
        })
        setValue('naoConformidade.itens', naoConformidades)
        setChange(!change)
    }

    const handleChangeStatus = (index, event) => {
        console.log('🚀 ~ event:', index, event)

        const naoConformidades = getValues('naoConformidade.itens')
        naoConformidades[index].status = event
        console.log('🚀 ~ naoConformidades:', naoConformidades)
        setValue('naoConformidade.itens', naoConformidades)
    }

    return (
        <>
            <div className='flex flex-col gap-2'>
                <div
                    className={`${
                        settings.mode == 'dark' ? 'bg-[#4B3537]' : 'bg-[#F8E2E2]'
                    } p-5 rounded-xl border border-[#FF4D49] text-center`}
                >
                    <Typography color='error' variant='subtitle1' sx={{ fontWeight: 700 }}>
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

                {getValues('naoConformidade.itens') &&
                    getValues('naoConformidade.itens').map((value, index) => (
                        <Card key={index}>
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
                                    handlePreenchimentoFornecedor={handlePreenchimentoFornecedor}
                                    getValues={getValues}
                                    info={info}
                                    produtos={values.produtos}
                                    register={register}
                                    control={control}
                                    setValue={setValue}
                                />

                                {/* Bloco preenchimento fornecedor */}
                                <FieldsFornecedor
                                    key={index}
                                    index={index}
                                    value={value}
                                    info={info}
                                    register={register}
                                    control={control}
                                    setValue={setValue}
                                />

                                {/* Bloco conclusão da fábrica */}
                                <FieldsFabricaConclusion
                                    key={index}
                                    index={index}
                                    value={value}
                                    info={info}
                                    register={register}
                                    control={control}
                                    setValue={setValue}
                                    handleChangeStatus={handleChangeStatus}
                                />
                            </CardContent>
                        </Card>
                    ))}

                {/* Botão inserir nova não conformidade */}
                {!info.concluido && (
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
                )}
            </div>
        </>
    )
}

export default RecebimentoMpNaoConformidade
