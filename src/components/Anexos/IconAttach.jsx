import Icon from 'src/@core/components/icon'
import IconFilePdf from '../../icon/IconPdf'
import IconCloudUpload from '../../icon/IconUpload'
import { useRef, useContext, useState, useEffect } from 'react'
import { SettingsContext } from 'src/@core/context/settingsContext'

const IconAttach = ({ data }) => {
    console.log('🚀 ~ IconAttach data:', data)

    return data && data.tipo == 'application/pdf' ? (
        <IconFilePdf className='text-6xl fill-red-500' />
    ) : data.tipo == 'image/jpeg' || data.tipo == 'image/png' ? (
        // div com imagem de background com cover e posicionada ao centro
        <div
            className='h-16 w-16 rounded-lg relative '
            style={{ backgroundImage: `url(${data.path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
    ) : data.tipo == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? (
        <Icon name='file-word' className='text-6xl fill-red-500' />
    ) : data.tipo == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ? (
        <Icon name='file-excel' className='text-6xl fill-red-500' />
    ) : data.tipo == 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ? (
        <Icon name='file-powerpoint' className='text-6xl fill-red-500' />
    ) : (
        <p>no icon</p>
    )
}

export default IconAttach
