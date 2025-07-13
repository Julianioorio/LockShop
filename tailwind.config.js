/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/styles/index.css", 
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        SFT: ["SF Pro Text", "Time New Roman"],
        SFD: ["SF Pro Display", "sans-serif"],
        HEL: ["HelveticaNeueCyr", "sans-serif"],
        ROB: ["Roboto", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        smO: "290px", // Кастомный БрэйкПоинт
        smT: "400px", // Кастомный БрэйкПоинт
        sm: '640px',
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
