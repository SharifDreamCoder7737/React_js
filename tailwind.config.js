/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-up": "slide-up 0.7s ease-in-out",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#854d3d",
        secondary: "#4a1e1b",
        brandDark:"#270c03",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          
        }
      }
    },
  },
  plugins: [],
}

