import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ["~/assets/app.css"],

  runtimeConfig: {
    public: {
      microsoftClientId: process.env.NUXT_MICROSOFT_CLIENT_ID,
      microsoftTenant: process.env.NUXT_MICROSOFT_TENANT,
    }
  },

  modules: ["@sidebase/nuxt-auth"],

  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: 'http://localhost:3000/api/auth',
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'azure',
      addDefaultCallbackUrl: true
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    }
  }
})