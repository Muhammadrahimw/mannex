/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        1: "0.25em",
        2: "0.5em",
        3: "0.75em",
        4: "1em",
        5: "1.25em",
        6: "1.5em",
        7: "1.75em",
        8: "2em",
        9: "2.25em",
        10: "2.5em",
      },
      fontSize: {
        sm: "0.875em",
        base: "1em",
        lg: "1.125em",
        xl: "1.25em",
        "2xl": "1.5em",
        "3xl": "2em",
      },
    },
  },
  plugins: [],
};
