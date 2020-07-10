import schema from './schema'
import { ApolloServerExpressConfig, ApolloServer } from 'apollo-server-express'

const GraphQLServer = (config?: ApolloServerExpressConfig): ApolloServer => {
  const server = new ApolloServer({
    schema,
    ...config,
    context: async ({ req }) => {
      const auth = (req.headers && req.headers.authorization) || ''
      return { userID: auth }
    }
  })

  return server
}

export default GraphQLServer
