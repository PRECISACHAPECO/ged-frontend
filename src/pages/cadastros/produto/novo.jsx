import FormItem from 'src/components/Cadastros/Item/FormItem'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'

const ProdutoNovo = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {
        setTitle({
            title: 'Produto',
            subtitle: {
                id: null,
                count: null,
                new: true
            }
        })
    }, [])

    return <FormItem />
}

ProdutoNovo.acl = {
    action: 'read',
    subject: 'acl-page'
}

export default ProdutoNovo
