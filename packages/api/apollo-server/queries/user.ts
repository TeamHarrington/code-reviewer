import { users } from '../mock-data'

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
  users?: {
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
  const result: any = []
  // @ts-ignore
  args.users.map(userCri => {
    const resultUser = users.find(
      user =>
        user.firstName === userCri.firstName ||
        user.lastName === userCri.lastName ||
        user.id === userCri.id ||
        user.utorID === userCri.utorID ||
        user.userType === userCri.userType
    )
    if (resultUser) {
      result.push(resultUser)
    }
  })
  return result
}
