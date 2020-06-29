import { gql } from 'apollo-server-core'

const Types = gql`
  type Query {
    getUser(id: Int, utorID: String, email: String): User!
    getUsers(
      firstName: String
      lastName: String
      userType: UserType
      isActive: Boolean
    ): [User!]!
    getAssignment(id: ID!): Assignment!
    getAssignments: [Assignment!]!
    getSubmission(assignmentID: ID!): Submission!
    getSubmissions(assignmentID: ID!): [Submission!]!
    getFiles(ids: [ID!]): [File!]!
    getAnnotations(fileID: Int): [Annotation!]!
  }

  type Mutation {
    addStudent(
      firstName: String
      lastName: String
      utorID: Int!
      email: String
    ): User!
    addTA(
      firstName: String
      lastName: String
      utorID: String!
      email: String
    ): User!
    addInstructor(firstName: String, lastName: String, email: String): User!

    # there should be a addUsers mutation
    # it should take a CSV or JSON file

    editStudent(
      id: Int!
      firstName: String
      lastName: String
      utorID: String!
      email: String
      lastLogin: String
    ): User

    editTA(
      id: Int!
      firstName: String
      lastName: String
      utorID: Int!
      email: String
      lastLogin: String
    ): User

    editInstructor(
      id: Int!
      firstName: String
      lastName: String
      email: String
      lastLogin: String
    ): User

    deactivateUser(id: Int): User

    addAssignment(
      name: String!
      requiredFiles: [String!]
      feedbackQuestions: [String!]
      groupSize: Int
      isActive: Boolean
    ): [Assignment]!

    editAssignment(
      id: Int!
      name: String
      requiredFiles: [String!]
      feedbackQuestions: [String!]
      groupSize: Int
      isActive: Boolean
    ): Assignment!

    # this mutation create Submissions and Files
    # for the given assignment
    # it should take a few more arguments
    addSubmissionsAndFiles(assignmentID: Int): Submission!

    editSubmissions(assignmentID: Int): [Submission!]!

    addAnnotation(
      fileID: Int!
      givenByID: Int!
      line: Int!
      content: String!
    ): Annotation!

    editAnnotation(annotationID: Int!, content: String): Annotation!

    deleteAnnotation(annotationID: Int!): Annotation!
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
    requiredFiles: [String!]!
    peerReviewDeadline: String
    feedbackQuestions: [String!]!
    groupSize: Int!
    isActive: Boolean!
  }

  type File {
    id: ID!
    name: String!
    content: String!
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
