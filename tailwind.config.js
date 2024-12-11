/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#f1f0e8',
          dark: '#000000',
        },
        foreground: {
          DEFAULT: '#171717',
          dark: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
