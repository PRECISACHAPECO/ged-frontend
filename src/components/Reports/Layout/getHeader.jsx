import { api } from 'src/configs/api'
import { useEffect, useState, useContext } from 'react'
import { RouteContext } from 'src/context/RouteContext'

const getHeader = () => {
    const { id } = useContext(RouteContext)

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await api.post('relatorio/header', { id }).then(response => setData(response.data))
        }
        fetchData()
    }, [])
    return data
}

export default getHeader
