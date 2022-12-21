import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { userService } from '../../services'
// import Navbar from "components/Navbars/AuthNavbar.js";
// import FooterSmall from "components/Footers/FooterSmall.js";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push('/')
    }
  })

  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen bg-blueGray-800">
          <div
            className="absolute top-0 w-full h-full bg-no-repeat bg-full"
            style={{
              backgroundImage: 'url("/img/account_bg_2.png")',
              filter: 'invert(40%)'
            }}
          ></div>
          {children}
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  )
}

export default Layout
