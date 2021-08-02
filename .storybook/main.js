module.exports = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    })
    return config;
  }
}