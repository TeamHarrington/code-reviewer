import ExpressApolloApp from '.'
import config from './config'
import { createConnection } from 'typeorm'

const { DOMAIN, PORT, GRAPHQL_ENDPOINT } = config.API
const SERVER_DOMAIN = config.ENV === 'production' ? DOMAIN : `${DOMAIN}:${PORT}`

const main = async () => {
  const app = await ExpressApolloApp({
    graphqlEndpoint: GRAPHQL_ENDPOINT
  })

  await createConnection()

  app.listen({ port: PORT }, () => {
    console.log(`Server ready at ${SERVER_DOMAIN}`)
  })
}

main()
