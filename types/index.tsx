import { ReactNode } from 'react'

export type APIMethods = 'get' | 'put' | 'delete' | 'post'
export interface APIHander {
  api: Function
  method: APIMethods
}
export interface Props {
  children?: ReactNode
}

export interface State {
  hasError: boolean
}

export interface LoginInputs {
  email: string
  password: string
}

export interface SignUpData {
  name: string
  email: string
  password: string
}

export interface RxjsAlert {
  id: Number
  autoClose: Boolean | undefined
  type: string
  message: string
}

export interface ApiError {
  name: string
  message: string
}
