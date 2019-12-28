import data from '../mock-data.json'

export interface IEditUser {
  id: String
  firstName?: String
  lastName?: String
}

export const editUser = (_: any, args: IEditUser) => {
  const users = data.users
  const index = users.findIndex(user => user.id === args.id)
  Object.keys(args).map(key => {
    if (key !== 'id') {
      // @ts-ignore
      users[index][key] = props[key]
    }
  })
  return users[index]
}
