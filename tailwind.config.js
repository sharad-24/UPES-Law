module.exports = {
  content: ['./src/**/*.{html,js}' , './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
          'ubuntu' : 'Ubuntu, sans-serif',
      },
      lineHeight: {
          
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.0rem',
        '3xl': '1.2rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        'custom': '0.8'

      },
      fontWeight: {
        bold: 700,

      },
      backgroundColor: theme => ({
          ...theme('colors'),
      }),
      textColor: theme => ({
          ...theme('colors'),
      }),
      extend: {
          colors: {
        'nav': '#cd159c',
        'purpel': '#a218dd',
      },
    },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}
