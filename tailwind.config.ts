import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-orange': '#f3a424',
        'coffee-bg': '#111111',
        'coffee-dark': '#1b1b1b',
        'coffee-gray': '#bebebe',
        'coffee-accent': '#202020',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};

export default config;
