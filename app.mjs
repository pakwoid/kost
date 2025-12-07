import express from 'express'
import session from 'express-session'

import userRouter from './routers/userRouter.mjs'

const app = express()

app.use(session({
  secret: process.env.SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.MODE == 'devel' ? false ; true,
    maxAge: 1000 * 60 * 5
  }
}));

app.use(express.json())

app.use('/user', userRouter)

app.use((req, res) => {
  res.status(404)
  res.json({
    'message' : 'not found'
  })
})

export default app
