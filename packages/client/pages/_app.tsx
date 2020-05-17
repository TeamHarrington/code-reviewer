import App, { AppContext } from 'next/app'
import withApollo from '@code-reviewer/client/lib/withApollo'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'

const theme = {
  breakpoints: [640, 960]
}

class MyApp extends App<AppContext> {
  public render() {
    const { Component, pageProps, apollo } = this.props as any

    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
