import { submissions } from '../mock-data'

export interface IGetSubmission {
  id: string
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
  userID: string
  assignmentID: string
}

// return all submissions with given assignmentID where user is either
// the author or a reviewer
export const getSubmissions = async (_: any, args: IGetSubmissions) => {
  const result = submissions.filter(submission => {
    if (submission.id !== args.assignmentID) {
      return false
    }
    if (submission.author.id === args.userID) {
      return true
    }
    return submission.reviewBy.some(reviewer => {
      return reviewer.id === args.userID
    })
  })
  return result
}

export interface IGetFiles {
  submissionID: string
}

// get files by submissionID
export const getFiles = async (_: any, args: IGetFiles) => {
  return args
}

export interface IGetAnnotations {
  fileID: string
}

// get annotations by fileID
export const getAnnotations = async (_: any, args: IGetAnnotations) => {
  return args
}
