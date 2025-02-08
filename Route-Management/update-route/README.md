# Update Route Microservice

Este microservicio permite actualizar rutas existentes en el sistema.

## Tecnologías Utilizadas

- Lenguaje: Java
- Framework: Spring Boot
- Base de datos: PostgreSQL
- Dependencias principales:
  - Spring Web
  - Spring Data JPA
  - PostgreSQL Driver

## Endpoints

### Actualizar una ruta

**URL:** `/api/routes/{id}`  
**Método:** `PUT`  
**Descripción:** Actualiza una ruta existente.

**Body de ejemplo:**
```json
{
    "name": "Ruta actualizada",
    "description": "Descripción actualizada",
    "distance": 12.0,
    "startPoint": "Cuenca",
    "endPoint": "Guayaquil",
    "duration": 6
}
