import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // 1. 確保這行一定要有

// https://astro.build/config
export default defineConfig({
  // 2. 確保 integrations 這個區塊要有出現
  integrations: [tailwind()],
});