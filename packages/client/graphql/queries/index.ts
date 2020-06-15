import { gql } from 'apollo-boost'

export const GET_ASSIGNMENTS = gql`
  query GetAssignments {
    getAssignments {
      id
      name
    }
  }
`

export const GET_SUBMISSIONS = gql`
  query GetSubmissions {
    getSubmissions {
      id
    }
  }
`

// TODO: this is a test mutation
export const ADD_ASSIGNMENT = gql`
  mutation AddAssignment {
    addAssignment(name: "a new assignment") {
      id
      name
    }
  }
`
