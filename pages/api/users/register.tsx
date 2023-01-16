import bcrypt from 'bcryptjs'
import { apiHandler } from '../../../helpers/api/apiHandler'
import { usersRepo } from '../../../helpers/api/usersRepo'
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  // split out password from user details
  const { password, ...user } = req.body

  // validate
  if (usersRepo.find((x: any) => x.email === user.email)) {
    throw `User with the email "${user.email}" already exists`
  }

  // hash password
  user.hash = bcrypt.hashSync(password, 10)
  try {
    const register = await prisma.account.create({
      data: {
        email: user.email,
        password: user.hash,
        user_type: 'guest',
        user_info: {
          create: { name: user.name }
        }
      }
    })
    console.info('Account registered successfully', register)
  } catch (error) {
    throw `DB error: Unable to create user with "${user.email}"`
  }

  return res.status(200).json({})
}

const invalid = () => null

export default apiHandler({
  api: register,
  method: 'post'
})
