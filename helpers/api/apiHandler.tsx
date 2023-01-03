import { errorHandler } from './errorHandler'
import { jwtMiddleware } from './jwtMiddleware'
import type { NextApiRequest, NextApiResponse } from 'next'

interface APIHander {
  get: Function
  put: Function
  delete: Function
  post: Function
}
const methods = ['get', 'put', 'delete', 'post'] as const
type APIMethods = 'get' | 'put' | 'delete' | 'post'

const isHTTP = (x: any): x is APIMethods => methods.includes(x)

export const apiHandler = (handler: APIHander) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method?.toLowerCase() as unknown

    if (!isHTTP(method) || !handler[method]) {
      return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    try {
      // global middleware
      await jwtMiddleware(req, res)

      // route handler
      await handler[method](req, res)
    } catch (err) {
      // global error handler
      errorHandler(err, res)
    }
  }
}
