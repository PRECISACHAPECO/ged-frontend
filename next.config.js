/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

// Importe as configurações de withPWA e withTM
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    disable: true,
    skipWaiting: true,
    runtimeCaching: require('next-pwa/cache'), // 
    buildExcludes: [/middleware-manifest.json$/],
})

const withTM = require('next-transpile-modules')([
    '@fullcalendar/common',
    '@fullcalendar/react',
    '@fullcalendar/daygrid',
    '@fullcalendar/list',
    '@fullcalendar/timegrid',
])

module.exports = withPWA(
    withTM({
        trailingSlash: true,
        reactStrictMode: false,
        experimental: {
            esmExternals: false
        },
        webpack(config) {
            config.resolve.alias = {
                ...config.resolve.alias,
                apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
            }
            return config
        },
    })
)
