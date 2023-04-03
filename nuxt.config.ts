// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  devtools: {
    enabled: true,
    vscode: {},
  },
});
