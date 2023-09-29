require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/pgthakur',(req,res) => {
    res.send('<h1>Hi This is PG THAKUR</h1>')
})
app.get('/youtube', (req,res) => {
    res.send('<h1>hi hi hi hi....</h1>')
})