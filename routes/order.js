const express = require('express');
const orderService = require('../services/order');

const router = express.Router();

router.get('/' , orderService.get);
router.post('/' , orderService.post);
router.patch('/' , orderService.patch);
router.delete('/:id' , orderService.delete);

module.exports = router;
