package com.example.create_route.service;
import com.example.create_route.models.Route;
import com.example.create_route.repository.RouteRepository;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class RouteService {

   

    private final RouteRepository routeRepository;

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    public Route createRoute(Route route) {
        return routeRepository.save(route);
    }

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public Route getRouteById(Long id) {
        return routeRepository.findById(id).orElseThrow(() -> new RuntimeException("Route not found"));
    }

    public void deleteRoute(Long id) {
        routeRepository.deleteById(id);
    }
}
