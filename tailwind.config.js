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
        'offblack': '#1A1919',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'f40': '40px',
        'f22': '22px',
      },
      spacing: {
        'w62h': '62px',
      },
      backgroundImage: {
        'choosebg': "url('./images/choose-bg.png')",
        'enjoybg': "linear-gradient(0deg, rgb(28 28 28 / 50%), rgb(28 28 28 / 50%)), url('./images/enjoy-bg.png')",
        'enjoybgsm': "linear-gradient(0deg, rgb(28 28 28 / 50%), rgb(28 28 28 / 50%)), url('./images/enjoy-bg-sm.png')",
      },
      animation: {
        'run': 'run 10s linear infinite',
        'run2': 'run2 15s linear infinite',
        'run3': 'run3 15s linear infinite',
        'run4': 'run4 15s linear infinite',
        'run5': 'run5 15s linear infinite',
        'run6': 'run6 15s linear infinite',
        'run7': 'run7 15s linear infinite',
      },
      keyframes: {
        run: {
          '0%': { top: '32px', left: '96px' },
          '20%': { top: '155px', left: '-69px', opacity:'0' },
          '40%': { top: '-65px', left: '-69px', opacity:'0' },
          '60%': { top: '-69px', left: '660px', opacity:'0' },
          '80%': { top: '25px', left: '525px', opacity:'1' },
          '90%': { top: '28px', left: '310px', opacity:'1' },
          '100%': { top: '32px', left: '96px' },
        },
        run2: {
          '0%': { top: '208px', left: '32px' },
          '20%': { top: '100px', left: '121px' },
          '40%': { top: '60px', left: '442px' },
          '60%': { top: '-80px', left: '-72px', opacity:'0' },
          '80%': { top: '264px', left: '-72px', opacity:'0' },
          '100%': { top: '208px', left: '32px', opacity:'1' },
        },
        run3: {
          '0%': { top: '256px', left: '144px' },
          '25%': { top: '208px', left: '354px' },
          '50%': { top: '315px', left: '595px' },
          '75%': { top: '345px', left: '355px'},
          '100%': { top: '256px', left: '144px'},
        },
        run4: {
          '0%': { top: '240px', right: '320px' },
          '20%': { top: '322px', right: '440px', opacity:'0' },
          '40%': { top: '322px', right: '162px', opacity:'0' },
          '60%': { top: '146px', right: '-48px', opacity:'1'},
          '80%': { top: '203px', right: '133px', opacity:'1'},
          '100%': { top: '240px', right: '320px'},
        },
        run5: {
          '0%': { top: '224px', right: '64px' },
          '20%': { top: '107px', right: '128px' },
          '40%': { top: '-63px', right: '89px', opacity:'0' },
          '60%': { top: '57px', right: '-69px', opacity:'1'},
          '80%': { top: '42px', right: '53px', opacity:'1'},
          '100%': { top: '224px', right: '64px'},
        },
        run6: {
          '0%': { top: '112px', right: '0px' },
          '25%': { top: '235px', right: '62px' },
          '50%': { top: '198px', right: '202px'},
          '75%': { top: '84px', right: '113px'},
          '100%': { top: '112px', right: '0px'},
        },
        run7: {
          '0%': { top: '0px', right: '176px' },
          '25%': { top: '45px', right: '335px' },
          '50%': { top: '-65px', right: '470px'},
          '100%': { top: '0px', right: '176px'},
        },
      },
    },
  },
  plugins: [require("limbcss")],
}
