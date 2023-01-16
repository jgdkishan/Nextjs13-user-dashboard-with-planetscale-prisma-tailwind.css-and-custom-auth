import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import type { Fetcher } from 'swr'
import Paper from '../../components/layouts/Paper'
import UserLayout from '../../components/layouts/User'

const fetcher: Fetcher<any | undefined, string> = (...args) =>
  fetch(...args).then((res) => res.json())

const UserDashboard = () => {
  const { data } = useSession()
  const apiData = useSWR('/api/hello', fetcher)
  console.info(apiData.data)

  return (
    <UserLayout title={`${data?.user?.name || 'User'}'s account`}>
      <div className="flex flex-col flex-1 overflow-x-hidden">
        <main>
          <div className="py-6">
            <div className="px-4 mx-auto sm:px-6 md:px-8">
              <div className="md:items-center md:flex">
                <p className="text-base font-bold text-gray-900">
                  Hey {data?.user?.name || 'User'} -
                </p>
                <p className="mt-1 text-base font-medium text-gray-500 md:mt-0 md:ml-2">
                  here&apos;s what&apos;s happening on your account
                </p>
              </div>
            </div>

            <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
              <div className="space-y-5 sm:space-y-6">
                <Paper paperTitle="What do you want to do?" sort={null}>
                  <div className="grid grid-flow-col">
                    <div className="grid place-items-center">
                      <Image
                        src="/img/online-meeting-abstract.png"
                        priority={true}
                        alt=""
                        width="300"
                        height="300"
                        className="scale-100"
                      />
                      <Link
                        href=""
                        className="inline-flex items-center justify-center px-10 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                      >
                        Find Friends
                      </Link>
                      <p className="mt-4 text-sm font-medium text-gray-500">
                        Search your friends online
                      </p>
                    </div>
                    <div className="grid place-items-center">
                      <Image
                        src="/img/schedule-meeting.png"
                        alt=""
                        width="300"
                        height="300"
                        className="scale-100"
                      />
                      <Link
                        href=""
                        className="inline-flex items-center justify-center px-10 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                      >
                        Manage Tasks
                      </Link>
                      <p className="mt-4 text-sm font-medium text-gray-500">
                        Plan your tasks for the week
                      </p>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </main>
      </div>
    </UserLayout>
  )
}

export default UserDashboard
