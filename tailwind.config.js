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

      },
      fontWeight: {

      },
      backgroundColor: theme => ({
          ...theme('colors'),
      }),
      textColor: theme => ({
          ...theme('colors'),
      }),
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
}
