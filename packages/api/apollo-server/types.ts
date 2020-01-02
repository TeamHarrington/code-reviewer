import { gql } from 'apollo-server-core'

const Types = gql`
  type Query {
    getUser(id: String, utorID: String, email: String): User!
    getUsers(
      firstName: String
      lastName: String
      userType: UserType
      isActive: Boolean
    ): [User!]!
    getAssignment(id: String!): Assignment!
    getAssignments: [Assignment!]!
    getSubmission(id: String): Submission!
    getSubmissions(userID: String): [Submission!]!
    getFiles(submissionID: String): [File!]!
    getAnnotations(fileID: String): [Annotation!]!
  }

  type Mutation {
    addStudent(
      firstName: String
      lastName: String
      utorID: String!
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
      id: String!
      firstName: String
      lastName: String
      utorID: String!
      email: String
      lastLogin: String
    ): User

    editTA(
      id: String!
      firstName: String
      lastName: String
      utorID: String!
      email: String
      lastLogin: String
    ): User

    editInstructor(
      id: String!
      firstName: String
      lastName: String
      email: String
      lastLogin: String
    ): User

    deactivateUser(id: String): User

    addAssignment(
      name: String!
      requiredFiles: [String!]
      feedbackQuestions: [String!]
      groupSize: Int
      isActive: Boolean
    ): Assignment!

    editAssignment(
      id: String!
      name: String
      requiredFiles: [String!]
      feedbackQuestions: [String!]
      groupSize: Int
      isActive: Boolean
    ): Assignment!

    # this mutation create Submissions and Files
    # for the given assignment
    # it should take a few more arguments
    addSubmissionsAndFiles(assignmentID: String): Submission!

    editSubmissions(assignmentID: String): [Submission!]!

    addAnnotation(
      fileID: String!
      givenByID: String!
      line: Int!
      content: String!
    ): Annotation!

    editAnnotation(annotationID: String!, content: String): Annotation!

    deleteAnnotation(annotationID: String!): Annotation!
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
    path: String!
    annotations: [Annotation!]!
  }

  type Submission {
    id: ID!
    author: User!
    assignment: Assignment!
    files: [File!]!
    reviewBy: [User!]!
    feedbackAnswers: [String]!
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
