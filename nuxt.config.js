import pkg from './package'

const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      // }
      //       <meta http-equiv="Content-Security-Policy"
      {
        'http-equiv': 'Content-Security-Policy',
        content:
          "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"
      }
    ],
    __dangerouslyDisableSanitizers: ['meta'],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'cordova.js' }, { src: 'js/plugins/LaunchMyApp.js' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/cordova.client'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  serverMiddleware: [
    {
      path: '/nuxtfiles',
      handler: '~/servermiddleware/assets.js'
    }
  ],
  router: {
    mode: 'hash'
  },
  /*
   ** Build configuration
   */
  build: {
    publicPath: '/nuxtfiles/',
    postcss: {
      plugins: {
        // https://nuxtjs.org/api/configuration-build/#postcss
        tailwindcss: tailwindJS
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}