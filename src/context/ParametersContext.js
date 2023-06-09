import { createContext, useState, useEffect } from 'react'
import { api } from 'src/configs/api'
import axios from 'axios'

const ParametersContext = createContext({})

const ParametersProvider = ({ children }) => {
    const [title, setTitle] = useState('Home')
    const [pageSize, setPageSize] = useState(10)
    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [data, setData] = useState([])

    //* Função para filtrar os dados da tabela
    const handleSearch = searchValue => {

        setSearchText(searchValue)
        const searchWords = searchValue.toLowerCase().split(' ').filter(word => word !== '')

        const filteredRows = data.filter(row => {
            return searchWords.every(word => {
                return Object.keys(row).some(field => {
                    console.log("valor digitado", field)
                    return row[field].toString().toLowerCase().indexOf(word) !== -1
                })
            })
        })
        if (searchValue.length && filteredRows.length > 0) {
            setFilteredData(filteredRows)
        } else {
            setFilteredData([])
        }
    }

    // // *? Função para gerar o relatório
    // const generateReport = async reportParameters => {
    //     localStorage.setItem('reportParameters', JSON.stringify(reportParameters))
    //     window.open('/relatorio', '_blank')
    // }


    const values = {
        title,
        setTitle,
        handleSearch,
        pageSize,
        setPageSize,
        searchText,
        setSearchText,
        filteredData,
        setFilteredData,
        data,
        setData,
        // generateReport
    }

    return <ParametersContext.Provider value={values}>{children}</ParametersContext.Provider>
}

export { ParametersContext, ParametersProvider }
