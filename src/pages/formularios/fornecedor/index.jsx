import { useEffect, useState, useContext } from 'react'
import { api } from 'src/configs/api'
import Table from 'src/components/Defaults/Table'
import FormFornecedor from 'src/components/Fornecedor/FormFornecedor'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'

import Loading from 'src/components/Loading'

// ** Next
import { useRouter } from 'next/router'

// ** Configs
import { configColumns } from 'src/configs/defaultConfigs'
import NewFornecedor from 'src/components/Fornecedor/Dialogs/newFornecedor'

const Fornecedor = () => {
    const { user, loggedUnity } = useContext(AuthContext)
    const [result, setResult] = useState(null)
    const router = useRouter()
    const currentLink = router.pathname
    const { setTitle } = useContext(ParametersContext)
    const { id } = useContext(RouteContext)
    const [open, setOpen] = useState(false)

    //* Controles modal pra inserir fornecedor
    const openModal = () => {
        setOpen(true)
    }

    const getList = async () => {
        await api
            .post(`${currentLink}/getList/`, {
                unidadeID: loggedUnity.unidadeID,
                papelID: user.papelID,
                cnpj: user.cnpj ? user.cnpj : null
            })
            .then(response => {
                setResult(response.data)
                setTitle({
                    title: 'Fornecedor',
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
                      size: 1
                  },
                  {
                      headerName: 'Fornecedor',
                      field: 'fornecedor',
                      size: 1
                  },
                  {
                      headerName: 'CNPJ',
                      field: 'cnpj',
                      size: 1
                  },
                  {
                      headerName: 'Data da Avaliação',
                      field: 'data',
                      size: 1
                  },
                  {
                      headerName: 'Cidade',
                      field: 'cidade',
                      size: 1
                  },
                  {
                      headerName: 'Responsável',
                      field: 'responsavel',
                      size: 1
                  },
                  {
                      headerName: 'Status',
                      field: {
                          name: 'status',
                          cor: 'cor'
                      },
                      size: 1
                  }
              ]
            : user.papelID == 2
            ? [
                  {
                      headerName: 'ID',
                      field: 'id',
                      size: 1
                  },
                  {
                      headerName: 'Fábrica',
                      field: 'fabrica',
                      size: 1
                  },
                  {
                      headerName: 'CNPJ',
                      field: 'cnpj',
                      size: 1
                  },
                  {
                      headerName: 'Data da Avaliação',
                      field: 'data',
                      size: 1
                  },
                  {
                      headerName: 'Cidade',
                      field: 'cidade',
                      size: 1
                  },
                  {
                      headerName: 'Responsável',
                      field: 'responsavel',
                      size: 1
                  },
                  {
                      headerName: 'Status',
                      field: {
                          name: 'status',
                          cor: 'cor'
                      },
                      size: 1
                  }
              ]
            : []

    const columns = configColumns(currentLink, arrColumns)

    return (
        <>
            {/* Exibe loading enquanto não existe result */}
            {!result ? (
                <Loading show />
            ) : //? Se tem id, exibe o formulário
            id && id > 0 ? (
                <FormFornecedor id={id} />
            ) : (
                //? Lista tabela de resultados da listagem
                <Table result={result} columns={columns} openModal={user.papelID == 1 ? openModal : null} />
            )}
            <NewFornecedor
                openModal={open}
                setOpenModal={setOpen}
                handleClose={() => setOpen(false)}
                title='Novo fornecedor'
            />
        </>
    )
}

export default Fornecedor
