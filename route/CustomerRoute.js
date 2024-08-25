const express = require('express');
const router = express.Router();
const CustomerController = require('../controller/Customer');

router.post('/save', CustomerController.saveCustomer);
// router.put('/update', CustomerController.updateCustomer);
// router.get('/get/:userId', CustomerController.getCustomer);
// router.delete('/delete/:userId', CustomerController.deleteCustomer);


module.exports = router;