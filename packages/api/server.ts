import ExpressApolloApp from '.'
import config from './config'

const { DOMAIN, PORT, GRAPHQL_ENDPOINT } = config.API
const SERVER_DOMAIN = config.ENV === 'production' ? DOMAIN : `${DOMAIN}:${PORT}`

const main = async () => {
  const app = await ExpressApolloApp({
    graphqlEndpoint: GRAPHQL_ENDPOINT
  })
  app.listen({ port: PORT }, () => {
    console.log(`Server ready at ${SERVER_DOMAIN}`)
  })
}

main()
