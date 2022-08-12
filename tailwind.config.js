/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'du-purple': {
          500: '#6B26FF',
          600: '#783D86',
        },
        'du-gray': '#F7FAFC',
      }
    },
  },
  plugins: [],
}
