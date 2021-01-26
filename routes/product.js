const express = require('express');
const productService = require('../services/product');

const router = express.Router();

router.get('/' , productService.get);

module.exports = router;
