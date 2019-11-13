require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//routers
const userRoutes = require('./routs/userRouter')
const orderRoutes = require('./routs/orderRouter')


const PORT = process.env.PORT || 3000;
const DBURI = process.env.MONGOURI

app.use(morgan('dev'))
app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// app.
app.use('/users', userRoutes)
app.use('/orders',orderRoutes)

mongoose.connect(DBURI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
.then(()=>console.log(chalk.blue('database connection estabilished succesfully')))

app.listen(PORT, (err)=>{
    if(err){
        console.log(chalk.red('server error'))
    }else{
        console.log(chalk.green(`app listens port: ${PORT}`))
    }
})