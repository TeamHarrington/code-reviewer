import next from 'next'
import ExpressApolloServer from '@code-reviewer/api/server'

async function main() {
  const port = 3000
  const nextApp = next({
    dev: true,
    dir: './packages/client'
  })
  const app = await ExpressApolloServer({ routeDirectory: '/api' })

  /** Setup Next */
  await nextApp.prepare()
  const handle = nextApp.getRequestHandler()
  app.all('*', (req, res, nextFunc) => {
    if (
      req.url.startsWith('/api') ||
      req.url.startsWith(app.apolloServer.graphqlPath) ||
      req.method !== 'GET'
    ) {
      return nextFunc()
    }
    return handle(req, res)
  })

  app.listen(port, () => {
    console.log(`> Server started on localhost:${port}`)
  })
}

main()
