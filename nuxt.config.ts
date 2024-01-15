export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    apiKey: process.env.EXTERNAL_API_KEY,
    apiBaseUrl: process.env.API_BASE_URL,
    public: {
      imgBaseUrl: ''
    }
  }
})
