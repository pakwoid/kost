import express from 'express'
import userController from '../controller/userController.mjs'

const userRouter = express.Router()

userRouter.get('/view/all', userController.getViewAll)
userRouter.get('/view/:id', userController.getViewId)
userRouter.post('/create', userController.postCreate)
userRouter.put('/update/:id', userController.putUpdateId)
userRouter.delete('/remove/:id', userController.deleteRemoveId)

export default userRouter 
