import { users } from '../mock-data'

export interface IEditUser {
  id: String
  firstName?: String
  lastName?: String
}

export const editUser = (_: any, args: IEditUser) => {
  const index = users.findIndex(user => user.id === args.id)
  Object.keys(args).map(key => {
    if (key !== 'id') {
      // @ts-ignore
      users[index][key] = props[key]
    }
  })
  return users[index]
}
