/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#e8e034",
      },
      backgroundColor: {
        '07060e': '#07060e',
      },
    },
  },
  plugins: [],
}

