const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white:colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      yellow: colors.amber
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      nuni: ['Nunito']
    },
    scale: {
      '25': '.25',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}