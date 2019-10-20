import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import config from '@code-reviewer/client/config'

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: `${config.SERVER_DOMAIN}/${config.GRAPHQL_ENDPOINT}`,
      cache: new InMemoryCache().restore(initialState || {})
    })
)
