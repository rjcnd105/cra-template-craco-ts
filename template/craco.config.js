const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  {
    autoLabel: true,
    labelFormat: '[local]',
  },
)

module.exports = function({ env, paths }) {
  return {
    babel: {
      plugins: [...emotionBabelPreset.plugins],
    },
  }
}
