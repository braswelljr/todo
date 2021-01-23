const color = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    enabled: false,
    preserveHtmlElements: false,
    content: [
      "./public/index.html",
      "./src/**/*.jsx",
      "./src/**/*.js",
      "./src/**/*.tsx",
      "./src/**/*.ts"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: color.trueGray,
        warmGray: color.warmGray,
        blueGray: color.blueGray
      }
    }
  },
  variants: {
    extend: {
      borderColor: ["first", "last", "odd", "even"],
      borderStyle: ["first", "last", "odd", "even"],
      borderWidth: ["first", "last", "odd", "even"],
      translate: ["group-hover"]
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};
