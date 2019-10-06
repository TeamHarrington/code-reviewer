import schema from './schema'
import { ApolloServerExpressConfig, ApolloServer } from 'apollo-server-express'

const GraphQLServer = (config?: ApolloServerExpressConfig): ApolloServer => {
  const server = new ApolloServer({ schema, ...config })

  return server
}

export default GraphQLServer
