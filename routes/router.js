const express = require('express')
const router = express.Router()
const { getHome, getOneUser, getAllUser, createUser, updateUser, deleteUser } = require('../controller/controller')

router.get('/', getHome)
router.get('/users', getAllUser)
router.get('/users/:id', getOneUser)
router.post('/create', createUser)
router.patch('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router