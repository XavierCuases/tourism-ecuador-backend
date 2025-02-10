# 📌 Consult-Reservation API

Este es un **microservicio REST API** basado en **Flask** y **MySQL** para la gestión y consulta de reservas.

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
cd consult-reservation
3️⃣ Instalar Dependencias
pip install -r requirements.txt


4️⃣ Configurar Variables de Entorno
Editar el archivo .env con las credenciales de MySQL:

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=reservas
DB_PORT=3306
SECRET_KEY=super_secret_key
DEBUG=true

Ejecutar el Servidor

python run.py

Salida esperada en consola:
🚀  Server running!
🔗  API Endpoint: http://localhost:8001/api/reservas
📄  Swagger docs available at: http://localhost:8001/swagger

Endpoints Disponibles
Método	Endpoint	Descripción
GET	/api/reservas	Listar todas las reservas
GET	/api/reservas/<id>	Obtener una reserva por ID

🔎 Probar API en Postman
1️⃣ Listar todas las reservas
Método: GET
URL: http://localhost:8001/api/reservas
Respuesta esperada (200 OK):

[
    {
        "id": 1,
        "usuario_id": 101,
        "actividad_id": 505,
        "fecha_reserva": "2024-07-01T12:00:00Z",
        "estado": "pendiente"
    }
]

2️⃣ Consultar una reserva por ID
Método: GET
URL: http://localhost:8001/api/reservas/1
Respuesta esperada (200 OK):

{
    "id": 1,
    "usuario_id": 101,
    "actividad_id": 505,
    "fecha_reserva": "2024-07-01T12:00:00Z",
    "estado": "pendiente"
}

Si el ID no existe, devolverá 404 Not Found:

{
    "message": "Reserva no encontrada"
}
