require('eslint-plugin-react')

module.exports = {
  "extends": "rackt",
  "rules": {
    "valid-jsdoc": 2,
    "no-var": 0,
    "indent": ["error", 2, {"SwitchCase": 1}],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-no-undef": 2,
    "react/wrap-multilines": 2
  },
  "plugins": [
    "react"
  ]
}
