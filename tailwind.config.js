/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'persian-green' : '#04a38c',
      'raisin-black'  : '#242124',
      'white-smoke'   : '#f4f4f4',
      'blue-violet'   : '#6a51e5',
      'erin-green'    : '#31ce29'
    },
    fontFamily:{
        funnel:"funnel",
        inter :"inter"
    }
  },
  plugins: [],
});

