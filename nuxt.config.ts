// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    'nuxt-swiper',
    '@nuxt/image',
  ],
  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      fallbacks: {
        'serif': ['Times New Roman'],
        'sans-serif': ['Arial'],
        'monospace': ['Courier New'],
        'cursive': [],
        'fantasy': [],
        'system-ui': [
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
        ],
        'ui-serif': ['Times New Roman'],
        'ui-sans-serif': ['Arial'],
        'ui-monospace': ['Courier New'],
        'ui-rounded': [],
        'emoji': [],
        'math': [],
        'fangsong': [],
      },
    },
    
  },
})