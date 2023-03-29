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
        wiggle: "wiggle 1s ease-in-out infinite",
        backwards: "backwards 1s linear infinite",
      },
      keyframes: {
        enter: {
          "0%": { transform: "scale(0.2)" },
          "100%": { transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        backwards: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      screens: {
        middle: "830px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
