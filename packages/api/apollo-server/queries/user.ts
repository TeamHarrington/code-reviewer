import { User } from '../../db/entity/User'
import { AuthenticationError } from 'apollo-server-express'
import { UnauthenticatedError } from '@code-reviewer/graphql-errors'

export interface IGetUser {
  id?: number
  utorID?: String
  email?: String
}

// get one user based on id, utorID or email
export const getUser = async (_: any, args: IGetUser) => {
  throw new UnauthenticatedError()
  try {
    const resultUser = await User.findOne(_, { where: args })
    return resultUser
  } catch (e) {
    // TODO: Add Error management Urgent!!
    console.log(e)
  }
}

export interface IGetUsers {
  users: {
    id?: number
    firstName?: String
    lastName?: String
    utorID?: String
    email?: String
    userType?: String
    isActive?: boolean
  }
}

// get 0 or more usrs based on the criterion
// the criterion can be one or more properties from IGetUsers
export const getUsers = async (_: any, args: IGetUsers) => {
  const users = await User.find({ where: args })
  return users
}
