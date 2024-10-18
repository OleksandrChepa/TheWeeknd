module.exports = {
  '*.{js,jsx}': ['eslint --fix ./src'],
  '*.{js,jsx,css,mjs}': ['prettier --write'],
};