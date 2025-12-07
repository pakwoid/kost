import express from 'express'

import permissionHelper
  from '../helpers/permissionHelper.mjs'

import userController
  from '../controller/userController.mjs'

const userRouter = express.Router()

userRouter.get('/view/all',
  permissionHelper,
  userController.getViewAll
)

userRouter.get('/view/:id',
  permissionHelper,
  userController.getViewId
)

userRouter.post('/create',
  permissionHelper,
  userController.postCreate
)

userRouter.put('/update/:id',
  permissionHelper,
  userController.putUpdateId
)

userRouter.delete('/remove/:id',
  permissionHelper,
  userController.deleteRemoveId
)

export default userRouter 
