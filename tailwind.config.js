/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        lightblue: '#8b8eeb',
        darkblue: "#1228f3",
        blue: "#07094d",
        blueg: "#141beb"
      }
    },
  },
  plugins: [],
}

