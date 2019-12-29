import { users, match } from '../mock-data'

export interface IGetUser {
  id?: String
  utorID?: String
  email?: String
}

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

export const getUsers = async (_: any, args: IGetUsers) => {
  if (args.users.length === 0) {
    return users
  }
  return users.filter(user => match(user, args.users))
}
