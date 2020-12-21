module.exports = {
  purge: ["./build/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-purple": "#b1096d",
        "custom-orange": "#ffb00e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
