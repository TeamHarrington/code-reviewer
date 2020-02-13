import { submissions } from '../mock-data'

export interface IEditSubmissions {
  assignmentID: number
}

// edit all submissions related to an assignment
// e.g. change Submission.reviewBy
export const editSubmissions = async (_: any, args: IEditSubmissions) => {
  console.log(args)
  return submissions
}

export interface IAddAnnotation {
  fileID: number
  givenByID: number
  line: Number
  content: String
}

export const addAnnotation = async (_: any, args: IAddAnnotation) => {
  return args
}

export interface IEditAnnotation {
  id: number
  content?: String
}

export const editAnnotation = async (_: any, args: IEditAnnotation) => {
  return args
}

export interface IDeleteAnnotation {
  id: number
}

export const deleteAnnotation = async (_: any, args: IDeleteAnnotation) => {
  return args
}
