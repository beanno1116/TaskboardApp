module.exports = {
  root: true,
  env: { 
    "es6":true,
    "browser":true,
    "node":true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    "ecmaVersion": 2021,
    "sourceType":"module",
    "ecmaFeatures":{
        "jsx":true
    }
  },
  settings: { 
    "react":{
    "version":"detect"
} },
  plugins: ["react", "import", "jsx-a11y",'react-refresh'],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope":0,
    "no-unused-vars": 0,
    "no-debugger": 1,
    "react-hooks/exhaustive-deps": 0
  },
}
