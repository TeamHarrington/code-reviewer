import { gql } from 'apollo-server-core'

const Test = gql`
  type Query {
    testQuery: String
  }

  type Mutation {
    testMutation: String
  }

  enum UserType {
    TA
    STUDENT
    INSTRUCTOR
  }

  type User {
    firstName: String
    lastName: String
    utorID: String!
    email: String
    userType: UserType!
    isActive: Boolean
  }

  type Assignment {
    name: String
    requiredFiles: [String]
    peerReviewDeadline: String
    feedbackQuestions: [String]
    numPeers: Int
  }

  type File {
    name: String
    path: String
    annotations: Annotation
  }

  type Submission {
    author: User
    assignment: Assignment
    files: [File]
  }

  type Annotation {
    givenBy: User
    line: Int
    content: String
  }
`

export default Test
