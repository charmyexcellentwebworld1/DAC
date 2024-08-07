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
        '3xl': '1760px',
        'max-2xl': '1760px',
      },
      
    },
    fontSize: {
      sm: '1rem',
      base: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.4rem',
      '3xl': '1.5rem',//24px
      '4xl': '2rem', //32px
      '5xl': '2.5rem', //40px
    },
    extend: {
      animation: {
        'rotate': 'rotate 7s infinite linear',
      },
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(359deg)'
          }
        }
      },
      boxShadow: {
        'shadow-custom': '0 -25px 0px 0 #fafafa',
        'button-shadow': 'inset -1.49px -14.14px 14px #10141C',
      },
      colors: {
        'custom-darkblue': 'rgb(40 51 71 / 60%)', 
        'blue-overlay' :'#28334763',
        'custom-lightblue': '#283347',
        'dark-blue': '#28334766',
        'custom-blue':'#2C374A', 
        'custom-gray': '#EBEBEB',
        'normal-text': 'rgb(255 255 255 / 40%)',
        'white-light': 'rgb(255 255 255 / 60%)',
    },
    fontFamily: {
      LufgaMedium: ['"Lufga"'],
      LufgaBold: ['"Lufga"'],
      LufgaRegular: ['"Lufga"'],
      Cyberfall: ['"Cyberfall"'],
    },
    height: {
      '153': '9.5rem',
    },
    backgroundImage: {
      'header-left-lg': "url('dist/assets/images/header-left-lg.png')",
      'footer-bg': "url('../dist/assets/images/DAC-footer-text.svg')",
      'qr-border': "url('../dist/assets/images/qr-border.svg')",
      // 'active-bg': 'linear-gradient(180deg, #283347, #FFFFFF00) 1',
      'custom-gradient': 'linear-gradient(180deg, #364561 0%, #151B25 100%)',
      'homebanner-gradient':'linear-gradient(179deg, #28334700 0%, #283347 100%)',
      'video-gradient': 'linear-gradient(331deg, #283347 0%, #FFFFFF00 100%)',
      'about-img':'linear-gradient(17deg, #283347 0%, #FFFFFF00 30%)',
    },
    backgroundPosition: {
      '11px-50': '11px 50%',
    },
    objectPosition: {
      'custom': '215px 0px',
    },
    textShadow: {
      'custom': '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff',
    },
    inset: {
      'custom-left': 'calc(52.5% + 50px)',
      'sm-custom-left': 'calc(42% + 50px)',
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-custom': {
          textShadow: '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff',
        },
        '.border-gradient': {
          borderImage: 'linear-gradient(180deg, #283347, #FFFFFF00) 1',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}};
