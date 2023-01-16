import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import getConfig from 'next/config'
import type { NextApiRequest, NextApiResponse } from 'next'

import { apiHandler } from '../../../helpers/api/apiHandler'
import { usersRepo } from '../../../helpers/api/usersRepo'

const { serverRuntimeConfig } = getConfig()

const authenticate = (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body
  const user = usersRepo.find((u: any) => u.email === email)

  // validate
  if (!(user && bcrypt.compareSync(password, user.hash))) {
    throw 'Email or password is incorrect'
  }

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, {
    expiresIn: '7d'
  })

  // return basic user details and token
  return res.status(200).json({
    id: user.id,
    email: user.email,
    name: user.name,
    token
  })
}

export default apiHandler({
  api: authenticate,
  method: 'post'
})
