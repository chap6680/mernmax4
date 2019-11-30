const express = require('express');

const usersControllers = require('../controllers/users-controller');

const router = express.Router();

router.get('/users', usersControllers.getUsers);

router.get('/login/', usersControllers.loginUser);

router.post('/signup/', usersControllers.signupUser);

module.exports = router; 