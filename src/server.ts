import express from 'express'

const app = express()

app.get('/test', (request, response) => {
  return response.send('Teste NLW')
})

app.post('/testpost', (request, response) => {
  return response.send('Teste NLW POST')
})

app.listen(4000, () => {
  console.log('Server is running /// NLW')
})