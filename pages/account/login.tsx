import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { LoginInputs } from '../../types'
import { Link } from '../../components/Link'
import { Layout } from '../../components/account/Layout'
import { userService, alertService } from '../../services'

export default Login

function Login() {
  const router = useRouter()

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .email('Please provide proper email address'),
    password: Yup.string().required('Password is required')
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } =
    useForm<LoginInputs>(formOptions)
  const { errors } = formState

  function onSubmit(inputs: LoginInputs) {
    return userService
      .login(inputs.username, inputs.password)
      .then(() => {
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
      <div className="card">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                {...register('username')}
                className={`form-control ${
                  errors.username ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">{`${errors.username?.message}`}</div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...register('password')}
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">{`${errors.password?.message}`}</div>
            </div>
            <button
              disabled={formState.isSubmitting}
              className="btn btn-primary"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Login
            </button>
            <Link href="/account/register">Register</Link>
          </form>
        </div>
      </div>
    </Layout>
  )
}
