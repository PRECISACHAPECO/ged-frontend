import FormAtividade from 'src/components/Cadastros/Atividade/FormAtividade'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'

const AtividadeForm = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {}, [])

    return <FormAtividade />
}

export default AtividadeForm
