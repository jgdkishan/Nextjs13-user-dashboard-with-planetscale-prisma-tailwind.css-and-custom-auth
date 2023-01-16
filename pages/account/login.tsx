import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import NextLink from 'next/link'
import Layout from '../../components/layouts/Auth'
import SingleSignOns from '../../components/account/SingleSignOns'

const Login = () => {
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      console.log('No JWT')
      console.log(status)
    } else if (status === 'authenticated') {
      void router.push('/account/dashboard')
    }
  }, [router, status])

  return (
    <Layout>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-100 border-0 py-10 items-center">
              <SingleSignOns />
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <NextLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-slate-200"
                >
                  <small>Need help?</small>
                </NextLink>
              </div>
              <div className="w-1/2 text-right">
                <NextLink href="/account/register" className="text-slate-200">
                  <small>Terms and Conditions</small>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
