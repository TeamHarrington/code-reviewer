import ExpressApolloApp from './server'
import config from './config'

/**
 * This should run only in development mode.
 */
const { PORT, GRAPHQL_ENDPOINT } = config.API

async function main() {
  const app = await ExpressApolloApp({
    graphqlEndpoint: GRAPHQL_ENDPOINT
  })
  app.listen({ port: PORT }, () => {
    console.log(`Server ready at http://localhost:${PORT}`)
  })
}

main()
