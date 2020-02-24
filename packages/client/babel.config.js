module.exports = api => {
  const presets = ['next/babel', '@babel/preset-env', '@babel/preset-react']
  api.cache(true)

  const plugins = [
    [
      '@babel/transform-runtime',
      {
        regenerator: true
      }
    ],
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true
      }
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator'
  ]

  return {
    presets,
    plugins
  }
}
