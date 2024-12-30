/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // Automatically centers the container
      padding: '1rem', // Default padding
      screens: {
        sm: '100%', // Full width on small screens
        md: '768px', // Custom width on medium screens
        lg: '1024px', // Custom width on large screens
        xl: '1280px', // Custom width on extra-large screens
      }
    },
    extend: {
      
      colors: {
        background: {
          DEFAULT: '#ffffff',
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
