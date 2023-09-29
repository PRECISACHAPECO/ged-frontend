import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import CheckLabel from 'src/components/Form/CheckLabel'
import ListOptionsAnexo from './ListOptionsAnexo'
import { useState } from 'react'
import Icon from 'src/@core/components/icon'

const ListOptions = ({ index, data, addAnexo, register, control, errors, getValues, watch }) => {
    const [change, setChange] = useState(false)
    const [hasAnexo, setHasAnexo] = useState(data.anexo == 1 ? true : false)
    console.log('🚀 ~ hasAnexo:', hasAnexo)

    const handleChangeAnexo = () => {
        setChange(!change)
        setHasAnexo(!hasAnexo)
    }

    return (
        <Card sx={{ mt: 3 }}>
            <CardContent>
                <>
                    <Typography variant='h6' sx={{ my: 3 }}>
                        <Box display='flex' alignItems='center' sx={{ gap: 2 }}>
                            <Icon icon='akar-icons:edit' />
                            <p>{data.nome}</p>
                        </Box>
                    </Typography>
                    <Box display='flex' alignItems='center' sx={{ gap: 4 }}>
                        <Box>
                            <CheckLabel
                                title='Solicita anexo'
                                name={`fields.opcoes[${index}].anexo`}
                                onChange={handleChangeAnexo}
                                value={data.anexo}
                                register={register}
                            />
                        </Box>
                        <Box>
                            <CheckLabel
                                title='Bloqueia formulário'
                                name={`fields.opcoes[${index}].bloqueiaFormulario`}
                                value={data.bloqueiaFormulario}
                                register={register}
                            />
                        </Box>
                        <Box>
                            <CheckLabel
                                title='Observação'
                                name={`fields.opcoes[${index}].observacao`}
                                value={data.observacao}
                                register={register}
                            />
                        </Box>
                    </Box>
                </>

                {/* Anexos */}
                {hasAnexo && (
                    <>
                        <Typography variant='body1' sx={{ my: 3 }}>
                            Anexos do item
                        </Typography>
                        <Grid container spacing={4}>
                            {data.anexos.map((anexo, indexAnexo) => (
                                <ListOptionsAnexo
                                    key={change}
                                    index={index}
                                    indexAnexo={indexAnexo}
                                    data={anexo}
                                    control={control}
                                    register={register}
                                    errors={errors}
                                />
                            ))}
                        </Grid>
                        {/* Botão inserir */}
                        <Box sx={{ mt: 3 }}>
                            <Button
                                type='button'
                                variant='outlined'
                                startIcon={<Icon icon='material-symbols:add-circle-outline-rounded' />}
                                onClick={() => addAnexo(index)}
                            >
                                Inserir
                            </Button>
                        </Box>
                    </>
                )}
            </CardContent>
        </Card>
    )
}

export default ListOptions
