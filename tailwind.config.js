/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      height: theme => ({
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-85': '85vh',
        'screen-90': '90vh',

      }),

      width: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      },

      zIndex: {
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        '110': 110,
        '120': 120,
        '130': 130,
        '140': 140,
        '150': 150,
        '9999': 9999,
        'auto': 'auto',
      },

      colors: {
        accent1: {
          '50': '#f8f8f8',
          '100': '#dedede',
          '200': '#bfbfbf',
          '300': '#8d8d8d',
          '400': '#6c6a6a',
          '500': '#4c4b4b',
          '600': '#343434',
          '700': '#1a1a1a',
          '800': '#000000'
        },



      },

      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
        'width': 'width',
      },
    },
  },
  plugins: [],
}

