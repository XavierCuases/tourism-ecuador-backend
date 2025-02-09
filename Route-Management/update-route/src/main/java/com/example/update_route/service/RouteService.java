package com.example.update_route.service;
import com.example.update_route.models.Route;
import com.example.update_route.repository.RouteRepository;

import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;
@Service
public class RouteService {


    private final RouteRepository routeRepository;

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    public Route updateRoute(Long id, Route route) {
        Route existingRoute = routeRepository.findById(id)
        .orElseThrow(() -> new NoSuchElementException("No existe la ruta con ID " + id));

    existingRoute.setName(route.getName());
    existingRoute.setDescription(route.getDescription());
    existingRoute.setDistance(route.getDistance());
    existingRoute.setStartPoint(route.getStartPoint());
    existingRoute.setEndPoint(route.getEndPoint());
    existingRoute.setDuration(route.getDuration());

    return routeRepository.save(existingRoute);
}
}
