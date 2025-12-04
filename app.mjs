import express from 'express'
import userRouter from './routers/userRouter.mjs'

const app = express()

app.use(express.json())

app.use('/user', userRouter)

app.use((req, res) => {
  res.status(404)
  res.json({
    'message' : 'not found'
  })
})

export default app
