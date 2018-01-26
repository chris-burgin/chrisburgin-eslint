module.exports = {
  ecmaFeatures: {
    modules: true
  },

  env: {
    browser: true,
    es6: true
  },

  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  globals: {},

  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "callback-return": [2, ["callback", "cb", "next", "done", "proceed"]],
    camelcase: [1, { properties: "always" }],
    "comma-style": [2, "last"],
    curly: [2],
    eqeqeq: [2, "always"],
    "eol-last": [1],
    "handle-callback-err": [2],
    indent: [1, 2, { SwitchCase: 1 }],
    "linebreak-style": [2, "unix"],
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "no-return-assign": [2, "always"],
    "no-sequences": [2],
    "no-trailing-spaces": [1],
    "no-undef": [0],
    "no-unexpected-multiline": [1],
    "no-unused-vars": [1],
    "one-var": [2, "never"],
    quotes: [1, "double", { avoidEscape: false, allowTemplateLiterals: true }],
    semi: [2, "never"]
  },

  plugins: ["react"]
};
