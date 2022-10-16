const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// const MongoStore = require('connect-mongo')(session)
// const flash = require('express-flash')
const logger = require('morgan')
const mainRoutes = require('./routes/main')

require('dotenv').config({path: '.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

app.use('/', mainRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on Port ${process.env.PORT}, you better catch it!`)
})  