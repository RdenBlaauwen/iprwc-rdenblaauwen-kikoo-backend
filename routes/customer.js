const express = require('express');
const service = require('../services/customer');

const router = express.Router();

router.get('/' , service.get);
router.patch('/' , service.patch);

module.exports = router;
