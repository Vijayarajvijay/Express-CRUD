const express = require('express')
const userController = require('../controller/user')
const router = express.Router()

router.get('/',userController.getUsers)
router.get('/:id',userController.getUserById)
router.post('/create',userController.create)
router.put('/:id',userController.editById)
router.delete('/:id',userController.deleteById)

module.exports=router