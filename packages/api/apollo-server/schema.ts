import { merge } from 'lodash'
import { makeExecutableSchema, IResolvers } from 'graphql-tools'

/** Queries */
import queries from './queries'

/** Mutations */
import testMutation from './mutations/test'

/** Types */
import Types from './types'

const resolvers: IResolvers = merge(
  /** Queries */
  queries,

  /** Mutations */
  testMutation
)

const typeDefs = [Types]

const schema = makeExecutableSchema({
  resolvers,
  typeDefs
})

export default schema
