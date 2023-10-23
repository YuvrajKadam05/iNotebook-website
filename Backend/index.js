const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 3000

// Available Routes
app.use('/')

app.get('/', (req, res) => {
  res.send('Hello yuvraj!') 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
