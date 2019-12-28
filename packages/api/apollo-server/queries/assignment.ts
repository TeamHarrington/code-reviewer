import data from '../mock-data.json'

export interface IGetAssignment {
  id: String
}

export const getAssignment = async (_: any, args: IGetAssignment) => {
  const resultAssignment = data.assignments.find(
    assignment => assignment.id === args.id
  )
  return resultAssignment
}

export const getAssignments = async () => {
  return data.assignments
}
