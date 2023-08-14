/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
       'be-quy': '#FEF4EC'
      },
      fontFamily : {
        'parisienne' : ['Parisienne'],
        'istok_Web' : ['Istok_Web']
      }
    },
  },
  plugins: [],
}