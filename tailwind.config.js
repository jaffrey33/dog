/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'moon': {
          '50': '#f9f5ff',
          '100': '#f1e9fe',
          '200': '#e7d9fe',
          '300': '#d1b6fc',
          '400': '#b587f9',
          '500': '#9959f3',
          '600': '#8238e5',
          '700': '#6e26ca',
          '800': '#5e24a5',
          '900': '#4e1f84',
          '950': '#320962',
      },
      
      }
    },
    backgroundImage:{
      'home': "url('./src/images/homebg.png')",
      'hero': "url('./src/images/pawsbg.png')",
    }
 
  },
  plugins: [],
}