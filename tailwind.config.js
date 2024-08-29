/** @type {import('tailwindcss').Config} */
const { addIconSelectors } = require('@iconify/tailwind');
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // primary: "#2C3E50",
                // secondary: "#3498DB",
                // accent: "#E67E22",
                'text-dark': '#36454F',
                'accent-1': '#E91E63',
                'accent-2': '#00BCD4',
                'text-primary': '#333333',
                'text-secondary': '#6c757d',
                'section-background': '#fcfcfc',
                error: '#FF5252',
                success: '#4CAF50',
            },
            fontFamily: {
                primary: "'Poppins', sans-serif",
            },
            backgroundImage: {
                meshy: "url('/src/assets/mesh.png')",
            },
            keyframes: {
                blob1: {
                    '0% , 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(60px, 40px)' },
                },
                blob2: {
                    '0% , 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(20px, -20px)' },
                },
            },
            animation: {
                pinkCircle: 'blob1 5s ease-in-out infinite',
                blueCircle: 'blob2 5s ease-in infinite',
            },
            screens: {
                xs: '450px',
            },
        },
    },
    plugins: [addIconSelectors(['hugeicons'])],
};
