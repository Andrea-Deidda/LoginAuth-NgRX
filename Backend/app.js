const express = require('express')
const app = express()
const cors = require('cors')
const routerLogin = require('./Routes/loginRouter')
const routerUser = require ('./Routes/userRouter')
const mid = require('./Middleware/mid')

require("dotenv").config();

const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/login', routerLogin)
app.use('/user', routerUser)

//
app.get('/', mid.checkAuth, (req, res) => res.end('Login Authorization app'))


mongoose.connect(mongoURI)
mongoose.connection.on('open', () => {
    console.log('Database connected successfully')
})



//Server
app.listen(port, (err) =>{
    if(!err){
        console.log("Listening on port", + port)
    }
})