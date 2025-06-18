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
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
};
