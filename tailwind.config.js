/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'san-serif'],
        'inter': ['Inter', 'san-serif'],
      },
      colors: {
        'du-purple': {
          100:'#5C456E',
          200: '#E7E1F6',
          300: '#EEEAF8',
          500: '#6B26FF',
          600: '#783D86',
          700: '#6216F8',
          800: '#9747FF'
        },
        'du-gray': '#F7FAFC',
        'du-indigo': {
          900: '#151A35',
        },
        'du-lightAqua': '#00FFFF',
        'du-deepPurple': '#1E2445',
        'du-lightPurple': '#C86DFF',
        'du-charcoal-gray':'#4B4B4B',
        'du-lightBlue':'#F1F6FE',
        'du-darkBlue': '#4273D6',
        'event-tags' : {
          'conference': '#F6BAC5',
          'training': '#A0EFEA',
          'meetup': '#C9DC94',
          'hackathon': '#5FA3C4',
          'other': '#5675C3',
          'webinar': '#E2B1FF',
          'session': '#05BFB4',
          'workshop': '#E1B1FF',
        },
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
