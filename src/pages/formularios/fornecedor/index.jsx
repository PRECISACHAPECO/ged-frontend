import { useEffect, useState, useContext } from 'react'
import { api } from 'src/configs/api'
import Table from 'src/components/Defaults/Table'
import FormFornecedor from 'src/components/Fornecedor/FormFornecedor'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'
import DialogActs from 'src/components/Defaults/Dialogs/DialogActs'
import toast from 'react-hot-toast'
import Loading from 'src/components/Loading'

// ** Next
import { useRouter } from 'next/router'

// ** Configs
import { configColumns } from 'src/configs/defaultConfigs'
import NewFornecedor from 'src/components/Fornecedor/Dialogs/NewFornecedor'
import FormFornecedorConclusion from 'src/components/Fornecedor/Dialogs/NewFornecedor/FormFornecedorConclusion'

const Fornecedor = () => {
    const { user, loggedUnity } = useContext(AuthContext)
    const [result, setResult] = useState(null)
    const router = useRouter()
    const currentLink = router.pathname
    const { setTitle } = useContext(ParametersContext)
    const { id, setId } = useContext(RouteContext)

    //? Controles novo fornecedor
    const [open, setOpen] = useState(false)
    const [openModalConclusion, setOpenModalConclusion] = useState(true)
    const [responseConclusion, setResponseConclusion] = useState(null)

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

    //? handleSubmit do modal de gerar um novo fornecedor
    const makeFornecedor = async values => {
        console.log('🚀 ~ makeFornecedor : ', values)

        try {
            // setOpenModal(false)
            // handleClose()
            const response = await api.post(`/formularios/fornecedor/makeFornecedor`, {
                usuarioID: user.usuarioID,
                papelID: user.papelID,
                unidadeID: loggedUnity.unidadeID,
                values: values.fields
            })

            if (response.status == 200) {
                setResponseConclusion(response.data)
                setId(response.data.fornecedorID)
                setOpenModalConclusion(true)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const copyLink = () => {
        const link = responseConclusion?.link
        if (link) {
            navigator.clipboard.writeText(link)
            toast.success('Link copiado com sucesso!')
        }
    }

    useEffect(() => {
        getList()
    }, [id])

    console.log('==> ', id)

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
                <FormFornecedor id={id} makeFornecedor={makeFornecedor} />
            ) : (
                //? Lista tabela de resultados da listagem
                <Table result={result} columns={columns} openModal={user.papelID == 1 ? openModal : null} />
            )}

            {/* Modal pra habilitar um novo fornecedor */}
            <DialogActs
                title='Habilitar Fornecedor'
                description='Habilitar novo preenchimento de formulário pro fornecedor'
                handleConclusion={makeFornecedor}
                setOpenModal={setOpen}
                openModal={open}
                size='lg'
            >
                <NewFornecedor />
            </DialogActs>

            {/* Modal que exibe mensagem de novo fornecedor habilitado */}
            <DialogActs
                title='Formulário enviado ao fornecedor'
                description='Um novo formulário de qualificação de fornecedor foi enviado'
                handleCopyLink={copyLink}
                setOpenModal={setOpenModalConclusion}
                openModal={openModalConclusion}
            >
                <FormFornecedorConclusion values={responseConclusion} />
            </DialogActs>
        </>
    )
}

export default Fornecedor
