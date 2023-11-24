/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      colors: {
        grayCustom: '#6F6F6F',
        deepBlue: '#181824',
        lightBlue: '#25273C'
      },
      fontFamily: {
        comic: ['Comic Neue', 'cursive'],
      }
    },
  },
  plugins: [],
}
