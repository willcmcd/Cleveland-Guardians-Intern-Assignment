/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "light": "#fffcf2",
        "primary": "#ccc5b9",
        "secondary": "#403d39",
        "dark": "#252422",
        "pop": "#eb5e28"
      },
    },
    fontFamily: {
      Avenir: ["Avenir"],
      Helvetica: ["Helvetica"],
      Arial: ["Arial, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true
    },
    screens: {
      sm: "640px",
      md: "768px"
    }
  },
  plugins: [] 
}
