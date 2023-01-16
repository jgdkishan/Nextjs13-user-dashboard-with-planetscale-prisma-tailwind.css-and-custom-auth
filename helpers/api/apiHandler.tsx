import { errorHandler } from './errorHandler'
import { jwtMiddleware } from './jwtMiddleware'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { APIHander, APIMethods } from '../../types'

const methods = ['get', 'put', 'delete', 'post'] as const

const isHTTP = (x: any): x is APIMethods => methods.includes(x)

export const apiHandler = (handler: APIHander) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const reqMethod = req.method?.toLowerCase() as unknown

      if (!isHTTP(reqMethod) || handler.method !== reqMethod) {
        return res.status(405).end(`Method ${req.method} Not Allowed`)
      }

      // global middleware
      await jwtMiddleware(req, res)

      // route handler
      await handler.api(req, res)
    } catch (err) {
      // global error handler
      errorHandler(err, res)
    }
  }
}
