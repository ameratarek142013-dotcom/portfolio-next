/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#14121f",
        surface: "#221f38",
        surface2: "#2a2648",
        border: "#342f52",
        ink: "#ece9f7",
        dim: "#9c97b8",
        faint: "#6b6690",
        gold: "#f2b84b",
        teal: "#5eead4",
        pink: "#f472b6",
        sky: "#8ab4f8",
        red: "#f2726b",
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
