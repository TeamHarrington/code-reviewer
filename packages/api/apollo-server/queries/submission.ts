import { submissions } from '../mock-data'

export interface IGetSubmission {
  id: number
}

// don't have a use case for this one yet, put it there just for testing
// probabl going to remove it in near future
export const getSubmission = async (_: any, args: IGetSubmission) => {
  const resultSubmission = submissions.find(
    submission => submission.id === args.id
  )
  return resultSubmission
}

export interface IGetSubmissions {
  userID: number
}

// get this user's all submissions as well as the submissions has this user
// in reviewBy
// do not include the submissions that has submissions.Assignment.isActive = false
// this one should be called on the student and TA home page
export const getSubmissions = async (_: any, args: IGetSubmissions) => {
  console.log(args)
  return submissions
}

export interface IGetFiles {
  submissionID: number
}

// get files by submissionID
export const getFiles = async (_: any, args: IGetFiles) => {
  return args
}

export interface IGetAnnotations {
  fileID: number
}

// get annotations by fileID
export const getAnnotations = async (_: any, args: IGetAnnotations) => {
  return args
}
