/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      sans: ["jaf-facitweb", "sans-serif"],
    },

    extend: {
      fontSize: {
        biggie: "calc(1.6em + 1.6vw)",
      },
      animation: {
        enter: "enter 0.4s",
      },
      keyframes: {
        enter: {
          "0%": { transform: "scale(0.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
