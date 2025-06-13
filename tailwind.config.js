/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opens: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        verdana: ["Verdana", "Geneva", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
