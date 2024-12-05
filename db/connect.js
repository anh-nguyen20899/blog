const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = `mongodb+srv://anhananh:2qnaxQ$M@resource.wpl9o0x.mongodb.net/Test?retryWrites=true&w=majority&appName=Resource`

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
