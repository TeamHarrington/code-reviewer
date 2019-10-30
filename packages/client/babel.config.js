module.exports = api => {
  const presets = ['next/babel', '@babel/preset-env', '@babel/preset-react']
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
