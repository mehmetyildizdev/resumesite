/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "#2E2E2E",
        "dark-2": "#4B4B4B",
        "dark-3": "#A7A7A7",
        "light-1": "#F8F9FA",
        "light-2": "#EFEFF5",
        "light-3": "#DEDDEB",
        "darkgold-1": "281C02",
        "lightgold-1": "#FFFEF0",
        "rosegold-1": "#B76E79",
        "gold-1": "#E2BF36",
        "gold-2": "#C49E5B",
        "silver-1": "#838996",
        "silver-2": "#D9DAD9",
        "silver-3": "#E6E6E6",
      },
    },
  },
  plugins: [],
};
