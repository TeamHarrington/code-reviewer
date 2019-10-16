require('dotenv').config()

module.exports = {
  publicRuntimeConfig: {
    SERVER_API: (process.env.SERVER_API = 'http://localhost:3000'),
    GRAPHQL_ENDPOINT: (process.env.GRAPHQL_ENDPOINT = 'graphql')
  }
}
