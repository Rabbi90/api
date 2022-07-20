const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
const app = express()
require('./config/db')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)


app.use((req, res, next) => {
    res.status(404).json({
        url: 'unknown',
        message: '404 Page Not Found'
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({
        status: false,
        message: 'Something Broke !'
    })
})


module.exports = app