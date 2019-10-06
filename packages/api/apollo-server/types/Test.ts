import { gql } from 'apollo-server-core'

const Test = gql`
  type Query {
    testQuery: String
  }

  type Mutation {
    testMutation: String
  }
`

export default Test
