/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // container: {
      //   fluid: '',
      // },
      screens: {
        '3xl': '1920px',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      colors: {
        main: '#0a1a2a',
        secondary: '#2f3c4a',
        accent: '#91c2f5',
      },
      opacity: {
        15: '.15',
      },
      width: {
        fullMobile: 'calc(100% + 1.5rem)',
        fullTablet: 'calc(100% + 3rem)',
        fullDesktop: 'calc(100% + 8rem)',
      },
      backgroundColor: {
        card: 'rgba(217, 217, 217, 0.01)',
      },
      backgroundSize: {
        '200': '200%',
      },
      boxShadow: {
        myShadow1: '0px 0px 15px 0px rgba(255, 255, 255, 0.09);',
      }
    },
  },
  plugins: [],
}

