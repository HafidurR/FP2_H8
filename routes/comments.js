const router = require('express').Router()
const commentRoute = require('../controller/comment')
const verifyToken = require('../middleware/verifyToken')

router.post('/', verifyToken, commentRoute.create)

module.exports = router