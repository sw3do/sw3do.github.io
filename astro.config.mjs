import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://sw3do.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [icon(), sitemap()],
  build: { inlineStylesheets: 'auto' },
  markdown: {
    shikiConfig: { theme: 'github-dark-default', wrap: true },
  },
});
