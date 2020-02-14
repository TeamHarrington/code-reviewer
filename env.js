const path = require('path')
require('dotenv').config({ path: path.join(__dirname, './.env') })

const config = Object.freeze({
  DOMAIN: process.env.DOMAIN || 'http://localhost',
  GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT || 'graphql',
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV || 'development'
})

module.exports = config
