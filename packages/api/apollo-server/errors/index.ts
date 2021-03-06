export * from './forbidden.error'
export * from './internal-server-error.error'
export * from './not-found.error'
export * from './unauthorized.error'

export const CODES = {
  // 401
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  // 403
  FORBIDDEN: 'FORBIDDEN',
  // 404
  NOT_FOUND: 'NOT_FOUND',
  // 500
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
}
