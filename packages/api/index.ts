import ExpressServer, { Express } from 'express'
import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express'
import GraphQLServer from './apollo-server'
import config from './config'

export interface ExpressAppConfig extends ApolloServerExpressConfig {
  graphqlEndpoint: string
}

export interface ExpressApolloServer extends Express {
  apolloServer: ApolloServer
}

const ExpressApolloApp = async ({
  graphqlEndpoint,
  ...apolloConfigs
}: ExpressAppConfig): Promise<ExpressApolloServer> => {
  const app = ExpressServer() as ExpressApolloServer
  const apolloServer = GraphQLServer(apolloConfigs)
  app.apolloServer = apolloServer

  apolloServer.applyMiddleware({
    app,
    path: `/${graphqlEndpoint}`
  })
  return app
}

export { config }
export default ExpressApolloApp
