import { useEffect, useState, useContext } from 'react'
import { api } from 'src/configs/api'
import Table from 'src/components/Defaults/Table'
import FormNaoConformidade from 'src/components/RecebimentoMp/NaoConformidade/FormNaoConformidade'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'

import Loading from 'src/components/Loading'

// ** Next
import { useRouter } from 'next/router'

// ** Configs
import { configColumns } from 'src/configs/defaultConfigs'

const NaoConformidade = () => {
    const { user, loggedUnity } = useContext(AuthContext)
    const [result, setResult] = useState(null)
    const router = useRouter()
    const currentLink = router.pathname
    console.log('🚀 ~ currentLink:', currentLink)
    const { setTitle } = useContext(ParametersContext)
    const { id } = useContext(RouteContext)

    const getList = async () => {
        await api
            .post(`${currentLink}/getList`, {
                unidadeID: loggedUnity.unidadeID,
                papelID: user.papelID,
                usuarioID: user.id,
                cnpjFornecedor: user.papelID == 2 && user.cnpj ? user.cnpj : null
            })
            .then(response => {
                setResult(response.data)
                console.log('🚀 ~ getList:', response.data)
                setTitle({
                    title: 'Não Conformidade',
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

    const arrColumns =
        user.papelID == 1
            ? [
                  {
                      headerName: 'ID',
                      field: 'id',
                      size: 0.1
                  },
                  {
                      headerName: 'Recebimento ID',
                      field: 'recebimentompID',
                      size: 0.1
                  },
                  {
                      headerName: 'Data',
                      field: 'data',
                      size: 0.1
                  },
                  {
                      headerName: 'Fornecedor',
                      field: 'fornecedor',
                      size: 0.2
                  },
                  {
                      headerName: 'CNPJ Fornecedor',
                      field: 'cnpj',
                      size: 0.3
                  },
                  {
                      headerName: 'Fabricação',
                      field: 'fabricacao',
                      size: 0.3
                  },
                  {
                      headerName: 'Lote',
                      field: 'lote',
                      size: 0.3
                  },
                  {
                      headerName: 'Status',
                      field: 'status',
                      size: 0.2
                  }
              ]
            : [
                  {
                      headerName: 'ID',
                      field: 'id',
                      size: 0.1
                  },
                  {
                      headerName: 'Recebimento ID',
                      field: 'recebimentompID',
                      size: 0.1
                  },
                  {
                      headerName: 'Data',
                      field: 'data',
                      size: 0.1
                  },
                  {
                      headerName: 'Fábrica',
                      field: 'fabrica',
                      size: 0.2
                  },
                  {
                      headerName: 'Fabricação',
                      field: 'fabricacao',
                      size: 0.3
                  },
                  {
                      headerName: 'Lote',
                      field: 'lote',
                      size: 0.3
                  },
                  {
                      headerName: 'Status',
                      field: 'status',
                      size: 0.2
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
                <FormNaoConformidade id={id} />
            ) : (
                //? Lista tabela de resultados da listagem
                <Table result={result} columns={columns} />
            )}
        </>
    )
}

export default NaoConformidade
