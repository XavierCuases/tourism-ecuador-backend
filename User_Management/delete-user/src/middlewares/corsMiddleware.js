const cors = require('cors');
const corsMiddleware = cors({
    origin: 'http://localhost:8080', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
});

module.exports = corsMiddleware;
