const express = require('express')
const router = express.Router()
const {getAllNews, getSingleNews, createNews, updateNews, deleteNews} = require('../controllers/news')

router.route('/').get(getAllNews)
router.route('/:id').get(getSingleNews)
router.route('/:id').post(createNews)
router.route('/:id').put(updateNews)
router.route('/:id').delete(deleteNews)


module.exports = router

