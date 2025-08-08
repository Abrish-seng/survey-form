/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6f6ff',
          100: '#e7e7ff',
          200: '#c7c6ff',
          300: '#a3a1ff',
          400: '#7f7dff',
          500: '#5d59ff',
          600: '#3f3aff',
          700: '#2e2ae6',
          800: '#2421b4',
          900: '#1d1b8c',
        },
      },
      boxShadow: {
        'glow': '0 0 0 1px rgba(255,255,255,0.08), 0 15px 50px rgba(0,0,0,0.35)'
      }
    },
  },
  plugins: [],
}