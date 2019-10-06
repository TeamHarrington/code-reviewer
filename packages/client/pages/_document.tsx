import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  public render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
