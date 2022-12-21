const { expressjwt: jwt } = require('express-jwt')
const util = require('util')
import { Request, Response } from 'express'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export const jwtMiddleware = (req: Request, res: Response) => {
  const middleware = jwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ['HS256']
  }).unless({
    path: [
      // public routes that don't require authentication
      '/api/users/register',
      '/api/users/authenticate'
    ]
  })

  return util.promisify(middleware)(req, res)
}
