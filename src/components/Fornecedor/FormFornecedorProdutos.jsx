import { SettingsContext } from 'src/@core/context/settingsContext'
import { Card, CardContent, Divider, Grid, Typography, Box } from '@mui/material'
import AnexoModeView from 'src/components/Anexos/ModeView'
import AnexoList from 'src/components/Anexos/ModeView/AnexoList'
import AnexoListMultiple from 'src/components/Anexos/ModeView/AnexoListMultiple'
import { useRef, useContext, useState, useEffect } from 'react'

const FormFornecedorProdutos = ({ values, handleFileSelect, handleRemove, loadingFile, disabled }) => {
    const { settings } = useContext(SettingsContext)
    const modeTheme = settings.mode
    const [selectedItem, setSelectedItem] = useState(null)
    const fileInputRef = useRef(null)

    const handleFileClick = item => {
        console.log('🚀 >>>>> handleFileClick:', item)
        fileInputRef.current.click()
        setSelectedItem(item)
    }

    useEffect(() => {
        console.log('no useEffect no useRef..')
        if (!values) return
        fileInputRef.current.value = ''
    }, [handleFileSelect])

    return (
        <div className='flex flex-col gap-2'>
            {values &&
                values.map((value, index) => (
                    <>
                        <Grid container key={index} spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box display='flex' alignItems='center' sx={{ gap: 1 }}>
                                    <Typography color='primary' variant='subtitle1' sx={{ fontWeight: 700 }}>
                                        {value.nome}
                                    </Typography>
                                    <Typography variant='body2'>{`(${value.unidadeMedida})`}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        {/* Anexos do produto */}
                        {value.produtoAnexosDescricao && value.produtoAnexosDescricao.length > 0 && (
                            <Grid container spacing={4}>
                                {value.produtoAnexosDescricao.map((anexo, indexAnexo) => (
                                    <AnexoListMultiple
                                        modeTheme={modeTheme}
                                        key={`${index}-${indexAnexo}`}
                                        handleFileClick={handleFileClick}
                                        selectedItem={selectedItem}
                                        inputRef={fileInputRef}
                                        item={anexo}
                                        loadingFile={loadingFile}
                                        grupo={value}
                                        indexGrupo={index}
                                        indexItem={indexAnexo}
                                        handleFileSelect={handleFileSelect}
                                        folder='produto'
                                        handleRemove={handleRemove}
                                        error={false}
                                        disabled={disabled}
                                    />
                                ))}
                            </Grid>
                        )}
                        {value.anexos && value.anexos.length === 0 && (
                            <Typography variant='body2' sx={{ mb: 2 }}>
                                Este produto não exige anexos
                            </Typography>
                        )}

                        {/* Divider */}
                        {index < values.length - 1 && <Divider sx={{ my: 4 }} />}
                    </>
                ))}
        </div>
    )
}

export default FormFornecedorProdutos
