const express = require('express');
const { verifyToken, verifyRole } = require('../middlewares/authMiddleware');
const router = express.Router();


router.get('/admin-dashboard', verifyToken, verifyRole(['admin']), (req, res) => {
    console.log('Access granted to admin-dashboard'); 
    res.json({ message: 'Welcome to the admin dashboard' });
});

router.get('/tourist-locations', verifyToken, verifyRole(['user']), (req, res) => {
    console.log('Access granted to tourist-locations'); 
    res.json({ message: 'Welcome to the tourist locations' });
});

router.get('/profile', verifyToken, (req, res) => {
    console.log('Access granted to profile'); 
    res.json({ message: 'Welcome to your profile', user: req.user });
});

module.exports = router;
