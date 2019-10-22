import ExpressApolloApp from './server'
import config from './config'

const { DOMAIN, PORT, GRAPHQL_ENDPOINT } = config.API
const SERVER_DOMAIN = config.ENV === 'production' ? DOMAIN : `${DOMAIN}:${PORT}`

async function main() {
  const app = await ExpressApolloApp({
    graphqlEndpoint: GRAPHQL_ENDPOINT
  })
  app.listen({ port: PORT }, () => {
    console.log(`Server ready at ${SERVER_DOMAIN}`)
  })
}

main()
