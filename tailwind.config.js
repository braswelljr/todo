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
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
