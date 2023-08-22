import { useRef, useContext, useState, useEffect } from 'react'
import { SettingsContext } from 'src/@core/context/settingsContext'
import AnexoGrid from './AnexoGrid'
import AnexoList from './AnexoList'
import { Card, CardContent, Typography, Grid } from '@mui/material'

const ModeView = ({ mode, values }) => {
    //* Controles do anexo
    const [selectedItem, setSelectedItem] = useState(null)
    const { settings } = useContext(SettingsContext)
    const modeTheme = settings.mode
    const fileInputRef = useRef(null)
    const handleFileClick = item => {
        fileInputRef.current.click()
        setSelectedItem(item)
    }
    useEffect(() => {
        fileInputRef.current.value = ''
    }, [values.handleFileSelect])

    return (
        <Card sx={{ mt: 4 }}>
            <CardContent>
                <Typography variant='subtitle1' sx={{ fontWeight: 600, mb: 2 }}>
                    {values.grupo.nome}
                </Typography>
                <Typography variant='body2' sx={{ mb: 2 }}>
                    {values.grupo.descricao}
                </Typography>
                <Grid container spacing={4}>
                    {values.grupo.itens.map((item, indexItem) =>
                        mode === 'grid' ? (
                            <AnexoGrid
                                modeTheme={modeTheme}
                                key={`${values.indexGrupo}-${indexItem}`}
                                handleFileClick={handleFileClick}
                                selectedItem={selectedItem}
                                inputRef={fileInputRef}
                                //
                                item={item}
                                grupo={values.grupo}
                                indexGrupo={values.indexGrupo}
                                handleFileSelect={values.handleFileSelect}
                                handleRemove={values.handleRemove}
                                error={values.error}
                                disabled={values.disabled}
                            />
                        ) : (
                            <AnexoList
                                modeTheme={modeTheme}
                                key={`${values.indexGrupo}-${indexItem}`}
                                handleFileClick={handleFileClick}
                                selectedItem={selectedItem}
                                inputRef={fileInputRef}
                                //
                                item={item}
                                grupo={values.grupo}
                                indexGrupo={values.indexGrupo}
                                handleFileSelect={values.handleFileSelect}
                                handleRemove={values.handleRemove}
                                error={values.error}
                                disabled={values.disabled}
                            />
                        )
                    )}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ModeView
