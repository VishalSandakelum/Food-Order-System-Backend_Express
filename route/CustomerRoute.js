const express = require('express');
const router = express.Router();
const CustomerController = require('../controller/Customer');

router.post('/save', CustomerController.saveCustomer);


module.exports = router;