const express = require('express')
const tasks = require('../routes/tasks')
const news = require('../routes/news') 
const db = require('../db/connect')
const app = express()
const port = 3000
const task = require('../models/task.model')

// middleware
app.use(express.json())

// Connect to db
db.connect()

app.get('/', (req, res) => {
  res.send("Hello WOrld")
})

app.use('/api/v1/tasks', tasks)
app.use('/api/v1/news', news)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})