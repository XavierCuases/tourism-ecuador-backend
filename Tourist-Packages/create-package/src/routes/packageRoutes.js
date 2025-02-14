const express = require('express');
const { createPackage } = require('../controllers/packageController');

const router = express.Router();


router.post('/packages', createPackage);

module.exports = router;
