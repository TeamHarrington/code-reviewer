const env = require('../../env')

const SERVER_DOMAIN =
  env.ENV === 'production' ? env.DOMAIN : `${env.DOMAIN}:${env.PORT}`

module.exports = {
  publicRuntimeConfig: {
    SERVER_DOMAIN,
    GRAPHQL_ENDPOINT: env.GRAPHQL_ENDPOINT,
    ENV: env.ENV
  }
}
