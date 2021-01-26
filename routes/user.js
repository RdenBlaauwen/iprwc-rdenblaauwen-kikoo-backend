const express = require('express');
const userService = require('../services/user');
const authentication = require('../middleware/authentication');

const router = express.Router();
router.post('/authenticate' , authentication.login);
router.post('/' , userService.post);

module.exports = router;
