import { api } from 'src/configs/api'
import { useEffect, useState } from 'react'

const getData = () => {
    const [data, setData] = useState([])
    const reportJSON = localStorage.getItem('report')
    const report = JSON.parse(reportJSON)

    const fetchData = async () => {
        try {
            const response = await api.post('relatorio/fornecedor/dadosFornecedor', { data: report })
            setData(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return data
}

export default getData
