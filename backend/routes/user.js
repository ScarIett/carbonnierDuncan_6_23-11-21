const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');

router.post('api/auth/signup', userControllers.signup);
router.post('api/auth/login', userControllers.login);

module.exports = router;