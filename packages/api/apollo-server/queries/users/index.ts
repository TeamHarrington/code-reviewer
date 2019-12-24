import data from '../../test-data.json'

export const getUser = async () => {
  return data.users[0]
}

export const getUsers = async () => {
  return data.users
}
