/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'rem38': '38rem',
      },
      height: {
        '125': '125%',
      }
    },
  },
  plugins: [],
}

