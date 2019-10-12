module.exports = function(api) {
  const presets = ['next/babel']
  api.cache(true)

  const plugins = [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true
      }
    ]
  ]

  return {
    presets,
    plugins
  }
}
