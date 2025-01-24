# Microservicio de Eliminación de Usuario

Este microservicio permite eliminar usuarios de una base de datos PostgreSQL mediante un endpoint REST seguro. Incluye autenticación con JWT y documentación interactiva con Swagger.

## 🚀 Características

- **Endpoint:** `DELETE /usuarios/:id`
- **Autenticación:** Mediante tokens JWT.
- **Documentación API:** Disponible en `http://localhost:5000/apidocs/` con Swagger.
- **Base de Datos:** PostgreSQL.

## 🛠️ Tecnologías utilizadas

- **Lenguaje:** Python 3.10
- **Framework:** Flask
- **Bases de Datos:** PostgreSQL
- **Swagger:** Para documentación de la API.
- **JWT:** Para autenticación y seguridad.
- **Docker:** Para contenedorización del microservicio.

## ⚙️ Configuración y despliegue

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
