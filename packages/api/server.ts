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
  // await startMongoConnection()
  console.log(startMongoConnection)

  const app = ExpressServer() as ExpressApolloServer
  const apolloServer = GraphQLServer(apolloConfigs)
  app.apolloServer = apolloServer

  apolloServer.applyMiddleware({
    app,
    path: graphqlEndpoint
  })
  return app
}

export default ExpressApolloApp
