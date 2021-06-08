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
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      yellow: colors.amber,
      indingo: colors.indigo,
     
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      nuni: ['Nunito']
    },
    scale: {
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        blue: '0 4px 14px 0 rgba(19, 51, 81, 0.39)',
        bluexl: '0 6px 16px 0 rgba(19, 51, 81, 0.39)',
        yellow: '0 4px 14px 0 rgba(255,197,75,1)',
        white: '0 4px 14px 0 rgba(255,255,255,0.39)',
      },
    }


  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}