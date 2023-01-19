/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oswald : ['Oswald', 'sans-serif'],
    },
  },
  plugins: [],
  }
}