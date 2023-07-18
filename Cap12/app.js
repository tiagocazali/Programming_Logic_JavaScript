const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World! - Seja Bem vindo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})