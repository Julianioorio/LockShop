/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Охватывает все файлы внутри src, включая app/
    "./src/app/styles/index.css",        // Добавь этот путь, если используешь utility-классы в index.css
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        SFT: ['SF Pro Text', 'Time New Roman'],
        SFD: ['SF Pro Display', 'sans-serif'],
        HEL: ['HelveticaNeueCyr', 'sans-serif'],
        ROB: ['Roboto', 'sans-serif'],    
      },
    },
  },
  plugins: [],
}