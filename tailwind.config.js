/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': "linear-gradient(90deg, rgba(22,26,48,1) 0%, rgba(49,48,77,1) 33%)",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light-blue': '#EAF2F9',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'main': '#161A30',
      'secondary': '#31304D',
      'third': '#B6BBC4',
      'forth': '#F0ECE5',
      'grd': "linear-gradient(90deg, rgba(22,26,48,1) 0%, rgba(49,48,77,1) 33%)",
      'gold': {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
        950: '#451a03',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"

}

