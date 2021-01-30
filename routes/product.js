const express = require('express');
const productService = require('../services/product');

const router = express.Router();

router.get('/' , productService.get);
router.patch('/' , productService.patch);
router.delete('/:id' , productService.delete);

module.exports = router;
