const express = require('express');
const productController = require('../middleware/controllers/product');

const router = express.Router();

router.get('/' , productController.get);

module.exports = router;
