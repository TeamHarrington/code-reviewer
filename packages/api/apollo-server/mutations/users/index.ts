interface EditUserData {
  firstName?: String
  lastName?: string
}

export const editUser = async (_: any, props: EditUserData): User => {
  return {
    ...props
  }
}
