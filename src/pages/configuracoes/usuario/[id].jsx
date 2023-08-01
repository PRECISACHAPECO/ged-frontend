import FormUsuario from 'src/components/Configuracoes/Usuario/FormUsuario'
import { ParametersContext } from 'src/context/ParametersContext'
import { useContext, useEffect } from 'react'

const UsuarioForm = () => {
    const { setTitle } = useContext(ParametersContext)

    useEffect(() => {
        setTitle({ title: 'Usuário', subtitle: 'Novo' })
    }, [])

    return <FormUsuario />
}

export default UsuarioForm
