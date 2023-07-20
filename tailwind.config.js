/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FC4445',    
        secondary: '#006672',  
        red:{
          100:'#FC4445'
        },
        blue: {
          100: '#CAFAFE',  
          200: '#3FEEE6',
          300: '#97CAEF',
          400: '#006672'
        }
      }
    },
  },
  plugins: [],
}
