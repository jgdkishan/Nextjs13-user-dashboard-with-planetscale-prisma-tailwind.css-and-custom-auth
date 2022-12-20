import '../styles/globals.css'
import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundaries'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}
