/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      fontFamily: {
          outfit: ['outfit-extra-light', 'sans-serif'],
          'outfit-bold': ['outfit-semi-bold', 'sans-serif']
      },

      colors: {
        'almost-white': '#FAFAFA',
        'light-coral': '#FA9984',
        'coral': '#FA795D',
        'dark-green': '#233329'
      }
    },
  },
  plugins: [require('daisyui')],
}

