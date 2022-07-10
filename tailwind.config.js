/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'du-purple': {
          50: '#9951B8',
        }
      }
    },
  },
  plugins: [],
}
