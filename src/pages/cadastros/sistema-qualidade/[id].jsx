import FormSistemaQualidade from 'src/components/Cadastros/SistemaQualidade/FormSistemaQualidade'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'

const SistemaQualidadeForm = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {
        setTitle({ title: 'Sistema de Qualidade', subtitle: 'Novo' })
    }, [])

    return <FormSistemaQualidade />
}

export default SistemaQualidadeForm
