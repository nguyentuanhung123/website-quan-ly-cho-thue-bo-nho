/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '34': "34px",
        '35': "35px",
      },
      colors: {
        gray33: "#333",
        orangefa: "#ffa400"
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
    }
  },
  plugins: [],
}

