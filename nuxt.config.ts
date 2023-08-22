// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-headlessui',
    'nuxt-lodash',
    'nuxt-icon',
    'nuxt-icons',
    'nuxt-og-image',
    'nuxt-graphql-client'
  ],

  runtimeConfig: {
    public: {
      GQL_HOST: 'https://hub.snapshot.org/graphql'
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.scss'
  }
})
