import { api } from 'src/configs/api'
import Router from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { RouteContext } from 'src/context/RouteContext'
import { AuthContext } from 'src/context/AuthContext'

const getHeader = () => {
    const { id } = useContext(RouteContext)
    const route = Router.pathname.split('/')[2]
    const [data, setData] = useState([])

    const { user, loggedUnity } = useContext(AuthContext)

    const fetchData = async () => {
        await api
            .post('relatorio/header', {
                id,
                unidadeID: loggedUnity.unidadeID,
                isFornecedor: route === 'fornecedor' ? true : false
            })
            .then(response => setData(response.data))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return data
}

export default getHeader
