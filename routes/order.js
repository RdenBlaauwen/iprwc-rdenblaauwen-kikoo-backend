const express = require('express');
const orderService = require('../services/order');

const router = express.Router();

router.post('/' , orderService.post);

module.exports = router;
