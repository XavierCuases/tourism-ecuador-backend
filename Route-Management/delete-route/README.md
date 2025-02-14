# Delete Route Microservice

Este microservicio permite eliminar rutas existentes del sistema.

## Tecnologías Utilizadas

- Lenguaje: Java
- Framework: Spring Boot
- Base de datos: PostgreSQL
- Dependencias principales:
  - Spring Web
  - Spring Data JPA
  - PostgreSQL Driver

## Endpoints

### Eliminar una ruta

**URL:** `/api/routes/{id}`  
**Método:** `DELETE`  
**Descripción:** Elimina una ruta específica de la base de datos.

**Respuesta exitosa:**  
Código HTTP `204 No Content`.

**Respuesta de error (si la ruta no existe):**
```json
{
    "timestamp": "2025-02-08T17:45:00.123+00:00",
    "status": 404,
    "error": "Not Found",
    "message": "Route not found",
    "path": "/api/routes/1"
}
