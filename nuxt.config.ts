export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-lazy-load'
  ],
  runtimeConfig: {
    apiKey: process.env.EXTERNAL_API_KEY,
    apiBaseUrl: process.env.API_BASE_URL,
    public: {
      fetchBaseUrl: process.env.API_FETCH_BASE_URL
    }
  }
})
