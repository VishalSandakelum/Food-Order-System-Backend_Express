const express = require('express');
const router = express.Router();
const FoodsController = require('../controller/Foods');

router.post('/save', FoodsController.saveFoods);
router.get('/getAll', FoodsController.getAllFoods);
router.put('/update', FoodsController.updateFoods);
router.delete('/delete', FoodsController.deleteFoods);
router.get('/get', FoodsController.getFoods);

module.exports = router;