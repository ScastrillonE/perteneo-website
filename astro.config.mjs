// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://perteneo.com',
  integrations: [
    tailwind({
      applyBaseStyles: true
    }),
    react()
  ],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});