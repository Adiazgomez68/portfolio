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
        'primary-dark': "hsl(var(--primary-dark))",
        secondary: "hsl(var(--secondary))",
        tertiary: "hsl(var(--tertiary))"
      },
      fontSize: {
        sm: "15px",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(300px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out',
      },
    },
  },
  plugins: [],
};
