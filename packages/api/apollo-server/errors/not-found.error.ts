import { ApolloError } from 'apollo-server-express'
import { CODES } from '.'

export class NotFoundError extends ApolloError {
  constructor(item?: string) {
    const itemName = item ? item : 'This item'
    super(`${itemName} does not exist.`, CODES.NOT_FOUND)

    Object.defineProperty(this, 'name', { value: 'NotFoundError' })
  }
}
