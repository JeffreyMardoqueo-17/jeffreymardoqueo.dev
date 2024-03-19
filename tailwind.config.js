/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkPurple: "#280133",
        lightPurple: "#ffff",
        lightText: "#280133",
        hoverBG: "#e4b6ffc7", 
      },
    },
  },
  variants: {
    extend: {
      textColor: ["dark"],
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
};
