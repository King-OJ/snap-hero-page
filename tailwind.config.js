/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        almostWhite: 'hsl(0, 0%, 98%)',
        almostBlack: 'hsl(0, 0%, 8%)',
        mediumGray: 'hsl(0, 0%, 41%)'
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif']
      }
    }
  },
  plugins: [],
}
