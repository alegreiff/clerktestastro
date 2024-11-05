// @ts-check
import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro'
import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), tailwind()],
  output: 'server',
  adapter: vercel()
});