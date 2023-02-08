/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(0, 0%, 100%)',
        secondary: 'hsl(209, 23%, 22%)',
        tertiary: 'hsl(200, 15%, 8%)',

        lightInput: 'hsl(0, 0%, 52%)',
        darkBg: 'hsl(207, 26%, 17%)',
        lightBg: 'hsl(0, 0%, 98%)'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
