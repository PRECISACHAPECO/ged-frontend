import FormUnidade from 'src/components/Configuracoes/unidade/FormUnidade'
import { ParametersContext } from 'src/context/ParametersContext'
import { AuthContext } from 'src/context/AuthContext'
import { useContext, useEffect } from 'react'

const MeusDados = () => {
    const { setTitle } = useContext(ParametersContext)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        setTitle('Meus Dados')
    }, [])

    return <FormUnidade paramFornecedorUnidadeID={user.unidadeID} />
}

export default MeusDados
