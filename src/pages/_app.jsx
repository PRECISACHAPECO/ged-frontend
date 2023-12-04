// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports

import { defaultACLObj } from 'src/configs/acl'
import themeConfig from 'src/configs/themeConfig'

// ** Fake-DB Import
import 'src/@fake-db'

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import AclGuard from 'src/@core/components/auth/AclGuard'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import AuthGuard from 'src/@core/components/auth/AuthGuard'
import GuestGuard from 'src/@core/components/auth/GuestGuard'
import WindowWrapper from 'src/@core/components/window-wrapper'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Contexts
import { AuthProvider } from 'src/context/AuthContext'
import { NotificationProvider } from 'src/context/NotificationContext'
import { ParametersProvider } from 'src/context/ParametersContext'
import { RouteProvider } from 'src/context/RouteContext'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'src/iconify-bundle/icons-bundle-react'

// ** Global css styles
import '../../styles/globals.css'
import { useContext, useEffect } from 'react'
import { FormProvider } from 'src/context/FormContext'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
    Router.events.on('routeChangeStart', () => {
        NProgress.start()
    })
    Router.events.on('routeChangeError', () => {
        NProgress.done()
    })
    Router.events.on('routeChangeComplete', () => {
        NProgress.done()
    })
}

const Guard = ({ children, authGuard, guestGuard }) => {
    if (guestGuard) {
        return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
    } else if (!guestGuard && !authGuard) {
        return <>{children}</>
    } else {
        return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
    }
}

// ** Configure JSS & ClassName
const App = props => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

    // Variables
    const contentHeightFixed = Component.contentHeightFixed ?? false

    const getLayout =
        Component.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)
    const setConfig = Component.setConfig ?? undefined
    const authGuard = Component.authGuard ?? true
    const guestGuard = Component.guestGuard ?? false
    const aclAbilities = Component.acl ?? defaultACLObj

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                {/* Next PWA */}
                <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
                <link rel='mask-icon' href='/icons/favicon.ico' color='#5bbad5' />
                <link rel='manifest' href='/manifest.json' />
                <meta name='msapplication-TileColor' content='rgb(74, 139, 87)' />
                <meta name='theme-color' content='rgba(0, 0, 0, 0.9)' />

                <meta
                    name='description'
                    content={`${themeConfig.templateName} – Software para as Boas Práticas de Fabricação (BPF)`}
                />
                <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' />
                <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>
            <RouteProvider>
                <ParametersProvider>
                    <FormProvider>
                        <AuthProvider>
                            <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
                                <SettingsConsumer>
                                    {({ settings }) => {
                                        return (
                                            <NotificationProvider>
                                                <ThemeComponent settings={settings}>
                                                    <WindowWrapper>
                                                        <Guard authGuard={authGuard} guestGuard={guestGuard}>
                                                            <AclGuard
                                                                aclAbilities={aclAbilities}
                                                                guestGuard={guestGuard}
                                                            >
                                                                {getLayout(<Component {...pageProps} />)}
                                                            </AclGuard>
                                                        </Guard>
                                                    </WindowWrapper>
                                                    <ReactHotToast>
                                                        <Toaster
                                                            position={settings.toastPosition}
                                                            toastOptions={{ className: 'react-hot-toast' }}
                                                            style={{ zIndex: 999999 }}
                                                        />
                                                    </ReactHotToast>
                                                </ThemeComponent>
                                            </NotificationProvider>
                                        )
                                    }}
                                </SettingsConsumer>
                            </SettingsProvider>
                        </AuthProvider>
                    </FormProvider>
                </ParametersProvider>
            </RouteProvider>
        </CacheProvider>
    )
}

export default App
