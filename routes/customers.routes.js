module.exports = app => {

    const router = require('express').Router()
    const CustomerController = require('../controllers/customers.controller')


    router.post('/add/customer', CustomerController.addNewCustomer)


    app.use('/api', router)


}