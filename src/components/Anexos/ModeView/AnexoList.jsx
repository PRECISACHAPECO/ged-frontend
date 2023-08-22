import { Card, CardContent, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import IconCloudUpload from 'src/icon/IconUpload'
import IconAttach from '../IconAttach'
import Remove from 'src/components/Form/Remove'
import Loading from 'src/components/Loading'

const AnexoList = ({
    item,
    handleFileClick,
    selectedItem,
    handleFileSelect,
    handleRemove,
    loadingFile,
    error,
    disabled,
    modeTheme,
    inputRef
}) => {
    console.log('🚀 ~ AnexoList item:', item)

    return (
        <Grid item xs={12} md={12}>
            <div
                className={`border ${
                    error?.[indexItem]
                        ? 'border-red-500'
                        : modeTheme === 'dark'
                        ? 'border-[#71717B]'
                        : 'border-[#E1E1E6]'
                } rounded-lg flex flex-col relative z-10`}
            >
                <div className='px-4 py-2 pb-0 space-y-1'>
                    <p className='font-medium text-sm '>{item.nome}</p>
                </div>

                <Grid container className='items-cente'>
                    {/* Bloco da esquerda com link */}
                    <Grid item xs={12} md={11}>
                        <div
                            className='flex justify-start items-center cursor-pointer p-1 w-full '
                            disabled={disabled}
                            onClick={() => {
                                item.anexo && item.anexo.path && item.anexo.exist
                                    ? window.open(item.anexo.path, '_blank')
                                    : !disabled
                                    ? handleFileClick(item)
                                    : null
                            }}
                        >
                            <div
                                className={`flex relative p-4 justify-start items-center gap-2 rounded-lg w-full mx-2 my-1 mb-2 border border-dashed hover:border-[#4A8B57] transition-colors ${
                                    modeTheme === 'dark'
                                        ? ' border-[rgba(234, 234, 255, 0.10)]'
                                        : 'rgba(76, 78, 100, 0.12)'
                                }`}
                            >
                                {selectedItem && selectedItem.grupoanexoitemID == item.grupoanexoitemID && (
                                    <Loading show={loadingFile} title='Enviando anexo...' />
                                )}
                                <div className='flex items-center gap-3 container'>
                                    {item.anexo && item.anexo.exist ? (
                                        <div className='flex items-center justify-between gap-2 container'>
                                            <div className='flex items-center gap-2'>
                                                <div>
                                                    <IconAttach data={item.anexo} />
                                                </div>
                                                <div>
                                                    <div className='flex items-center gap-2'>
                                                        <p className='text-sm font-semibold opacity-80'>
                                                            {item.anexo.nome}
                                                        </p>
                                                        <p className='text-sm opacity-80'>
                                                            <span className='text-xs opacity-50'>{`(${(
                                                                item.anexo.size /
                                                                1024 /
                                                                1024
                                                            ).toFixed(2)}MB)`}</span>
                                                        </p>
                                                        <p className='text-xs opacity-50'>
                                                            {'Enviado em: ' +
                                                                new Date(item.anexo.time).toLocaleString('pt-BR', {
                                                                    day: '2-digit',
                                                                    month: '2-digit',
                                                                    year: 'numeric',
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })}
                                                        </p>
                                                    </div>
                                                    <p className='text-xs opacity-70'>{item.descricao}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='flex items-center gap-2'>
                                            <IconCloudUpload
                                                className={`w-20 h-20 ${
                                                    item.anexo && item.anexo.exist ? 'fill-[#666CFF]' : 'fill-current'
                                                }`}
                                            />
                                            <div>
                                                <h6 className='text-sm font-semibold opacity-80'>
                                                    Adicione um arquivo
                                                </h6>
                                                <p className='text-xs opacity-70'>{item.descricao}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Grid>
                    {/* Bloco da direita com btn remover */}
                    <Grid item xs={12} md={1} className='flex justify-center'>
                        <Remove
                            xs={12}
                            md={1}
                            title={''}
                            // index={index}
                            removeItem={() => handleRemove(item)}
                            item={item}
                            pending={!item.anexo?.exist || disabled}
                            textSuccess='Remover este anexo'
                            textError='Este anexo não pode mais ser removido pois o formulário já foi concluído!'
                        />
                    </Grid>
                </Grid>
                <input
                    type='file'
                    ref={inputRef}
                    style={{ display: 'none' }}
                    onChange={e => handleFileSelect(e, selectedItem)}
                />
            </div>
        </Grid>
    )
}

export default AnexoList
