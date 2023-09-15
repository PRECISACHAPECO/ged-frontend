import { Card, CardContent } from '@mui/material'
import TableFilter from 'src/views/table/data-grid/TableFilter'

const Table = ({ result, columns, btnNew = true, btnPrint = true, btnCancel = true, openModal }) => {
    return (
        <Card>
            <CardContent sx={{ pt: '0' }}>
                <TableFilter
                    rows={result}
                    columns={columns}
                    buttonsHeader={{
                        btnNew: btnNew,
                        btnPrint: btnPrint,
                        btnCancel: btnCancel,
                        openModal: openModal
                    }}
                />
            </CardContent>
        </Card>
    )
}

export default Table
