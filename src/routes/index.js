const express = require('express')
const router = express.Router()

const CouponsRoutes = require('./Coupons')
const UseRoutes = require('./user')


router.use('/coupons',CouponsRoutes)
router.use('/user',UseRoutes)

module.exports=router