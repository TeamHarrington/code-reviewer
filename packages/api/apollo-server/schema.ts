import { merge } from 'lodash'
import { makeExecutableSchema, IResolvers } from 'graphql-tools'

/** Queries */
import testQueries from './queries/test'

/** Mutations */
import testMutation from './mutations/test'

/** Types */
import Test from './types/Test'

const resolvers: IResolvers = merge(
  /** Queries */
  testQueries,

  /** Mutations */
  testMutation
)

const typeDefs = [Test]

const schema = makeExecutableSchema({
  resolvers,
  typeDefs
})

export default schema
