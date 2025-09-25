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
        primary: "hsl(var(--primary))",
        "primary-dark": "hsl(var(--primary-dark))",
        secondary: "hsl(var(--secondary))",
        tertiary: "hsl(var(--tertiary))",
        "subtle-glow": "hsl(var(--subtle-glow))",
        forty: "hsl(var(--forty))",
      },
      fontSize: {
        sm: "15px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px) scale(0.9)" },
          "60%": { opacity: 1, transform: "translateY(-6px) scale(1.08)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        fadeDown: {
          "0%": { opacity: 1, transform: "translateY(0) scale(1)" },
          "40%": { opacity: 1, transform: "translateY(10px) scale(1.05)" },
          "100%": { opacity: 0, transform: "translateY(300px) scale(0.96)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 650ms cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-down": "fadeDown 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in .1s ease-in-out",
        typing: "typing 3.5s steps(40, end)",
      },
    },
  },
  plugins: [],
};
