import App, { AppContext } from 'next/app'
import withApollo from '../lib/withApollo'
import { ApolloProvider } from '@apollo/react-hooks'

class MyApp extends App<AppContext> {
  public render() {
    const { Component, pageProps, apollo } = this.props as any

    return (
      <>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    )
  }
}

export default withApollo(MyApp)
