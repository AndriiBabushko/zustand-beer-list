/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': 'rgb(44, 50, 62)'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
