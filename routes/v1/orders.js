const express = require('express');
const router = express.Router();

const ordersController = require('../../controllers/v1/orders');

router.get('/', ordersController.listOrders);
router.post('/save', ordersController.saveOrder);

module.exports = router;
