import ExpressApolloServer from './server'

async function main() {
  const app = ExpressApolloServer()
  app.listen({ port: 3000 }, () => {
    console.log(
      `Server ready at http://localhost:4000${app.apolloServer.graphqlPath}`
    )
  })
}

main()
