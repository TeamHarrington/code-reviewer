import ExpressServer, { Express } from 'express'
import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express'
import GraphQLServer from './apollo-server'
import Mongoose from 'mongoose'
import { Student } from './models/student.model'

const startMongoConnection = async () => {
  Mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

// const db = Mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//   const newStudent = new Student({ name: 'a new student1' })
//   newStudent.save((err, _) => {
//     if (err) {
//       return console.error(err)
//     }
//     console.log('successfully added a new student')
//   })
// })

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
