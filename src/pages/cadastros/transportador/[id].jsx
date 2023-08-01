import FormTransportador from 'src/components/Cadastros/Transportador/FormTransportador'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'

const TransportadorForm = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {
        setTitle({ title: 'Transportador', subtitle: 'Novo' })
    }, [])

    return <FormTransportador />
}

export default TransportadorForm
