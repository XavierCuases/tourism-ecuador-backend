const jwt = require('jsonwebtoken');

// Middleware to verify the token
exports.verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    console.log('Token received:', token); // Log para verificar el token recibido

    if (!token) {
        console.log('No token provided'); // Log para token faltante
        return res.status(401).json({ message: 'Access denied. Token not provided.' });
    }

    try {
        // Extraer el token eliminando el prefijo "Bearer"
        const tokenValue = token.split(' ')[1];
        const verified = jwt.verify(tokenValue, process.env.JWT_SECRET);

        console.log('Token verified. Payload:', verified); // Log para verificar datos del token
        req.user = verified; // Adjuntar datos del usuario al objeto de la solicitud
        next();
    } catch (error) {
        console.error('Token verification failed:', error.message); // Log para errores en la verificación
        res.status(400).json({ message: 'Invalid token' });
    }
};

// Middleware to verify user roles
exports.verifyRole = (roles) => {
    return (req, res, next) => {
        console.log('User role:', req.user?.role); // Log para verificar el rol del usuario
        console.log('Allowed roles:', roles); // Log para los roles permitidos en la ruta

        if (!req.user || !roles.includes(req.user.role)) {
            console.log('Access denied. Insufficient permissions'); // Log para acceso denegado
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }

        next(); // Continuar si el rol es válido
    };
};
