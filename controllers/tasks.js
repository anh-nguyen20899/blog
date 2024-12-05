const getAllTasks = (req, res) => {
    res.send('all items')
}
const getSingleTask = (req, res) => {
    res.send('get Single Task')
}
const createTask = (req, res) => {
    console.log(req.body)
    res.send('Create Task')
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