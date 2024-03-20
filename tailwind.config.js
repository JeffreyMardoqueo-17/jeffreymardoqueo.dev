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
        darkPurple: "#17021d",
        lightPurple: "#ffff",
        lightText: "#280133",
        hoverBG: "#e070ff",
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