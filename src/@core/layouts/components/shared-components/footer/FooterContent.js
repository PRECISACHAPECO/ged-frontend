// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AuthContext } from 'src/context/AuthContext'
import { useContext } from 'react'
import { useSettings } from 'src/@core/hooks/useSettings'

const FooterContent = () => {
    // ** Var
    const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))
    const { latestVersionState } = useContext(AuthContext)
    const { settings } = useSettings()
    const mode = settings.mode

    return (
        <div className='flex justify-between sm:justify-end items-center '>
            <div className='block sm:hidden'>
                {
                    latestVersionState && (
                        <span
                            className={`text-sm ${mode === 'light' || mode === 'semi-dark' ? 'text-[#757575]' : 'text-[#bdbdbd]'}`}
                        >
                            v {latestVersionState}
                        </span>

                    )
                }
            </div>
            <div>
                <p className='text-sm pr-2 md:text-sm'>
                    {`© ${new Date().getFullYear()}, por `}
                    <Link target='_blank' href='https://sisprecisa.com.br/'>
                        Precisa Tecnologia
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default FooterContent
