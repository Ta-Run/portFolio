/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        'blue-900': '#3b82f6',
        'gray-300': '#e5e7eb',
        'pink-600': '#e65acb',
        'red-800': '#991b1b',

      },
      fontFamily:{
        Poppins:['Poppins']
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(-180deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },



    },
  },
  plugins: [],
}

