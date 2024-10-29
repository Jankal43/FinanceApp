/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'rem38': '38rem', // Dodaj niestandardową szerokość
      },
      height: {
        '125': '125%',
      }
    },
  },
  plugins: [],
}

