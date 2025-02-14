# Read Route Microservice

Este microservicio permite consultar rutas almacenadas en el sistema.

## Tecnologías Utilizadas

- Lenguaje: Java
- Framework: Spring Boot
- Base de datos: PostgreSQL
- Dependencias principales:
  - Spring Web
  - Spring Data JPA
  - PostgreSQL Driver

## Endpoints

### Consultar todas las rutas

**URL:** `/api/routes`  
**Método:** `GET`  
**Descripción:** Obtiene una lista de todas las rutas.

**Respuesta de ejemplo:**
```json
[
    {
        "id": 1,
        "name": "Ruta de prueba",
        "description": "Esta es una ruta de prueba",
        "distance": 10.5,
        "startPoint": "Quito",
        "endPoint": "Guayaquil",
        "duration": 5
    }
]
