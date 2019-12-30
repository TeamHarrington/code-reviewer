import { users, match } from '../mock-data'

export interface IGetUser {
  id?: String
  utorID?: String
  email?: String
}

// get one user based on id, utorID or email
export const getUser = async (_: any, args: IGetUser) => {
  const resultUser = users.find(user => user.id === args.id)
  return resultUser
}

export interface IGetUsers {
  users: {
    id?: String
    firstName?: String
    lastName?: String
    utorID?: String
    email?: String
    userType?: String
    isActive?: Boolean
  }[]
}

// get 0 or more usrs based on a list of criteria
// each criterion can be one or more properties from IGetUsers.usrs
// users in the result list should satisfy at least one criterion
export const getUsers = async (_: any, args: IGetUsers) => {
  if (args.users.length === 0) {
    return users
  }
  return users.filter(user => match(user, args.users))
}
