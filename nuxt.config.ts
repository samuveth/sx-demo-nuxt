// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/eslint-module",
    "nuxt-lodash",
    "nuxt-icon",
    "nuxt-icons",
    "nuxt-og-image",
    "nuxt-graphql-client",
  ],

  runtimeConfig: {
    public: {
      GQL_HOST: "https://hub.snapshot.org/graphql",
    },
  },
  devtools: { enabled: true },
});
