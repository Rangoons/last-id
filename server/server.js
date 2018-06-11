const express = require('express')
const mongoose = require('mongoose')

const app = express()

const MONGO_URL = 'mongodb://127.0.0.1:27017'

try {
    mongoose.connect(MONGO_URL)
}catch(err){
    console.log(err)
}

app.listen(8000)