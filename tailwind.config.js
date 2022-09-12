/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'du-purple': {
          500: '#6B26FF',
          600: '#783D86',
        },
        'du-gray': '#F7FAFC',
        'du-indigo': {
          900: '#151A35',
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
