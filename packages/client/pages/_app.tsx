import App, { AppContext } from 'next/app'

class MyApp extends App<AppContext> {
  public render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
