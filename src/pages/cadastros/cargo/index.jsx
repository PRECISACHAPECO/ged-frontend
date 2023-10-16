import { useEffect, useState, useContext } from 'react'
import { api } from 'src/configs/api'
import { ParametersContext } from 'src/context/ParametersContext'

import Loading from 'src/components/Loading'

// ** Next
import { useRouter } from 'next/router'

// ** Configs
import { configColumns } from 'src/configs/defaultConfigs'
import FormCargo from 'src/components/Cadastros/Cargo/FormCargo'
import { RouteContext } from 'src/context/RouteContext'
import Table from 'src/components/Defaults/Table'
import { AuthContext } from 'src/context/AuthContext'

// import axios from 'axios'

const Cargo = () => {
    const [result, setResult] = useState(null)
    const router = useRouter()
    const currentLink = router.pathname
    const { id } = useContext(RouteContext)
    const { loggedUnity } = useContext(AuthContext)
    const { setTitle } = useContext(ParametersContext)

    const getList = async () => {
        await api.get(`${currentLink}/${loggedUnity.unidadeID}`).then(response => {
            setResult(response.data)
            setTitle({
                title: 'Cargo',
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
            title: 'ID',
            field: 'id',
            size: 0.1
        },
        {
            title: 'Nome',
            field: 'nome',
            size: 0.8
        },
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
                <FormCargo id={id} />
            ) : (
                //? Lista tabela de resultados da listagem
                <Table result={result} columns={columns} />
            )}
        </>
    )
}

export default Cargo
