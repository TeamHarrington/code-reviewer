import data from '../../test-data.json'

interface EditUserData {
  id: string
  firstName?: string
  lastName?: string
}

export const editUser = (_: any, props: EditUserData) => {
  const users = data.users
  const index = users.findIndex(user => user.id === props.id)
  Object.keys(props).map(key => {
    if (key !== 'id') {
      // @ts-ignore
      users[index][key] = props[key]
    }
  })
  return users[index]
}
