import FormRecebimentoMp from 'src/components/RecebimentoMp/FormRecebimentoMp'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'

const RecebimentoMpForm = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {
        setTitle({ title: 'Recebimento de MP', subtitle: 'Novo' })
    }, [])

    return <FormRecebimentoMp />
}

export default RecebimentoMpForm
