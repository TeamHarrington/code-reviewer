import { gql } from 'apollo-server-core'

const Types = gql`
  input UserInput {
    id: String
    firstName: String
    lastName: String
    utorID: String
  }

  type Query {
    getUser(id: String, utorID: String, email: String): User
    getUsers(users: [UserInput!]!): [User!]!
  }

  type Mutation {
    editUser(id: String, firstName: String, lastName: String): User
  }

  enum UserType {
    TA
    STUDENT
    INSTRUCTOR
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    utorID: String!
    email: String
    userType: UserType!
    lastLogin: String!
    isActive: Boolean!
  }

  type Assignment {
    id: ID!
    name: String!
    requiredFiles: [String!]
    peerReviewDeadline: String
    feedbackQuestions: [String!]
    groupSize: Int!
    isActive: Boolean!
  }

  type File {
    id: ID!
    name: String!
    path: String!
    annotations: [Annotation!]!
  }

  type Submission {
    id: ID!
    author: User!
    assignment: Assignment!
    files: [File!]!
    reviewBy: [User!]!
  }

  type Annotation {
    id: ID!
    givenBy: User!
    line: Int!
    content: String!
    isDeleted: Boolean!
  }
`

export default Types
