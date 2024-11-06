/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            animation: {
                car: 'moveCar 3s linear ',
            },
            keyframes: {
                moveCar: {
                    '0%': {transform: 'translateX(100%)'},  // Start off-screen to the right
                    '100%': {transform: 'translateX(-100%)'}, // Move off-screen to the left
                },
            },
            colors: {
                "primary": "var(--primary-color)",
                "light-gray": "#EDFAFA"
            },
            fontFamily: {
                bold: 'bold',
                medium: 'medium',
                regular: 'regular',
                extraBold: 'extraBold',
                thin: 'thin'
            },
        },
    },
    plugins: [],
}

