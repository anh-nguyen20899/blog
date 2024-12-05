const express = require('express')
const router = express.Router()
const {getAllTasks, getSingleTask, createTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks)
router.route('/:id').get(getSingleTask)
router.route('/:id').post(createTask)
router.route('/:id').put(updateTask)
router.route('/:id').delete(deleteTask)

module.exports = router