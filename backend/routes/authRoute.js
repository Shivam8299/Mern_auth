import express from 'express'
const router = express.Router()
import { signup,login,logout } from '../controllers/authController.js'

router.post('/sign-up',signup)
router.post('/login',login)
router.post('/logout',logout)
 

export default router