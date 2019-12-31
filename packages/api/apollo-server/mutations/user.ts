import { users } from '../mock-data'

export interface IEditUser {
  id: String
  firstName?: String
  lastName?: String
  utorID?: String
  email?: String
  userType?: String
  isActive?: Boolean
}

// edit a user's properties given its id and the properties
// that need to be upaded
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
