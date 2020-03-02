import { ApolloError } from 'apollo-server-express'
import { CODES } from '.'

export class UnauthenticatedError extends ApolloError {
  constructor() {
    super('User authentication required.', CODES.UNAUTHENTICATED)

    Object.defineProperty(this, 'name', { value: 'UnauthenticatedError' })
  }
}
