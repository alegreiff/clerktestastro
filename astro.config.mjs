// @ts-check
import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro'

import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

//import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), tailwind()],

  output: 'server',
  //adapter: vercel(),
  adapter: cloudflare(),
});
