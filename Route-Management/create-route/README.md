# Create Route Microservice

Este microservicio permite crear nuevas rutas en el sistema.

## Tecnologías Utilizadas

- Lenguaje: Java
- Framework: Spring Boot
- Base de datos: PostgreSQL
- Dependencias principales:
  - Spring Web
  - Spring Data JPA
  - PostgreSQL Driver

## Endpoints

### Crear una ruta

**URL:** `/api/routes`  
**Método:** `POST`  
**Descripción:** Crea una nueva ruta en la base de datos.

**Body de ejemplo:**
```json
{
    "name": "Ruta de prueba",
    "description": "Esta es una ruta de prueba",
    "distance": 10.5,
    "startPoint": "Quito",
    "endPoint": "Guayaquil",
    "duration": 5
}
