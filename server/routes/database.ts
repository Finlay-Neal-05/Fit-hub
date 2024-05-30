import { Router } from 'express'

import * as db from '../db/database.ts'

const router = Router()

router.get('/getAllUsers', async (req, res) => {
  try {
    const users = await db.getAllUsers()

    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
