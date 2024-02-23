const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const UploadRoutes = require('./routes/UploadRoutes')

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const Port = process.env.Port || 5000

mongoose.connect('mongodb://127.0.0.1:27017', {
    dbName: "gallery"
}).then(() => {
    console.log('data is connected')
}).catch((e) => {
    console.log(e)
})

app.use(UploadRoutes)

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(Port, () => {
  console.log(`server is running on port ${Port}`)
})