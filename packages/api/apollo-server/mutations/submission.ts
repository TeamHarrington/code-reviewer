import { submissions } from '../mock-data'

export interface IEditSubmissions {
  assignmentID: String
}

// edit all submissions related to an assignment
// e.g. change Submission.reviewBy
export const editSubmissions = async (_: any, args: IEditSubmissions) => {
  console.log(args)
  return submissions
}
