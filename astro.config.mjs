// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 👇 הוסף את השורה הזו (תחליף בכתובת האמיתית שלך)
  site: 'https://my-glossary.pages.dev', 

  integrations: [sitemap()],
});