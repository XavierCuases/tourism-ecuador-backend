const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    console.log('Token received:', token); 

    if (!token) {
        console.log('No token provided'); 
        return res.status(401).json({ message: 'Access denied. Token not provided.' });
    }

    try {
        
        const tokenValue = token.split(' ')[1];
        const verified = jwt.verify(tokenValue, process.env.JWT_SECRET);

        console.log('Token verified. Payload:', verified); 
        req.user = verified; 
        next();
    } catch (error) {
        console.error('Token verification failed:', error.message); 
        res.status(400).json({ message: 'Invalid token' });
    }
};

exports.verifyRole = (roles) => {
    return (req, res, next) => {
        console.log('User role:', req.user?.role); 
        console.log('Allowed roles:', roles); 

        if (!req.user || !roles.includes(req.user.role)) {
            console.log('Access denied. Insufficient permissions'); 
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }

        next(); 
    };
};
