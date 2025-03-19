import express from 'express'
const router = express.Router()
import { signup,login,logout } from '../controllers/authController.js'

router.get('/sign-up',signup)
router.get('/login',login)
router.get('/logout',logout)
 

export default router