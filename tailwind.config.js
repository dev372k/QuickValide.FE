/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        secondary: "#3498DB",
        accent: "#E67E22",
        "text-dark": "#36454F",
      },
    },
  },
  plugins: [],
};
