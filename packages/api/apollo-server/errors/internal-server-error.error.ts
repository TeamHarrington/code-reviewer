import { ApolloError } from 'apollo-server-express'
import { CODES } from '.'

export class InternalServerError extends ApolloError {
  constructor() {
    super('Internal Server Error', CODES.INTERNAL_SERVER_ERROR)

    Object.defineProperty(this, 'name', { value: 'InternalServerError' })
  }
}
