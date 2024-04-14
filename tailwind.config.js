/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
    // "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [keepPreset],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkPurple: "#060715",
        lightPurple: "#ffff",
        lightText: "#280133",
        hoverBG: "#FF1717",
        fecha: "#7C7C7C",
        rojoClaro: "#FF5B5B",
        azul: "#2134E9",
        redPasion: "#FF1717"
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