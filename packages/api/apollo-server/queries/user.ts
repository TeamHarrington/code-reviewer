import { users } from '../mock-data'

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
  }
}

// get 0 or more usrs based on the criterion
// the criterion can be one or more properties from IGetUsers
export const getUsers = async (_: any, args: IGetUsers) => {
  console.log(args)
  return users
}
