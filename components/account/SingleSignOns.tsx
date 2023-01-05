import Image from 'next/image'
import { signIn } from 'next-auth/react'

const SingleSignOns = () => {
  return (
    <div className="rounded-t mb-0 px-6 py-6">
      <div className="text-center mb-3">
        <h6 className="text-slate-500 text-sm font-semibold">Sign in</h6>
      </div>
      <div className="btn-wrapper text-center">
        <button
          className="w-60 bg-white px-4 py-3 my-5 text-slate-800 rounded mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-semibold text-xs ease-linear transition-all duration-150"
          type="button"
          onClick={() => signIn('google')}
        >
          <Image
            alt="..."
            className="w-5 mr-2"
            width={100}
            height={100}
            src="/img/google.svg"
          />
          Continue with Google
        </button>

        <br />

        <button
          className="w-60 bg-white px-4 py-3 my-5 text-slate-800 rounded mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-semibold text-xs ease-linear transition-all duration-150"
          type="button"
          onClick={() => signIn('twitter')}
        >
          <Image
            alt="..."
            className="w-5 mr-2"
            width={100}
            height={100}
            src="/img/twitter.svg"
          />
          Continue with Twitter
        </button>

        <br />

        <button
          className="w-60 bg-white px-4 py-3 my-5 text-slate-800 rounded mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-semibold text-xs ease-linear transition-all duration-150"
          type="button"
          onClick={() => signIn('twitter')}
        >
          <Image
            alt="..."
            className="w-5 mr-2"
            width={100}
            height={100}
            src="/img/facebook.svg"
          />
          Continue with Facebook
        </button>

        <br />

        <button
          className="w-60 bg-white px-4 py-3 my-5 text-slate-800 rounded mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-semibold text-xs ease-linear transition-all duration-150"
          type="button"
          onClick={() => signIn('twitter')}
        >
          <Image
            alt="..."
            className="w-5 mr-2"
            width={100}
            height={100}
            src="/img/instagram.svg"
          />
          Continue with Instagram
        </button>

        <br />
      </div>
    </div>
  )
}

export default SingleSignOns
