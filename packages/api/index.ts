import ExpressApolloApp from './server'

async function main() {
  const app = await ExpressApolloApp()
  app.listen({ port: 3000 }, () => {
    console.log(
      `Server ready at http://localhost:3000${app.apolloServer.graphqlPath}`
    )
  })
}

main()
