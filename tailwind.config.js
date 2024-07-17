/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem', // 16px padding
      'default': '1488px',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1520px',
        // '2xl': '1760px',
      },
    },
    fontSize: {
      sm: '1rem',
      base: '1.125rem',
      // xl: '1.25rem',
      // '2xl': '1.563rem',
      // '3xl': '1.953rem',
      '4xl': '2rem', //32px
      '5xl': '2.5rem', //40px
    },
    extend: {
      boxShadow: {
        'shadow-custom': '0 -25px 0px 0 #fafafa',
      },
      colors: {
        'custom-darkblue': 'rgb(40 51 71 / 60%)', 
        'blue-overlay' :'#28334763',
        'custom-lightblue': '#283347',
        'custom-blue':'#2C374A', 
        'custom-gray': '#EBEBEB',
        'normal-text': 'rgb(255 255 255 / 40%)',
    },
    fontFamily: {
      LufgaMedium: ['"Lufga"'],
      LufgaBold: ['"Lufga"'],
      Cyberfall: ['"Cyberfall"'],
    },
    height: {
      '153': '9.5rem',
    },
    backgroundImage: {
      'header-left-lg': "url('dist/assets/images/header-left-lg.png')",
      'custom-gradient': 'linear-gradient(180deg, #364561 0%, #151B25 100%)',
      'homebanner-gradient':'linear-gradient(179deg, #28334700 0%, #283347 100%)',
      'video-gradient': 'linear-gradient(331deg, #283347 0%, #FFFFFF00 100%)',
    },
    objectPosition: {
      'custom': '215px 0px',
    },
    textShadow: {
      'custom': '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff',
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff',
        },
      })
    }),
  ],
}
}
