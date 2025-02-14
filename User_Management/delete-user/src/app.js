const express = require('express');
const userRoutes = require('./routes/userRoutes');
const corsMiddleware = require('./middlewares/corsMiddleware');
const sequelize = require('./config/dbConfig');
const setupSwagger = require('./swagger');  

const app = express();
app.use(corsMiddleware);

app.use(express.json());

setupSwagger(app);

app.use('/api', userRoutes);

sequelize.authenticate().then(() => {
    console.log('Database connected EXitPOL!');
}).catch(err => {
    console.log('Database connection error:', err);
});

const PORT = process.env.PORT || 7002; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger UI is available at http://localhost:${PORT}/api-docs`);
});
