/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        violet: {
          light: '#E0BBE4',
          DEFAULT: '#957DAD',
          dark: '#4B0082',
        },
        accent: '#FFD700',
      }
    },
  },
  plugins: [],
}

