import { submissions } from '../mock-data'

export interface IGetSubmission {
  id: String
}

export const getSubmission = async (_: any, args: IGetSubmission) => {
  const resultSubmission = submissions.find(
    submission => submission.id === args.id
  )
  return resultSubmission
}
