import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import type { LoginInputs } from '../../types'
import NextLink from 'next/link'
import Layout from '../../components/layouts/Auth'
import SingleSignOns from '../../components/account/SingleSignOns'
import { userService, alertService } from '../../services'
import { useState } from 'react'

const Login = () => {
  const router = useRouter()

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Username is required')
      .email('Please provide proper email address'),
    password: Yup.string().required('Password is required')
  })
  const formOptions = { resolver: yupResolver(validationSchema) }
  const [failMessage, setFailMessage] = useState(false)

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } =
    useForm<LoginInputs>(formOptions)
  const { errors } = formState

  function onSubmit(inputs: LoginInputs) {
    setFailMessage(false)
    return userService
      .login(inputs.email, inputs.password)
      .then((status) => {
        if (status === 'failed') {
          setFailMessage(true)
          return
        }

        // get return url from query parameters or default to '/'
        const returnUrl = new URL(
          router.query.returnUrl ? router.query.returnUrl[0] : '/'
        )
        router.push(returnUrl)
      })
      .catch(() => {
        alertService.error
      })
  }
  return (
    <Layout>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
              <SingleSignOns />
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-slate-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                    <div className="invalid-feedback">{`${
                      errors.email?.message || ''
                    }`}</div>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      {...register('password')}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                    <div className="invalid-feedback">{`${
                      errors.password?.message || ''
                    }`}</div>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-slate-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      disabled={formState.isSubmitting}
                      onClick={handleSubmit(onSubmit)}
                    >
                      {' '}
                      {formState.isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}
                      Sign In
                    </button>
                    {failMessage && (
                      <span className="ml-2 text-sm text-red-600">
                        Incorrect Email ID or Password
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <NextLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-slate-200"
                >
                  <small>Forgot password?</small>
                </NextLink>
              </div>
              <div className="w-1/2 text-right">
                <NextLink href="/account/register" className="text-slate-200">
                  <small>Create new account</small>
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
