module.exports = {
  extends: "airbnb-base",
  rules: {
    quotes: ["error", "double"],
    "no-use-before-define": ["error", { functions: false, classes: true }],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
  }
};
