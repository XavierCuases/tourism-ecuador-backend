package com.example.delete_route.service;

import com.example.delete_route.repository.RouteRepository;

import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

@Service
public class RouteService {

    private final RouteRepository routeRepository;

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    public void deleteRoute(Long id) {
        if (!routeRepository.existsById(id)) {
            throw new NoSuchElementException("No se puede eliminar, la ruta con ID " + id + " no existe.");
        }
        routeRepository.deleteById(id);
    }
}
