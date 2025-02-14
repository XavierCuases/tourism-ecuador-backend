const express = require('express');
const userController = require('../controllers/userController');  

const router = express.Router();

router.get('/users', userController.listUsers);

router.delete('/users/:id', userController.deleteUser);  

module.exports = router;
