import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import ErrorBoundary from '../components/ErrorBoundaries'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) {
  return (
    <ErrorBoundary>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ErrorBoundary>
  )
}
