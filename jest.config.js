module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    ".*\\.(js)$": "babel-jest"
  }
}
