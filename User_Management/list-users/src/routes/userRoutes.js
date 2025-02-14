const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


router.get('/users', userController.listUsers);

router.get('/users/:id', userController.listUsers);  

module.exports = router;
