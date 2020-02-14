import { assignments } from '../mock-data'

export interface IGetAssignment {
  id: number
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

// return all assignments, probably only instructors need to use this
export const getAssignments = async () => {
  return assignments
}
