# User Management Microservice - Update User

This is the **User Management Microservice** for managing user data within the **Tourism Ecuador** platform. This microservice provides functionality to **update user** details such as name, email, password, and role. The microservice is built with **Node.js**, **Express**, and uses **PostgreSQL** for data storage.

## Features

- **Update User**: Allows updating user details such as name, email, password, and role.
- **Secure Password Storage**: Passwords are securely hashed using **bcrypt** before being stored in the database.
- **CORS Enabled**: The service supports cross-origin requests.
- **API Documentation**: The API documentation is available via **Swagger UI** at `/api-docs`.

## Tech Stack

- **Backend**: Node.js with Express
- **Database**: PostgreSQL (Hosted on AWS RDS)
- **ORM**: Sequelize (to interact with PostgreSQL)
- **Authentication**: bcrypt (for password hashing)
- **CORS**: For handling cross-origin requests
- **Swagger UI**: For interactive API documentation

## Installation

Follow the steps below to set up and run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/XavierCuases/tourism-ecuador-backend.git
cd tourism-ecuador-backend/User_Managemente/update-user

Esto instalará paquetes como Express, Sequelize, PostgreSQL, bcrypt y CORS.

Configuración de la Base de Datos
Para conectar el microservicio a tu base de datos PostgreSQL (local o AWS RDS), abre el archivo src/config/dbConfig.js y verifica que contenga las credenciales correctas.

Puedes colocar la configuración directamente en dbConfig.js o usar variables de entorno para los datos sensibles:

javascript
Copiar
Editar
require('dotenv').config(); // Cargar las variables de entorno

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
        dialectOptions: {
            ssl: {
                require: true,  // Habilitar SSL
                rejectUnauthorized: false  // Desactivar la validación del certificado
            }
        }
    }
);

module.exports = sequelize;
Asegúrate de tener un archivo .env en la raíz del proyecto con las credenciales de la base de datos:

plaintext
Copiar
Editar
DB_HOST=your-rds-endpoint.amazonaws.com
DB_PORT=5432
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
Iniciar el Servidor
Una vez instaladas las dependencias y configurada la base de datos, inicia el servidor con:

bash
Copiar
Editar
npm start
El servidor correrá en el puerto 7000 por defecto.

Acceder a Swagger UI
Puedes acceder a la documentación interactiva de la API en:

bash
Copiar
Editar
http://localhost:7000/api-docs
Probar la API de Actualización de Usuario en Postman
Método HTTP: PUT
URL: http://localhost:7000/api/users/:id (Reemplaza :id con el ID del usuario a actualizar)
Cuerpo (raw JSON):
json
Copiar
Editar
{
  "name": "Updated Name",
  "email": "updated.email@example.com",
  "password": "newPassword123",
  "role": "admin"
}
Respuesta esperada:
json
Copiar
Editar
{
  "message": "User updated successfully",
  "user": {
    "id": 1,
    "name": "Updated Name",
    "email": "updated.email@example.com",
    "role": "admin"
  }
}
Configuración con Docker
Puedes ejecutar este microservicio dentro de un contenedor Docker para facilitar su despliegue.

1. Construir la Imagen Docker
bash
Copiar
Editar
docker build -t update-user .
2. Ejecutar el Contenedor
bash
Copiar
Editar
docker run -p 7000:7000 update-user
Esto iniciará el servidor dentro de un contenedor Docker y lo hará accesible en http://localhost:7000.

Solución de Problemas
Si tienes problemas de conexión con la base de datos, verifica lo siguiente:

Grupos de Seguridad en AWS: Asegúrate de que tu IP esté permitida en el grupo de seguridad de RDS.
Configuración de la Base de Datos: Confirma que las credenciales en src/config/dbConfig.js coincidan con las de AWS RDS.
Siguientes Pasos
Implementar autenticación con JWT para proteger ciertas rutas.
Desarrollar funcionalidades de creación, eliminación y listado de usuarios.
Desplegar en producción y configurar para escalabilidad.
Integrar con el frontend para un desarrollo full-stack.
Licencia
Este proyecto está licenciado bajo la MIT License. Consulta el archivo LICENSE para más detalles.

Repositorio
Para más detalles y contribuciones, visita el repositorio:

GitHub - XavierCuases/tourism-ecuador-backend