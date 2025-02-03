const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/AuthRoutes'); 
const protectedRoutes = require('./routes/ProtectedRoutes'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); 
app.use('/api', protectedRoutes); 

module.exports = app; 