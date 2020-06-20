import { assignments } from '../mock-data'

export interface IAddAssignment {
  name: string
  requiredFiles: string[]
  peerReviewDeadline?: string
  feedbackQuestions: string[]
  groupSize: number
  isActive: boolean
}

// add a new assignment
export const addAssignment = (_: any, args: IAddAssignment) => {
  assignments.push({
    id: assignments.length.toString(),
    name: args.name,
    requiredFiles: [],
    feedbackQuestions: [],
    groupSize: 4,
    isActive: true
  })
  return assignments
}

export interface IEditAssignment extends IAddAssignment {
  id: string
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
