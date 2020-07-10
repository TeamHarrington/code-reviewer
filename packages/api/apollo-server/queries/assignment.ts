import { assignments } from '../mock-data'

export interface IGetAssignment {
  id: string
}

// get metadata of an assignment
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
