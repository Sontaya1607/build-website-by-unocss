// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/vars.css',
    '~/assets/default-theme.css',
  ],

  compatibilityDate: '2024-07-03',
})
