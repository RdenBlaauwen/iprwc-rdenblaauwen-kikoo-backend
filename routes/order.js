const express = require('express');
const orderController = require('../middleware/controllers/order');

const router = express.Router();

router.post('/' , orderController.post);

module.exports = router;
