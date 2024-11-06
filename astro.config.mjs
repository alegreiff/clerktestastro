// @ts-check
import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro'

import tailwind from '@astrojs/tailwind';



import vercel from '@astrojs/vercel/serverless';



// https://astro.build/config
export default defineConfig({
  integrations: [clerk({
    // Learn more at https://clerk.com/docs/astro

  }), tailwind()],

  output: 'server',
  adapter: vercel(),
});