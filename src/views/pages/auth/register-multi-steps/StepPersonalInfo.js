// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { cellPhoneMask, cepMask, ufMask } from '../../../../configs/masks'

import { Controller, useForm } from 'react-hook-form'
import { api } from 'src/configs/api'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { FormControl } from '@mui/material'
import { useState } from 'react'

const StepPersonalDetails = ({ handleNext, handlePrev, setDataGlobal, dataGlobal }) => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors }
    } = useForm({
    })

    const onSubmit = value => {
        setDataGlobal({
            usuario: {
                ...dataGlobal?.usuario,
                fields: {
                    ...dataGlobal?.usuario?.fields,
                    ...value
                }
            }
        })
        console.log("values", value)
        handleNext()
    }

    const getCep = async (cep) => {
        if (cep.length === 9) {
            api.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
                setAddress(response.data)
            })
        }
    }

    const setAddress = (address) => {
        setValue('logradouro', address?.logradouro)
        setValue('bairro', address?.bairro)
        setValue('cidade', address?.localidade)
        setValue('uf', address?.uf)
        reset(['logradouro', 'bairro', 'cidade', 'uf'])
    }



    return (
        dataGlobal && (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant='h5'>Informações opcionais</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Insira as informações opcionais</Typography>
                </Box>

                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label='Telefone'
                            fullWidth
                            name='telefone'
                            defaultValue={dataGlobal?.usuario?.fields?.telefone}
                            {...register('telefone')}
                            onChange={(e) => {
                                setValue('telefone', cellPhoneMask(e.target.value))
                            }}
                            inputProps={{
                                maxLength: 15,
                                type: 'tel', // define o tipo de entrada como 'tel'
                                inputMode: 'numeric', // define o inputMode como 'numeric'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label='Cep'
                            placeholder='Cep'
                            defaultValue={dataGlobal?.usuario?.fields?.cep}
                            name='cep'
                            fullWidth
                            {...register('cep',)}
                            onChange={(e) => {
                                setValue('cep', cepMask(e.target.value))
                                getCep(e.target.value)
                            }}
                            inputProps={{
                                maxLength: 9,
                                type: 'tel', // define o tipo de entrada como 'tel'
                                inputMode: 'numeric', // define o inputMode como 'numeric'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label='Rua'
                            placeholder='Rua'
                            defaultValue={dataGlobal?.usuario?.fields?.logradouro ?? ''}
                            name='logradouro'
                            {...register('logradouro')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label='Número'
                            defaultValue={dataGlobal?.usuario?.fields?.numero}
                            placeholder='Número'
                            name='numero'
                            fullWidth
                            {...register('numero')}
                            inputProps={{
                                type: 'tel', // define o tipo de entrada como 'tel'
                                inputMode: 'numeric', // define o inputMode como 'numeric'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label='Complemento'
                            defaultValue={dataGlobal?.usuario?.fields?.complemento}
                            placeholder='Complemento'
                            name='complemento'
                            fullWidth
                            {...register('complemento')}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <TextField
                                defaultValue={dataGlobal?.usuario?.fields?.bairro}
                                label='Bairro'
                                placeholder='Bairro'
                                name='bairro'
                                {...register('bairro', { required: false })}
                            />

                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label='Cidade'
                            placeholder='Cidade'
                            defaultValue={dataGlobal?.usuario?.fields?.cidade}
                            name='cidade'
                            fullWidth
                            {...register('cidade')}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label='Estado'
                            placeholder='Estado'
                            defaultValue={dataGlobal?.usuario?.fields?.uf}
                            name='uf'
                            fullWidth
                            {...register('uf')}
                            onChange={(e) => {
                                setValue('uf', ufMask(e.target.value))
                            }}
                            inputProps={{ maxLength: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                color='secondary'
                                variant='contained'
                                onClick={handlePrev}
                                startIcon={<Icon icon='mdi:chevron-left' fontSize={20} />}
                            >
                                Anterior
                            </Button>
                            <Button type='submit' variant='contained' onClick={handleSubmit} endIcon={<Icon icon='mdi:chevron-right' fontSize={20} />}>
                                Proximo
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form >
        )

    )
}

export default StepPersonalDetails
