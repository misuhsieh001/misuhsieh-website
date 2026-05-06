import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // 新增下面這個 i18n 區塊
  i18n: {
    defaultLocale: 'en',       // 預設語言是繁體中文
    locales: ['en','zh-tw'],     // 支援中文與英文
    routing: {
      prefixDefaultLocale: false  // 中文網址不需要加 /zh-tw/，只有英文才加 /en/
    }
  }
});