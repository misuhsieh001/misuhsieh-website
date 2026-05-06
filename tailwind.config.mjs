/** @type {import('tailwindcss').Config} */
export default {
  // 這是最關鍵的一行，告訴 Tailwind 去哪裡找你寫的 Class
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}