import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'
import FormCargo from 'src/components/Cadastros/Cargo/FormCargo'

const CargoNovo = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {
        setTitle({ title: 'Cargo', subtitle: 'Novo' })
    }, [])

    return <FormCargo />
}

export default CargoNovo
