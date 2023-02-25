import express, { request, response } from 'express'

import './infra/database/connection'

const app = express()

app.listen(3332, () => {
  console.log('> Server is running...')
})
