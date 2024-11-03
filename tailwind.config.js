/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        pink: "var(--pink)",
        grey: "var(--grey)",
        "grey-light": "var(--grey-light)",
        red: "var(--red)",
      },
      fontFamily: {
        roboto: "var(--font-family)",
        second: "var(--second-family)",
        third: "var(--third-family)",
      },
      screens: {
        vsm: "400px",
      },
    },
  },
  plugins: [],
};
