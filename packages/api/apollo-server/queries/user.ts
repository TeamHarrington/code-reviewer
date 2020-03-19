import { User } from '../../db/entity/User'
import { NotFoundError } from '../errors'

export interface IGetUser {
  id?: number
  utorID?: String
  email?: String
}

// get one user based on id, utorID or email
export const getUser = async (_: any, args: IGetUser) => {
  let user: User | undefined
  try {
    user = await User.findOne(_, { where: args })
  } catch (e) {
    // Network error, throw 404
  }
  if (!user) {
    throw new NotFoundError('User')
  }
  return user
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
  let users: User[] = []
  try {
    users = await User.find({ where: args })
  } catch (e) {
    // Network error, just return []
  }
  return users
}
