package com.example.update_route.controller;
import com.example.update_route.models.Route;
import com.example.update_route.service.RouteService;

import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/routes")
public class RouteController {
    private final RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @PutMapping("/{id}")
public ResponseEntity<?> updateRoute(@PathVariable Long id, @RequestBody Route route) {
    try {
        Route updatedRoute = routeService.updateRoute(id, route);
        return ResponseEntity.ok(updatedRoute);
    } catch (NoSuchElementException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                             .body("{\"error\": \"La ruta con ID " + id + " no existe1.\"}");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                             .body("{\"error\": \"Error en la solicitud: " + e.getMessage() + "\"}");
    }
    }

    
}
