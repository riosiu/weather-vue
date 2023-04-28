/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'weather-primary' : '#00668A',
        'weather-secondary' : '#004E71',
      }
    },
    fontFamily:{
      "roboto" : ['Roboto', 'sans-serif']
    }
    ,container:{
      padding: '2rem',
      center: true,
    },
    screen:{
      'sm': '640px',
      'md': '768px',
    }
  },
  plugins: [],
}