const express = require('express');
const userController = require('../middleware/controllers/user');

const router = express.Router();

router.post('/' , userController.post);

module.exports = router;
