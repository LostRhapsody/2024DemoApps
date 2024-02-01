// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false
  },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    apiToken: "123", // `dev_token` is the default value
  }
})
