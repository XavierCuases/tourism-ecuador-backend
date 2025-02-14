const express = require('express');
const { getAllPackages } = require('../controllers/packageController');

const router = express.Router();

router.get('/packages', getAllPackages);

module.exports = router;
