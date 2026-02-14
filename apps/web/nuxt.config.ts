export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  nitro: {
    preset: 'node-server'
  },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
    '~/assets/css/animations.css'
  ],
  runtimeConfig: {
    apiBase: process.env.NUXT_API_BASE ?? 'http://localhost:4000/api',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? '/api'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s | Globaltechno',
      meta: [
        {
          name: 'description',
          content:
            'Globaltechno builds AI agents and intelligent automation for enterprises. Cybersecurity, digital identity, and cloud-native engineering.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'theme-color',
          content: '#0A0A0B'
        },
        {
          property: 'og:image',
          content: `${process.env.NUXT_PUBLIC_SITE_URL ?? 'https://globaltechno.eu'}/og-default.svg`
        }
      ],
      link: [
        { rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://globaltechno.eu' }
      ]
    }
  },
  routeRules: {
    '/**': {
      headers: {
        'content-security-policy':
          "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com; connect-src 'self' https: http:; font-src 'self' data: https://fonts.gstatic.com https://cdn.fontshare.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
      }
    },
    '/robots.txt': { headers: { 'content-type': 'text/plain; charset=utf-8' } },
    '/sitemap.xml': { headers: { 'content-type': 'application/xml; charset=utf-8' } }
  },
  compatibilityDate: '2025-01-15'
});
