const path = require('path')
require('dotenv').config({ path: path.join(__dirname, './.env') })

const config = Object.freeze({
  DOMAIN: process.env.DOMAIN || 'http://localhost:3000',
  GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT || 'graphql',
  PORT: process.env.PORT || 3000,
  MONGO_SERVER: process.env.MONGO_SERVER || 'mongodb://localhost:27017/code_reviewer',
  ENV: process.env.NODE_ENV || 'development'
})

module.exports = config
