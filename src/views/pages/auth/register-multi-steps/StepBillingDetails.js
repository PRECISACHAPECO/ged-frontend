import { api } from '../../../../configs/api'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import toast from 'react-hot-toast'
import Router from 'next/router'


// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { useAuth } from 'src/hooks/useAuth'
// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'
import { useEffect, useState } from 'react'


const StepBillingDetails = ({ handlePrev, dataGlobal, setDataGlobal }) => {
    const [rememberMe, setRememberMe] = useState(true)
    const [loadingConclusion, setLoadingConclusion] = useState(false)
    const auth = useAuth()

    console.log("dataglobal tela 33333", dataGlobal)

    const handleSubmit = () => {
        setLoadingConclusion(true)
        // Salva o fornecedor no banco de dados
        api.post('/registro-fornecedor/registerNew', { data: dataGlobal })
            .then(response => {
                if (response.status === 201) {
                    toast.error(response.data.message)
                } else {
                    // Efetua login de forma automática após o cadastro
                    toast.success("Cadastro efetuado com sucesso!")
                    setTimeout(() => {
                        toast.success("Efetuando login no sistema")
                        const { cnpj, senha: password } = dataGlobal?.sectionOne
                        auth.loginFornecedor({ cnpj, password, rememberMe }, error => {
                        })
                    }, 2000)
                }
            }
            ).catch(error => {
                toast.error(error.message)
            }
            )
    }

    useEffect(() => {
        const endereco = {
            logradouro: dataGlobal?.sectionTwo?.logradouro,
            numero: dataGlobal?.sectionTwo?.numero,
            complemento: dataGlobal?.sectionTwo?.complemento,
            bairro: dataGlobal?.sectionTwo?.bairro,
            cidade: dataGlobal?.sectionTwo?.cidade,
            uf: dataGlobal?.sectionTwo?.uf
        }
        const enderecoCompleto = Object.entries(endereco).map(([key, value]) => {
            if (value) {
                return `${value}, `;
            }
        }).join('').slice(0, -2) + '.'; // Remove a última vírgula e adiciona um ponto final
        setDataGlobal({
            ...dataGlobal,
            sectionThree: {
                endereco: enderecoCompleto
            }
        })
    }, [])

    return (
        <>
            <Box sx={{ mb: 4 }}>
                <Typography variant='h5'>Verifique as informações</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Envie se estiver tudo certo</Typography>
            </Box>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Typography variant='caption' sx={{ color: 'text.secondary', }}>CNPJ</Typography>
                            <Typography sx={{ color: 'text.primary' }}>{dataGlobal?.sectionOne?.cnpj}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Typography variant='caption' sx={{ color: 'text.secondary', }}>Nome Fantasia</Typography>
                            <Typography sx={{ color: 'text.primary' }}>{dataGlobal?.sectionOne?.nomeFantasia}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Typography variant='caption' sx={{ color: 'text.secondary', }}>Razão Social</Typography>
                            <Typography sx={{ color: 'text.primary' }}>{dataGlobal?.sectionOne?.razaoSocial}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Typography variant='caption' sx={{ color: 'text.secondary', }}>Email Institucional</Typography>
                            <Typography sx={{ color: 'text.primary' }}>{dataGlobal?.sectionOne?.email}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Typography variant='caption' sx={{ color: 'text.secondary', }}>Telefone</Typography>
                            <Typography sx={{ color: 'text.primary' }}>{dataGlobal?.sectionTwo?.telefone}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Typography variant='caption' sx={{ color: 'text.secondary', }}>Cep</Typography>
                            <Typography sx={{ color: 'text.primary' }}>{dataGlobal?.sectionTwo?.cep}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Typography variant='caption' sx={{ color: 'text.secondary', }}>Endereço</Typography>
                            <Typography sx={{ color: 'text.primary' }}>{dataGlobal?.sectionThree?.endereco
                            }</Typography>
                        </Box>
                    </Box>

                    {/* Botoes de ação */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
                        <Button
                            color='secondary'
                            variant='contained'
                            onClick={handlePrev}
                            startIcon={<Icon icon='mdi:chevron-left' fontSize={20} />}
                        >
                            Anterior
                        </Button>
                        <Button type='submit' onClick={handleSubmit} color='success' variant='contained'>
                            Concluir
                        </Button>
                        {/* disabled={loadingConclusion} */}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default StepBillingDetails
