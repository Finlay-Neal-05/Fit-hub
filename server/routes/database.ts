import { Router } from 'express'

import * as db from '../db/database.ts'
import { UserData } from '../../models/User.ts'

const router = Router()

router.get('/getallusers', async (req, res) => {
  try {
    const users = await db.getAllUsers()

    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/createuser', async (req,res) => {
  try {
    const user: UserData = req.body.user
    if (!user || !user.name || !user.password) {
      return res.status(400).json({ message: 'Invalid user data' });
    }

    await db.createNewUser(user)

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
