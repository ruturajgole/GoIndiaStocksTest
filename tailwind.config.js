/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        searchBar: "#e8e4e4",
        sideBar: "#203c64",
        featuredCompaniesBar: "#e8f4fc",
        background: "#f8f4f4",
        wineRed: "#b0241c",
        ochre: "#f0cc5c"
      },
    },
  },
  plugins: [],
}

