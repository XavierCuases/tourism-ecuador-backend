const express = require('express');
const { verifyToken, verifyRole } = require('../middlewares/authMiddleware');
const router = express.Router();

// Route accessible only to admins
router.get('/admin-dashboard', verifyToken, verifyRole(['admin']), (req, res) => {
    console.log('Access granted to admin-dashboard'); // Log de acceso
    res.json({ message: 'Welcome to the admin dashboard' });
});

// Route accessible only to users
router.get('/tourist-locations', verifyToken, verifyRole(['user']), (req, res) => {
    console.log('Access granted to tourist-locations'); // Log de acceso
    res.json({ message: 'Welcome to the tourist locations' });
});

// Route accessible to both admins and users
router.get('/profile', verifyToken, (req, res) => {
    console.log('Access granted to profile'); // Log de acceso
    res.json({ message: 'Welcome to your profile', user: req.user });
});

module.exports = router;
