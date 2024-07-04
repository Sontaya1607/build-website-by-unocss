// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/vars.css',
  ],

  compatibilityDate: '2024-07-03',
})
