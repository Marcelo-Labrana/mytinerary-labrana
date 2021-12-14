require('dotenv').config()
const express = require("express")
const cors = require("cors")
const router = require("./routes/routes")
require("./config/database")
const passport = require('passport')

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(passport.initialize())

app.use('/api',router)

app.listen(4000, ()=>{console.log("Server is listening on port 4000")})

