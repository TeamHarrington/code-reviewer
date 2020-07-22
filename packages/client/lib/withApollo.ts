import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'

import config from '../config'

export default withApollo(({ initialState }) => {
  return new ApolloClient<NormalizedCacheObject>({
    uri: `${config.SERVER_DOMAIN}/${config.GRAPHQL_ENDPOINT}`,
    cache: new InMemoryCache().restore(initialState || {}),
    headers: {
      authorization: '1'
    }
  })
})
