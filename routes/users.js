const express = require('express');
const userController = require('../middleware/controllers/user');
const authentication = require('../middleware/authentication');

const router = express.Router();
router.post('/authenticate' , authentication.login);
router.post('/' , userController.post);

module.exports = router;
