import { api } from 'src/configs/api'
import { useEffect, useState } from 'react'

const getHeader = () => {
    const unidade = JSON.parse(localStorage.getItem('loggedUnity'))
    const unidadeID = unidade.unidadeID

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await api.post('relatorio/header', { unidadeID }).then(response => setData(response.data))
        }
        fetchData()
    }, [])
    return data
}

export default getHeader
