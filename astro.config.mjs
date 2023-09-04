import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
   integrations: [tailwind()],
   plugins: ['prettier-plugin-astro'],
   overrides: [
      {
         files: '*.astro',
         options: {
            parser: 'astro',
         },
      },
   ],
   output: 'hybrid'
});