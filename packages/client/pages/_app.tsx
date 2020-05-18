import App, { AppContext } from 'next/app'
import withApollo from '@code-reviewer/client/lib/withApollo'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'

export const theme = {
  breakpoints: [640, 960]
}

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#004dca'
    }
  }
})

class MyApp extends App<AppContext> {
  public render() {
    const { Component, pageProps, apollo } = this.props as any

    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <Component {...pageProps} />
          </MuiThemeProvider>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
