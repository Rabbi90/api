const mongoose = require('mongoose')
const config = require('./config')
const DB_URL = config.db.url

mongoose.connect(DB_URL)
    .then(() => {
        console.log('Connected To Mongodb Atlas');
    }).catch((er) => {
        console.log(er);
        process.exit(1)
    })