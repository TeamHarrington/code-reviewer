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

export interface IAddAnnotation {
  fileID: String
  givenByID: String
  line: Number
  content: String
}

export const addAnnotation = async (_: any, args: IAddAnnotation) => {
  return args
}

export interface IEditAnnotation {
  id: String
  content?: String
  isDeleted?: Boolean
}

export const editAnnotation = async (_: any, args: IEditAnnotation) => {
  return args
}
