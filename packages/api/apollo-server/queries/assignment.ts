import { assignments } from '../mock-data'

export interface IGetAssignment {
  id: String
}

export const getAssignment = async (_: any, args: IGetAssignment) => {
  const resultAssignment = assignments.find(
    assignment => assignment.id === args.id
  )
  return resultAssignment
}

export const getAssignments = async () => {
  return assignments
}
