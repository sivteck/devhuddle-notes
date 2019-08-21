const express = require('express')

const app = express()
const port = 3088

app.use(express.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/insert', async function (req, res) {
  console.log(req.body)
  res.send('inserted item')
})

app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log('listening on port 3088'))
