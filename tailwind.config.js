/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Geist', 'Satoshi', 'Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.10)',
        accent: '#A685E2',
        primary: '#232946',
        secondary: '#E3E3E3',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}