const Task = require('../models/task.model')

const getAllTasks = (req, res) => {
    res.send('all items')
}
const getSingleTask = async (req, res) => {
    const {id} = req.body.id
    const posts = await Task.find({id})
    res.send('get Single Task')
}
const createTask = async (req, res) => {
    console.log(req.body)
    const {text, description, status} = req.body
    try {
        const task = new Task({
            text,
            description,
            status: status ? status : 'To do'
        })
        await task.save()
        res.status(201).json({task})
    } catch (error) {
        console.log(error)
    }
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete tasks')
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getSingleTask
}