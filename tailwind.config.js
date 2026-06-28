/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f2f6f3',
          100: '#e1ece4',
          200: '#c6d9cd',
          300: '#a1beac',
          400: '#759b83',
          500: '#547d64',
          600: '#40624d',
          700: '#354f3f',
          800: '#2c3f33',
          900: '#25352c',
          DEFAULT: '#547d64', // Deep Sage Green (nature, health)
        },
        cream: {
          50: '#fdfcf7',
          100: '#FAF9F6', // Main warm background
          200: '#f3ebd8',
          300: '#e7d8bb',
          400: '#d7c19a',
          DEFAULT: '#FAF9F6',
        },
        coral: {
          50: '#fff5f6',
          100: '#ffebee',
          200: '#ffccd4',
          300: '#ffa1b0',
          400: '#ff6681',
          500: '#ff335b', // Main active strawberry accent
          600: '#e61a43',
          DEFAULT: '#ff335b',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Open Sans', 'sans-serif'],
        accent: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
