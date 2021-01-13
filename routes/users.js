const express = require('express');
const userController = require('../middleware/controllers/user');
const authControler = require('../middleware/controllers/auth');

const router = express.Router();
router.post('/authorize' , authControler.login);
router.post('/' , userController.post);

module.exports = router;
