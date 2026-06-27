import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages + custom domain (mattisonfamily.org) deployment
export default defineConfig({
  site: 'https://mattisonfamily.org',
  integrations: [tailwind()],
});
