import { User } from '../../db/entity/User'

export interface IGetUser {
  id?: number
  utorID?: String
  email?: String
}

// get one user based on id, utorID or email
export const getUser = async (_: any, args: IGetUser) => {
  const resultUser = User.findOne(_, { where: args })
  return resultUser
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
  console.log(args)
  // Return ALL users.
  const users = User.find({ where: args })
  return users
}
