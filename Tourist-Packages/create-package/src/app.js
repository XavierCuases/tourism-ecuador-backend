const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const packageRoutes = require('./routes/packageRoutes');
const setupSwagger = require('./swagger'); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', packageRoutes);


setupSwagger(app);


sequelize.sync().then(() => {
  app.listen(3003, () => {
    console.log('Server running on port 3003');
    console.log('Swagger documentation is available at http://localhost:3003/docs');
  });
}).catch(err => {
  console.error('Database connection error:', err);
});
