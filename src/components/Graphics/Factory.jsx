import Grid from '@mui/material/Grid'
import Icon from 'src/@core/components/icon'
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
import CrmTotalProfit from 'src/views/dashboards/crm/CrmTotalProfit'
import CrmWeeklyOverview from 'src/views/dashboards/crm/CrmWeeklyOverview'
import CrmOrganicSessions from 'src/views/dashboards/crm/CrmOrganicSessions'
import CrmProjectTimeline from 'src/views/dashboards/crm/CrmProjectTimeline'
import { Alert, Card, CardContent } from '@mui/material'
import { useEffect, useContext, useState } from 'react'
import { api } from 'src/configs/api'
import { AuthContext } from 'src/context/AuthContext'
import Router from 'next/router'
import CrmExternalLinks from 'src/views/dashboards/crm/CrmExternalLinks'
import CrmAward from 'src/views/dashboards/crm/CrmAward'
import CrmSocialNetworkVisits from 'src/views/dashboards/crm/CrmSocialNetworkVisits'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const Factory = () => {
    const { loggedUnity } = useContext(AuthContext)
    const [data, setData] = useState(null)
    const router = Router

    const getData = async () => {
        try {
            const response = await api.get(`dashboard/fabrica/getData/${loggedUnity.unidadeID}`)
            setData(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    // Ao clicar é diferionado para a listagem de fornecedores aplicando o filtro selecionado
    const handleClickStatus = status => {
        const urlBase = 'formularios/fornecedor/'
        router.push(`${urlBase}?s=${status.statusID}`)
        console.log('🚀 ~ status:', status)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        data && (
            <ApexChartWrapper>
                <Grid container spacing={6} className='match-height'>
                    <Grid item xs={12} md={12}>
                        <Alert severity='info'>Dados em desenvolvimento...sssssss</Alert>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <CardStatisticsVertical
                            stats={data.fornecedorPorStatus[0]?.nome_status ?? 'Pendente'}
                            color='primary'
                            title={data.fornecedorPorStatus[0]?.total ?? '0'}
                            chipText='Last 4 Month'
                            icon={<Icon icon='mdi:cart-plus' />}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <CardStatisticsVertical
                            stats={data.fornecedorPorStatus[1]?.nome_status ?? 'Acessou o link'}
                            color='primary'
                            title={data.fornecedorPorStatus[1]?.total ?? '0'}
                            chipText='Last 4 Month'
                            icon={<Icon icon='mdi:cart-plus' />}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <CardStatisticsVertical
                            stats={data.fornecedorPorStatus[2]?.nome_status ?? 'Em preenchimento'}
                            color='primary'
                            title={data.fornecedorPorStatus[2]?.total ?? '0'}
                            chipText='Last 4 Month'
                            icon={<Icon icon='mdi:cart-plus' />}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <CardStatisticsVertical
                            stats={data.fornecedorPorStatus[3]?.nome_status ?? 'Concluiu preenchimento'}
                            color='primary'
                            title={data.fornecedorPorStatus[3]?.total ?? '0'}
                            chipText='Last 4 Month'
                            icon={<Icon icon='mdi:cart-plus' />}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <CrmOrganicSessions data={data} />
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <CrmTotalProfit />
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <CrmTotalGrowth />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <CrmWeeklyOverview />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <CrmProjectTimeline />
                    </Grid>
                </Grid>
            </ApexChartWrapper>
        )
    )
}

export default Factory
