const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value'],
    },
    description: {
        type: String,
        require: false
    },
    status: {
        type: String,
        enum : ['To do', 'InProgress', 'Done']
    }   
})
/*
by setting timestamps: true, Mongoose will automatically create a createdAt and updatedAt fields.
*/
const task = mongoose.model('Task', taskSchema)
module.exports = task