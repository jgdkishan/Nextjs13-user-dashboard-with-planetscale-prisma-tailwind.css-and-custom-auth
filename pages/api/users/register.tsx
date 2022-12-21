const bcrypt = require('bcryptjs')
import { apiHandler } from '../../../helpers/api/apiHandler'
import { usersRepo } from '../../../helpers/api/usersRepo'
import { Request, Response } from 'express'

const register = (req: Request, res: Response) => {
  // split out password from user details
  const { password, ...user } = req.body

  // validate
  if (usersRepo.find((x: any) => x.email === user.email))
    throw `User with the email "${user.email}" already exists`

  // hash password
  user.hash = bcrypt.hashSync(password, 10)

  usersRepo.create(user)
  return res.status(200).json({})
}

const invalid = () => null

export default apiHandler({
  get: invalid,
  put: invalid,
  delete: invalid,
  post: register
})
