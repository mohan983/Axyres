import express from 'express'
import {  getMe, Login, Signup } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/signup', Signup)
userRouter.post('/login', Login)
userRouter.get("/me", getMe)

export default userRouter