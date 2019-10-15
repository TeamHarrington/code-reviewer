require('dotenv').config()

module.exports = {
  publicRuntimeConfig: {
    COMIC_SERVER_API: process.env.COMIC_SERVER_API,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT
  }
}
