import FormRecebimentoMp from 'src/components/RecebimentoMp/FormRecebimentoMp'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'

const RecebimentoMpNovo = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {
        setTitle({
            title: 'Recebimento de Matéria Prima',
            subtitle: {
                id: null,
                count: null,
                new: true
            }
        })
    }, [])

    return <FormRecebimentoMp />
}

export default RecebimentoMpNovo
