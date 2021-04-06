import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class PokeDoc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <title>PokéSSR - AWS Amplify</title>
          <meta property="og:title" content="PokéSSR - AWS Amplify" key="title" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,700&display=swap" rel="stylesheet" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:image" content={`${process.env.baseUrl}/og.png`} key="image" />
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PokeDoc