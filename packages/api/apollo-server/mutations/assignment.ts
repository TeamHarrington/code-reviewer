import data from '../mock-data.json'

interface IEditAssignment {
  id: String
}

export const editAssignment = (_: any, args: IEditAssignment) => {
  const assignments = data.assignments
  const index = assignments.findIndex(assignment => assignment.id === args.id)
  Object.keys(args).map(key => {
    if (key !== 'id') {
      // @ts-ignore
      assignments[index][key] = args[key]
    }
  })
  return assignments[index]
}
