/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3111b0",
          secundary: '#d8d9ed'
        },
      },
    },
  },
  plugins: [],
};
