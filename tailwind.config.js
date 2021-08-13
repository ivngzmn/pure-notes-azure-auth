module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", ".views/**/*.ejs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
