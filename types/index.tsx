import { ReactNode } from 'react'
export interface Props {
  children?: ReactNode
}

export interface State {
  hasError: boolean
}

export interface LoginInputs {
  username: string
  password: string
}

export interface SignUpData {
  firstName: string
  lastName: string
  username: string
  password: string
}

export interface RxjsAlert {
  id: Number
  autoClose: Boolean | undefined
  type: string
  message: string
}
