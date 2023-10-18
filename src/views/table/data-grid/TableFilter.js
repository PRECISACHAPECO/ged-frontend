import { useContext } from 'react'
import { DataGrid, ptBR } from '@mui/x-data-grid'
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbar'
import { ParametersContext } from 'src/context/ParametersContext'
import { RouteContext } from 'src/context/RouteContext'

const TableFilter = ({ rows, columns, buttonsHeader }) => {
    const {
        handleSearch,
        pageSize,
        setPageSize,
        searchText,
        filteredData,
        setData,
        data
    } = useContext(ParametersContext)

    const { setId } = useContext(RouteContext)

    // ** States
    setData(rows)

    // Função para converter a data do formato 'dd/mm/YYYY' para 'YYYY-MM-DD'
    function formatDateForComparison(date) {
        const parts = date.split('/')
        return `${parts[2]}-${parts[1]}-${parts[0]}`
    }

    //? Varre array columns, verificando se existe type date, se sim, formata data com formatDateForComparison
    columns.map((column) => {
        if (column.type === 'date') {
            column.sortComparator = (v1, v2) => {
                const date1 = formatDateForComparison(v1)
                const date2 = formatDateForComparison(v2)
                return date1.localeCompare(date2)
            }
        }
    })

    return (
        <DataGrid
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            autoHeight
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={[10, 20, 30, 40, 50, 100]}
            components={{ Toolbar: QuickSearchToolbar }}
            rows={searchText ? filteredData : data}
            onCellClick={(params, event) => {
                setId(params.row.id)
            }}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            sx={{
                '& .MuiDataGrid-cell': { cursor: 'pointer', overflow: 'scroll' }
            }}
            componentsProps={{
                toolbar: {
                    value: searchText,
                    clearSearch: () => handleSearch(''),
                    onChange: event => handleSearch(event.target.value),
                    buttonsHeader: buttonsHeader
                }
            }}
        />
    )
}

export default TableFilter
