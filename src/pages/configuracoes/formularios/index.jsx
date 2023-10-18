import { useEffect, useState, useContext } from 'react'
import { api } from 'src/configs/api'
import Table from 'src/components/Defaults/Table'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import Loading from 'src/components/Loading'

// ** Next
import { useRouter } from 'next/router'

// ** Configs
import { configColumns } from 'src/configs/defaultConfigs'

const ListParametrosFormularios = () => {
    const [result, setResult] = useState(null)
    const router = useRouter()
    const currentLink = router.pathname
    const { setTitle } = useContext(ParametersContext)
    const { id, setId } = useContext(RouteContext)

    useEffect(() => {
        const getList = async () => {
            await api.get(currentLink).then(response => {
                setResult(response.data)
                setTitle({
                    title: 'Formulários',
                    subtitle: {
                        id: id,
                        count: response.data.length,
                        new: false
                    }
                })
            })
        }
        getList()
    }, [id])

    const arrColumns = [
        {
            title: 'ID',
            field: 'id',
            size: 0.2
        },
        {
            title: 'Nome',
            field: 'nome',
            size: 0.8
        }
    ]

    const columns = configColumns(currentLink, arrColumns)

    const handleRoute = route => {
        router.push(`${currentLink}/${route}`)
        setId(null)
    }

    return (
        <>
            {/* Exibe loading enquanto não existe result */}
            {!result ? (
                <Loading />
            ) : //? Se tem id, exibe o formulário
            id && id > 0 ? (
                id == 1 ? (
                    handleRoute('fornecedor')
                ) : id == 2 ? (
                    handleRoute('recebimento-mp')
                ) : id == 3 ? (
                    <h3>Em desenvolvimento...</h3>
                ) : id == 4 ? (
                    handleRoute('limpeza')
                ) : null
            ) : (
                //? Lista tabela de resultados da listagem
                <Table result={result} columns={columns} />
            )}
        </>
    )
}

export default ListParametrosFormularios
