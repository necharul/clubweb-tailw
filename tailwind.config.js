/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      colors: {
        'black': '#080707',
        'blue': '#3775ED',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("limbcss")],
}
