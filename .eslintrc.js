module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    quotes: "off",
    "comma-dangle": "off",
    "import/first": "off",
    "arrow-parens": "off",
    "import/no-extraneous-dependencies": "off",
    "implicit-arrow-linebreak": "off",
    "no-param-reassign": "off",
    "object-curly-newline": "off",
    "object-shorthand": "off",
    "nonblock-statement-body-position": "off",
    curly: "off"
  }
};
