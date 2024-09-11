// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "MyApp",
      meta: [
        { name: 'description', content: 'This is the default description for MySite.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'MySite' },
        { property: 'og:description', content: 'This is the default description for MySite.' },
        { property: 'og:image', content: '/favicon.ico' },
        // Additional default meta tags
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
        // Additional link tags (e.g., for stylesheets)
      ]
    }
  },
})
