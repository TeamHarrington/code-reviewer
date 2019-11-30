import next from 'next'
import ExpressApolloServer, { config } from '@code-reviewer/api'

const {
  API: { DOMAIN, PORT, GRAPHQL_ENDPOINT },
  ENV
} = config

const SERVER_DOMAIN = ENV === 'production' ? DOMAIN : `${DOMAIN}:${PORT}`

const main = async () => {
  const nextApp = next({
    dev: true,
    dir: './packages/client'
  })

  const app = await ExpressApolloServer({
    graphqlEndpoint: GRAPHQL_ENDPOINT
  })

  /** Setup Next */
  await nextApp.prepare()
  const handle = nextApp.getRequestHandler()
  app.get('*', (req, res, nextFunc) => {
    if (req.url.startsWith('/api') || req.url.startsWith(GRAPHQL_ENDPOINT)) {
      return nextFunc()
    }
    return handle(req, res)
  })

  app.listen(PORT, () => {
    console.log(`> Server started on ${SERVER_DOMAIN}`)
  })
}

main()
