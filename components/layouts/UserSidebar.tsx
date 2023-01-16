import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  IconBarGraph,
  IconHome,
  IconPlus,
  IconUsersTwo
} from '../elements/Icons'

const UserSidebar = () => {
  const router = useRouter()

  const className = (page: string) =>
    `flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg ${
      router.pathname === page ? 'bg-gray-300' : 'hover:bg-gray-200'
    } group`

  return (
    <div className="hidden xl:flex xl:w-64 xl:flex-col">
      <div className="flex flex-col pt-5 overflow-y-auto">
        <div className="flex flex-col justify-between flex-1 h-full px-4">
          <div className="space-y-4">
            <div>
              <Link
                href=""
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-sky-400 drop-shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
              >
                <IconPlus />
                Get Started
              </Link>
            </div>
            <nav className="flex-1 space-y-1 pt-5">
              <Link
                href="/dashboard"
                title=""
                className={className('/dashboard')}
              >
                <IconHome />
                Dashboard
              </Link>
            </nav>

            <div>
              <p className="px-4 pt-5 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Analytics
              </p>
              <nav className="flex-1 mt-4 space-y-1">
                <Link href="" title="" className={className('/performance')}>
                  <IconBarGraph />
                  Meeting Stats
                </Link>
              </nav>
            </div>

            <div>
              <p className="px-4 pt-5 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Support
              </p>
              <nav className="flex-1 mt-4 space-y-1">
                <Link href="#" title="" className={className('/people')}>
                  <IconUsersTwo />
                  People
                  <span className="text-xs uppercase ml-2 font-semibold text-yellow-600 bg-yellow-50 border border-yellow-300 rounded-full inline-flex items-center px-2 py-0.5">
                    Soon
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSidebar
