// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    watcher: "parcel",
  },
  ssr: false,
  css: [
    "~/assets/styles/quasar.scss",
    "quasar/dist/quasar.prod.css",
    "@quasar/extras/material-icons/material-icons.css",
  ],
  modules: ["@nuxt/devtools"],
  build: {
    transpile: ["quasar"],
  },
  vite: {
    define: {
      __QUASAR_SSR_SERVER__: false,
      __QUASAR_SSR_CLIENT__: false,
    },
  },
  devtools: {
    enabled: true,
    vscode: {},
  },
});
