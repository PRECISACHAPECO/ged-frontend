import FormFornecedor from 'src/components/Fornecedor/FormFornecedor'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'

const FornecedorNovo = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {
        setTitle({
            title: 'Fornecedor',
            subtitle: {
                id: null,
                count: null,
                new: true
            }
        })
    }, [])

    return <FormFornecedor />
}

export default FornecedorNovo
