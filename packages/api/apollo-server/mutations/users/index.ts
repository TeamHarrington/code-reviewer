import data from '../../test-data.json'

interface EditUserData {
  id: string
  firstName?: string
  lastName?: string
}

export const editUser = (_: any, props: EditUserData) => {
  const index = data.users.findIndex(user => user.id === props.id)
  Object.keys(props).map(key => {
    if (key !== 'id') {
      // @ts-ignore
      data.users[index][key] = props[key]
    }
  })
  return data.users[index]
}
