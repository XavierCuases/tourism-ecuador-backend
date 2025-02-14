const express = require('express');
const { getAllPackages, getPackageById } = require('../controllers/packageController');

const router = express.Router();
router.get('/packages', getAllPackages);
router.get('/packages/:id', getPackageById); 

module.exports = router;
