import { assignments } from '../mock-data'

export interface IAddAssignment {
  id: String
  name: String
  requiredFiles?: String[]
  peerReviewDeadline?: String
  feedbackQuestions?: String[]
  groupSize?: Number
  isActive?: Boolean
}

// add a new assignment
export const addAssignment = (_: any, args: IAddAssignment) => {
  console.log(args)
  return null
}

export interface IEditAssignment {
  id: String
  name?: String
  requiredFiles?: String[]
  peerReviewDeadline?: String
  feedbackQuestions?: String[]
  groupSize?: Number
  isActive?: Boolean
}

// edit an assignment given its id and the properties that
// needed to be updated
export const editAssignment = (_: any, args: IEditAssignment) => {
  const index = assignments.findIndex(assignment => assignment.id === args.id)
  Object.keys(args).map(key => {
    if (key !== 'id') {
      // @ts-ignore
      assignments[index][key] = args[key]
    }
  })
  return assignments[index]
}
