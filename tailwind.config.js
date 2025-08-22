/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.html",
    "./src/public/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1e3a8a",
          golden: "#ffd700"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

