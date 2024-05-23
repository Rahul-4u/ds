/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "678px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },

      fontFamily: {
        bodyFont: ["Open_Sans", " sans-serif"],
        titelFont: ["font-sans", "Robato"],
      },
      boxShadow: {
        shadow: "5px 5px 5px #lcle22, -5px -5px -5px #262a2c ",
      },
  

      gridTemplateColumns: {
        "70/30": "70%/30%",
      },
    },
  },
  plugins: [],
}

