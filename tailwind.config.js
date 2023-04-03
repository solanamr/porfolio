/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px",
      "2xl": "1660px",
    },
    colors:{
      black: "#000",
      white: "#fff",
      lightGrey: "#f4f4f4",
      red: "#ff3131",
      grey: "#adb5bd",
      darkGrey: "#343a40",
      lightBlue: "#6096ba",

      
    },
    extend: {},
  },
  plugins: [],
}
