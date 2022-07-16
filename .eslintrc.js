module.exports = {
  "extends": [
    "react-app",
    "react-app/jest",
    "eslint:recommended", 
    "plugin:react/recommended"],
  rules: {
    semi: [2, 'always'],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  }
};
