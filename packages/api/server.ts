import ExpressServer, { Express } from 'express'
import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express'
import GraphQLServer from './apollo-server'
import Mongoose from 'mongoose'

const startMongoConnection = async () => {
  return Mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

export interface ExpressAppConfig {
  routeDirectory?: string
}

export interface ExpressApolloServer extends Express {
  apolloServer: ApolloServer
}

const ExpressApolloApp = async (
  configs?: ExpressAppConfig,
  apolloConfigs?: ApolloServerExpressConfig
): Promise<ExpressApolloServer> => {
  // TODO: delete console.log
  console.log('Unused server params for now:', configs, apolloConfigs)
  await startMongoConnection()

  const app = ExpressServer() as ExpressApolloServer
  const apolloServer = GraphQLServer(apolloConfigs)
  app.apolloServer = apolloServer

  apolloServer.applyMiddleware({
    app
  })
  return app
}

export default ExpressApolloApp
