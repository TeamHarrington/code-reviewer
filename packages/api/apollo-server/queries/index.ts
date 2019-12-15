import testQuery from './test/testQuery'

export default {
  Query: {
    testQuery,
    users() {
      return [
        {
          firstName: 'Alice',
          lastName: 'A',
          utorID: 'alice01',
          userType: 'STUDENT'
        }
      ]
    }
  }
}
