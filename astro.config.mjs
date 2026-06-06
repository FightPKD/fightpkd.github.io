// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pkdcuretracker.com',
  integrations: [sitemap({
    filter: (page) => !page.includes('/report/thanks')
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});