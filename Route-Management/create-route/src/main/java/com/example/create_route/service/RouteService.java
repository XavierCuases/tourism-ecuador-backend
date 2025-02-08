package com.example.create_route.service;
import com.example.create_route.models.Route;
import com.example.create_route.repository.RouteRepository;
import org.springframework.stereotype.Service;
@Service
public class RouteService {

   

    private final RouteRepository routeRepository;

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    public Route createRoute(Route route) {
        return routeRepository.save(route);
    }

    
}
