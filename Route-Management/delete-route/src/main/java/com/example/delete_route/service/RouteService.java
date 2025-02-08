package com.example.delete_route.service;

import com.example.delete_route.repository.RouteRepository;
import org.springframework.stereotype.Service;

@Service
public class RouteService {

   

    private final RouteRepository routeRepository;

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    public void deleteRoute(Long id) {
        if (!routeRepository.existsById(id)) {
            throw new RuntimeException("Route not found with ID: " + id);
        }
        routeRepository.deleteById(id);
    }
}
