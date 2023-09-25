import { Alert, Box, Typography } from '@mui/material'
import React from 'react'

const IsFornecedor = ({ data }) => {
    console.log('🚀 ~ data do componneteer:', data)
    return (
        <Alert severity='error'>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography sx={{ color: 'text.primary' }}>Nome Fantasia: </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{data.razaoSocial ?? ''}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography sx={{ color: 'text.primary' }}>CNPJ: </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{data.cnpj ?? ''}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography sx={{ color: 'text.primary' }}>Email: </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{data.email ?? 'NI'}</Typography>
                </Box>
            </Box>
        </Alert>
    )
}

export default IsFornecedor
