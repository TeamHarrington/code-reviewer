import { submissions, match } from '../mock-data'

export interface IGetSubmission {
  id: String
}

export const getSubmission = async (_: any, args: IGetSubmission) => {
  const resultSubmission = submissions.find(
    submission => submission.id === args.id
  )
  return resultSubmission
}

export interface IGetSubmissions {
  submissions: {
    id?: String
    authorID: String
    assignmentID: String
    reviewByID: String
  }[]
}

export const getSubmissions = async (parent: any, args: IGetSubmissions) => {
  console.log(parent)
  console.log(args)
  if (args.submissions.length === 0) {
    return submissions
  }

  return submissions.filter(submission => match(submission, args.submissions))
}
