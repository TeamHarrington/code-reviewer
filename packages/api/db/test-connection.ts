import { createConnection } from 'typeorm'
// import { User } from './entity/User'

console.log('Connecting to database...')

createConnection()
  .then(async connection => {
    console.log('Connection established succesfully.')

    // const user = new User()
    // user.firstName = 'first name'
    // user.lastName = 'last name'
    // user.utorID = 'utorid'
    // await connection.manager.save(user)
    // const users = await connection.manager.find(User)
    // console.log(users)

    console.log('Closing Connection...')
    await connection.close()
    console.log('Connection closed.')
  })
  .catch(error => {
    console.log(error)
  })

export default 1
