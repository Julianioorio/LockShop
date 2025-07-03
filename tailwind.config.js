/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        SFT: ['SF Pro Text', 'sans-serif'],
        SFD: ['SF Pro Display', 'sans-serif'],
        HEL: ['HelveticaNeueCyr', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}