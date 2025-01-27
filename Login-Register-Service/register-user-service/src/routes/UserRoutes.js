const express = require('express');
const { registerUser } = require('../controllers/UserController');

const router = express.Router();

// Route to register user
router.post('/register', registerUser);

module.exports = router;
