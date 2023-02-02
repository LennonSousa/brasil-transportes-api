import express, { request, response } from 'express'

import './infra/database/connection'

const app = express()

app.get('/', (request, response) => {
  return response.send('ola nlw 5')
})

app.listen(3332, () => {
  console.log('> Server is running...')
})
