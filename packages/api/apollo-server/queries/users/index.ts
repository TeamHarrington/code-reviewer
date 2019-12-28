import data from '../../test-data.json'

interface IGetUser {
  id?: String
  utorID?: String
  email?: String
}

export const getUser = async (_: any, args: IGetUser) => {
  const resultUser = data.users.find(user => user.id === args.id)
  return resultUser
}

interface IGetUsers {
  users?: {
    id?: String
    firstName?: String
    lastName?: String
    utorID?: String
    email?: String
    isActive?: Boolean
  }[]
}

export const getUsers = async (_: any, args: IGetUsers) => {
  const result: any = []
  // @ts-ignore
  args.users.map(userCri => {
    const resultUser = data.users.find(
      user =>
        user.firstName === userCri.firstName ||
        user.lastName === userCri.lastName ||
        user.id === userCri.id ||
        user.utorID === userCri.utorID
    )
    if (resultUser) {
      result.push(resultUser)
    }
  })
  return result
}
