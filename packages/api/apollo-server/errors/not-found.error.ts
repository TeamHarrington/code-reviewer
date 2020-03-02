import { ApolloError } from 'apollo-server-express'
import { CODES } from '.'

export class NotFoundError extends ApolloError {
  constructor() {
    super('This item does not exist.', CODES.NOT_FOUND)

    Object.defineProperty(this, 'name', { value: 'NotFoundError' })
  }
}
