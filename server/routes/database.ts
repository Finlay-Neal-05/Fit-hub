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

router.get('/getworkoutsbyid/:id', async (req,res) => {
  try {
    const id = Number(req.params.id)
    const data = await db.getUserWorkoutsById(id)

    res.json(data)
  } catch {
    throw new Error
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
