export default defineNuxtConfig({
  compatibilityDate: '2026-04-07',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components/dashboard',
      pathPrefix: false
    },
    {
      path: '~/components/ui',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Brewlytics',
      titleTemplate: '%s · Brewlytics',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Smart coffee shop SaaS dashboard for analytics, orders, inventory, and customer insights.'
        },
        {
          property: 'og:title',
          content: 'Brewlytics'
        },
        {
          property: 'og:description',
          content: 'A polished SaaS control center for modern coffee operators.'
        }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        }
      ]
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/analytics': { prerender: true },
    '/orders': { prerender: true },
    '/inventory': { prerender: true },
    '/customers': { prerender: true }
  }
})
