const mongoose = require('mongoose')
require('dotenv').config()

let MONGODB_URI = `mongodb+srv://monomer:${process.env.ATLAS_PASSWORD}@cluster0.sw6th.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
