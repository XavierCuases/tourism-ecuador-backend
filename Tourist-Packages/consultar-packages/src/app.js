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

console.log('Swagger está disponible en http://localhost:3002/docs');

sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log('Servidor corriendo en el puerto 3002');
  });
}).catch(err => {
  console.error('Error de conexión:', err);
});
