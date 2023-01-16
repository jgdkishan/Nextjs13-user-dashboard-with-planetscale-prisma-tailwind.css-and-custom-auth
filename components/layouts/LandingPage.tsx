import type { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  title?: string
  transparent?: boolean
}

const LandingPage = ({
  title,
  children,
}: {
  title?: string
  children: ReactNode
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar transparent={true} />
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
