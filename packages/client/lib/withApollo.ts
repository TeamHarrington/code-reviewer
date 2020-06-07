import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'

import config from '../config'

export default withApollo(({ initialState }) => {
  return new ApolloClient<NormalizedCacheObject>({
    // uri: `${config.SERVER_DOMAIN}/${config.GRAPHQL_ENDPOINT}`,
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache().restore(initialState || {})
  })
})
