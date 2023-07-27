import { createContext, useState } from 'react'

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

    // Funções para guardar ids dinamicos no localStorage
    const setStorageId = (id) => {
        localStorage.setItem('dynamicId', JSON.stringify(id))
    }
    const getStorageId = () => {
        const id = JSON.parse(localStorage.getItem('dynamicId'))
        return id
    }

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
        setStorageId,
        getStorageId
    }

    return <ParametersContext.Provider value={values}>{children}</ParametersContext.Provider>
}

export { ParametersContext, ParametersProvider }
