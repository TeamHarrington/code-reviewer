interface User {
  firstName?: String
  lastName?: string
}

export const editUser = async (_: any, props: User) => {
  return {
    ...props
  }
}
