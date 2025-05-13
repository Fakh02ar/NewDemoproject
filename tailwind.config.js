/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          dark: "#141414",
          light: "#c5c3b9",
        },
        fontWeight: {
          light: "300",
        },
      },
    },
    plugins: [],
  }
  