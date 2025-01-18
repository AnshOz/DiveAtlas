require('dotenv').config()

const express = require('express')

// Create express app
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.get('/', (req, res) => {
    res.json({message: 'Hello World'})
})

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT)
})

