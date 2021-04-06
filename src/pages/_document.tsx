import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

class PokeDoc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head/>
        <body>
          <Main />
          <NextScript />
          <footer>© {new Date().getFullYear()} Ibrahim Cesar | <Link href="https://updown.io/akzp"><a>PokéAPI Status</a></Link></footer>
        </body>
      </Html>
    )
  }
}

export default PokeDoc