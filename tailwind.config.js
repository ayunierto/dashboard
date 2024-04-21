/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "Arial", "SFMono-Regular"],
      roboto: ["Roboto", "Arial", "SFMono-Regular"],
    },
  },
  darkMode: "selector",
  plugins: [],
};
