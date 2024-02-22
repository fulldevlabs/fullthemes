// TODO zie fullui-starter voor nieuwe versie van astro config
// TODO zie fullui-starter voor repo config, dus ook prettierconfig etc
// TODO zie ook packagejson voor de packages

import sitemap from '@astrojs/sitemap'
import { fulluiIntegration } from '@fulldevlabs/fullui/src/integration/fulluiIntegration'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
// @ts-ignore
import bookshop from '@bookshop/astro-bookshop'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: import.meta.env?.PUBLIC_APP_URL || 'https://localhost:4321',
  integrations: [
    sitemap(),
    robotsTxt(),
    bookshop(),
    UnoCSS(),
    fulluiIntegration({
      scheme: 'light',
      hue: {
        base: 'mauve',
        accent: 'jade',
      },
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        external: ['astro:content'],
      },
    },
  },
})
