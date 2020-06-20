import { assignments } from '../mock-data'

export interface IGetAssignment {
  id: string
}

// get a single assignment based on ID
// don't have a use case yet
// may delete it if not needed
export const getAssignment = async (_: any, args: IGetAssignment) => {
  const resultAssignment = assignments.find(
    assignment => assignment.id === args.id
  )
  return resultAssignment
}

// Student/TA - get all active assignments
// Instructor - get all assignments
export const getAssignments = async () => {
  return assignments
}
