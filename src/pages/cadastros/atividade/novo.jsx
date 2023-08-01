import FormAtividade from 'src/components/Cadastros/Atividade/FormAtividade'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'

const AtividadeNovo = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {
        setTitle({ title: 'Atividade', subtitle: 'Novo' })
    }, [])

    return <FormAtividade />
}

export default AtividadeNovo
