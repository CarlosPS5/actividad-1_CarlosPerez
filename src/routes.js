const express = require('express')


const router = express.Router()

const userController = require('../src/controllers/userController')

router.post('/user', userController.createUser)

router.get('/users', userController.getUsers)

router.get('/users/:dni', userController.getUserByDNI)

router.put('/user/:dni', userController.updateUser)

router.delete('/user/:dni', userController.deleteUser)

module.exports = router