require('dotenv').config()

const express = require('express')

const workoutRoutes=require('./routes/workouts')
const  Mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
   next()
})
// routes
app.use('/api/workouts',workoutRoutes) 
//connect to db
Mongoose.connect(process.env.MONGO_URI)
  .then(() => { 

  })

  .catch((error)=>{
    console.log(error)
  })

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('connected to db & listening on port', process.env.PORT,)  
})