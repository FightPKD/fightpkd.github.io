// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fightpkd.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});