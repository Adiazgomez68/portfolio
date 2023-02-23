/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,jsx,ts,tsx}",
    "./core/layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#242424",
        secondary: "#DFDFDF",
      },
      fontSize: {
        sm: "15px",
      },
    },
  },
  plugins: [],
};
