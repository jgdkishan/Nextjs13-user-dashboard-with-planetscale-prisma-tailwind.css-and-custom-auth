import { BehaviorSubject } from 'rxjs'
import getConfig from 'next/config'
import Router from 'next/router'

import { fetchWrapper } from '../helpers/fetchWrapper'
import { SignUpData } from '../types'
const { publicRuntimeConfig } = getConfig()
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`
const userSubject = new BehaviorSubject(
  typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user')!)
)

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value
  },
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
}

function login(username: string, password: string) {
  return fetchWrapper
    .post(`${baseUrl}/authenticate`, { username, password })
    .then((user) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user)
      localStorage.setItem('user', JSON.stringify(user))

      return user
    })
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem('user')
  userSubject.next(null)
  Router.push('/account/login')
}

function register(user: SignUpData) {
  return fetchWrapper.post(`${baseUrl}/register`, user)
}

function getAll() {
  return fetchWrapper.get(baseUrl)
}

function getById(id: Number) {
  return fetchWrapper.get(`${baseUrl}/${id}`)
}

function update(id: Number, params: Object) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params).then((res) => {
    // update stored user if the logged in user updated their own record
    if (id === userSubject.value.id) {
      // update local storage
      const user = { ...userSubject.value, ...params }
      localStorage.setItem('user', JSON.stringify(user))

      // publish updated user to subscribers
      userSubject.next(user)
    }
    return res
  })
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: Number) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
}
