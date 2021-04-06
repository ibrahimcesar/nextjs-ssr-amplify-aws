import type { AppProps } from 'next/app'
import '../styles.css'

function PokeServerless({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default PokeServerless