import { ApolloError } from 'apollo-server-express'
import { CODES } from '..'

export class UnauthenticatedError extends ApolloError {
  constructor() {
    super('User requires authentication.', CODES.UNAUTHENTICATED)

    Object.defineProperty(this, 'name', { value: 'UnauthenticatedError' })
  }
}
