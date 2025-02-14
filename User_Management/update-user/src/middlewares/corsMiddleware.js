const cors = require('cors');
const corsMiddleware = cors({
    origin: 'http://3.84.48.248:8080', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
});

module.exports = corsMiddleware;
