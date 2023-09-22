import { useEffect, useState, useContext } from 'react'
import { api } from 'src/configs/api'
import FormProduto from 'src/components/Cadastros/Produto/FormProduto'
import Table from 'src/components/Defaults/Table'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import Loading from 'src/components/Loading'

// ** Next
import { useRouter } from 'next/router'

// ** Configs
import { configColumns } from 'src/configs/defaultConfigs'
import { AuthContext } from 'src/context/AuthContext'

const Produto = () => {
    const [result, setResult] = useState(null)
    const router = useRouter()
    const currentLink = router.pathname
    console.log('🚀 ~ currentLink:', currentLink)
    const { setTitle } = useContext(ParametersContext)
    const { loggedUnity } = useContext(AuthContext)
    const { id } = useContext(RouteContext)

    const getList = async () => {
        await api.get(`${currentLink}`).then(response => {
            setResult(response.data)
            console.log('🚀 ~ response.data do produto:', response.data)
            setTitle({
                title: 'Produto',
                subtitle: {
                    id: id,
                    count: response.data.length,
                    new: false
                }
            })
        })
    }

    useEffect(() => {
        getList()
    }, [id])

    const arrColumns = [
        {
            headerName: 'ID',
            field: 'id',
            size: 0.1
        },
        {
            headerName: 'Nome',
            field: 'nome',
            size: 0.6
        },
        // {
        //     headerName: 'Unidade de medida',
        //     field: 'unidadeMedida',
        //     size: 0.2
        // },

        {
            headerName: 'Status',
            field: {
                name: 'status',
                cor: 'cor'
            },
            size: 0.1
        }
    ]

    const columns = configColumns(currentLink, arrColumns)

    return (
        <>
            {/* Exibe loading enquanto não existe result */}
            {!result ? (
                <Loading />
            ) : //? Se tem id, exibe o formulário
            id && id > 0 ? (
                <FormItem id={id} />
            ) : (
                //? Lista tabela de resultados da listagem
                <Table result={result} columns={columns} />
            )}
        </>
    )
}

export default Produto
