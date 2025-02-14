# 📌 Cancel-Reservation API

Este es un **microservicio REST API** basado en **Flask** y **MySQL** para la cancelación de reservas.

## 🚀 Tecnologías Utilizadas
- **Flask** (Framework Web)
- **Flask-SQLAlchemy** (ORM para MySQL)
- **Flask-RESTful** (Manejo de APIs REST)
- **Flask-CORS** (Permitir peticiones entre dominios)
- **Flask-Swagger-UI** (Documentación interactiva)
- **PyMySQL** (Conector MySQL)
- **Python-Dotenv** (Manejo de variables de entorno)

---

---

## 🛠 **Instalación y Configuración**

### **1️⃣ Clonar el Proyecto**
```bash
git clone https://github.com/XavierCuases/tourism-ecuador-backend.git
cd cancel-reservation

Crear y Activar un Entorno Virtual
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows

3️⃣ Instalar Dependencias
pip install -r requirements.txt

4️⃣ Configurar Variables de Entorno
Editar el archivo .env con las credenciales de MySQL:

5️⃣ Crear la Base de Datos

Ejecutar los siguientes comandos en Python:

from run import app
from database import db

with app.app_context():
    db.create_all()

✅ Esto creará la tabla reservas en MySQL.

🚀  Server running!
🔗  API Endpoint: http://localhost:8002/api/reservas/cancelar/<id>
📄  Swagger docs available at: http://localhost:8002/swagger



 Endpoints Disponibles
Método	Endpoint	Descripción
PUT	/api/reservas/cancelar/<id>	Cancelar una reserva por ID

🔎 Probar API en Postman
Cancelar una Reserva
Método: PUT
URL: http://localhost:8002/api/reservas/cancelar/1
Respuesta esperada (200 OK):

{
    "message": "Reserva cancelada exitosamente",
    "id": 1,
    "estado": "cancelada"
}

Si el ID no existe (404 Not Found)

{
    "message": "Reserva no encontrada"
}

Si la reserva ya está cancelada (400 Bad Request)

{
    "message": "La reserva ya está cancelada"
}

📄 Documentación Swagger

 Accede a la documentación en http://localhost:8002/swagger.

