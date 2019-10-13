import ExpressServer, { Express } from 'express'
import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express'
import GraphQLServer from './apollo-server'

export interface ExpressAppConfig {
  routeDirectory?: string
}

export interface ExpressApolloServer extends Express {
  apolloServer: ApolloServer
}

const ExpressApolloApp = (
  configs?: ExpressAppConfig,
  apolloConfigs?: ApolloServerExpressConfig
): ExpressApolloServer => {
  // TODO: delete console.log
  console.log('Unused server params for now:', configs, apolloConfigs)

  const app = ExpressServer() as ExpressApolloServer
  const apolloServer = GraphQLServer(apolloConfigs)
  app.apolloServer = apolloServer

  apolloServer.applyMiddleware({
    app
  })
  return app
}

export default ExpressApolloApp
