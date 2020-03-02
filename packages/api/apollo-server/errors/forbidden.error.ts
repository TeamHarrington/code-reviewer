import { ApolloError } from 'apollo-server-express'
import { CODES } from '.'

export class ForbiddenError extends ApolloError {
  constructor(item?: string) {
    const itemName = item ? item : 'this item'
    super(`You do not have access to ${itemName}`, CODES.FORBIDDEN)

    Object.defineProperty(this, 'name', { value: 'ForbiddenError' })
  }
}
