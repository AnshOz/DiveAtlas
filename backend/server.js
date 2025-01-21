require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const regionsRouter = require('./routes/regions')

// Create express app
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/regions', regionsRouter)


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  // Listen for requests
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
  })
})
.catch((err) => {console.log(err)})

