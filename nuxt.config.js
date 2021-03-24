import blogConfig from './blog.config';

const server = {
  host: blogConfig.host,
  port: blogConfig.port,
  timing: true
};

export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'myblog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/static/main.css'
  ],
  server,
  serverMiddleware: ['../server/api'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/axios', mode: 'server' },
    '@/plugins/antd-ui',
    '@/plugins/web-font/index',
    '@/plugins/font-awesome'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    baseURL: `http://127.0.0.1:${blogConfig.port}`,
    browserBaseURL: '/',
    proxy: true
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extractCSS: { allChunks: true }
  },
  generate: {
    subFolders: false
  }
}
