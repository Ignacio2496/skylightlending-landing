const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Incluye tus archivos de páginas
    './components/**/*.{js,ts,jsx,tsx}',
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueFooter: '#0f3788'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};