const express = require('express')
const couponController = require('../controller/Coupons')
const Router = express.Router()

Router.get('/',couponController.getAllCoupons)
Router.get('/:id',couponController.getCouponByid)
Router.post('/',couponController.createCoupon)
Router.put('/:id',couponController.editCoupon)
Router.delete('/:id',couponController.editCoupon)

module.exports = Router