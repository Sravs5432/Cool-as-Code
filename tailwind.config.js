const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens:{
        xs:'400px'
      }
    },
  },
  
  plugins: [

  ],
});