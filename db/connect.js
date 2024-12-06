const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = `mongodb+srv://anhananh:${process.env.DB_PASS}@resource.wpl9o0x.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Resource`

async function connect() {
    try {
        await mongoose.connect(connectionString)
        console.log('Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    connect
}
