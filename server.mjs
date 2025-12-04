import app from './app.mjs'

app.listen(process.env.PORT, () => {
  console.log('run on port ' + process.env.PORT)
})
