/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: { xs: "376px" },
      fontSize: { xxs: "9px", md: "1rem" },
      lineHeight: { md: "1.50rem" },
      width: {
        100: "28rem",
        104: "30rem",
        108: "32rem",
      },
      colors: {
        main: {
          100: "#eefeff",
          200: "#abe3e7",
          300: "#83cfd4",
          400: "#58c3ca",
          500: "#45abb1",
          600: "#36999f",
          700: "#36999f",
          800: "#1a6266",
          900: "#0f4a4e",
        },
        secondary: {
          100: "#cde9ea",
          200: "#b5dde0",
          300: "#9cd2d5",
          400: "#83c7cb",
          500: "#6abcc0",
          600: "#51b1b6",
          700: "#39a5ab",
          800: "#209aa1",
          900: "#078F96",
        },
      },
    },
  },
  plugins: [],
}
