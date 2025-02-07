const cors = require('cors');
const corsMiddleware = cors({
    origin: 'http://localhost:8083', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
});

module.exports = corsMiddleware;
