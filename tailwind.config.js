/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        body: 'hsl(216, 12%, 8%)',
        tiles: 'hsl(213, 19%, 18%)',
      },
      fontFamily:{

      }
    },

  },
  plugins: [],
}

