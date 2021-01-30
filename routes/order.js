const express = require('express');
const orderService = require('../services/order');

const router = express.Router();

router.get('/' , orderService.get);
router.post('/' , orderService.post);

module.exports = router;
