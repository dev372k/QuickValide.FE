/** @type {import('tailwindcss').Config} */
const { addIconSelectors } = require("@iconify/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#2C3E50",
        // secondary: "#3498DB",
        // accent: "#E67E22",
        "text-dark": "#36454F",
        "accent-1": "#E91E63",
        "accent-2": "#00BCD4",
        "text-primary": "#333333",
        "text-secondary": "#A0A0A0",
        "section-background": "#fcfcfc",
        error: "#FF5252",
        success: "#4CAF50",
      },
      fontFamily: {
        primary: "'Poppins', sans-serif",
      },
      backgroundImage: {
        meshy: "url('/src/assets/mesh.png')",
      },
    },
  },
  plugins: [addIconSelectors(["hugeicons"])],
};
