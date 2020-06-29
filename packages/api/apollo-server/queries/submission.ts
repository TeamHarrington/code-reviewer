import { submissions } from '../mock-data'

export interface IGetSubmissions {
  assignmentID: string
}

// return the submission with given assignmentID where user is the author
export const getSubmission = async (
  _: any,
  args: IGetSubmissions,
  context: any
) => {
  return submissions.find(sub => {
    const isAuthor = sub.author.id === context.userID
    const isAssignment = sub.assignment.id === args.assignmentID
    const result = isAuthor && isAssignment
    return result
  })
}

// return all submissions with given assignmentID where user is a reviewer
export const getSubmissions = async (
  _: any,
  args: IGetSubmissions,
  context: any
) => {
  // TODO: find a better to retrieve userID from headers
  const userID = context.userID

  return submissions.filter(sub => {
    const isReviewer = sub.reviewBy.find(reviewer => reviewer.id === userID)
    const isAssignment = sub.assignment.id === args.assignmentID
    return isReviewer && isAssignment
  })
}

export interface IGetAnnotations {
  fileID: string
}

// get annotations by fileID
export const getAnnotations = async (_: any, args: IGetAnnotations) => {
  return args
}
