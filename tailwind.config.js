module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      gray: {
        50: '#fafafa',
        100: '#ebebeb',
        200: '#dbdbdb',
        300: '#c1c1c1',
        400: '#a1a1a1',
        500: '#818181',
        600: '#616161',
        700: '#414141',
        800: '#2b2b2b',
        850: '#1a1a1a',
        900: '#111111'
      }
    },
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)'
      },
      textColor: {
        primary: 'var(--text-primary)'
      }
    }
  },
  plugins: []
}
