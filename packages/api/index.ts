import ExpressApolloApp from './server'

function main() {
  const app = ExpressApolloApp()
  app.listen({ port: 3000 }, () => {
    console.log(
      `Server ready at http://localhost:4000${app.apolloServer.graphqlPath}`
    )
  })
}

main()
