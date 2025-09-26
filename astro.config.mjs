// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://perteneo.com',
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: true
    }),
    react()
  ],
  build: {
    inlineStylesheets: 'always',
    assets: '_astro'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  },
  compressHTML: true
});