package com.example.update_route.service;
import com.example.update_route.models.Route;
import com.example.update_route.repository.RouteRepository;
import org.springframework.stereotype.Service;
@Service
public class RouteService {


    private final RouteRepository routeRepository;

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    public Route updateRoute(Long id, Route updatedRoute) {
        Route existingRoute = routeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Route not found with ID: " + id));

        existingRoute.setName(updatedRoute.getName());
        existingRoute.setDescription(updatedRoute.getDescription());
        existingRoute.setDistance(updatedRoute.getDistance());
        existingRoute.setStartPoint(updatedRoute.getStartPoint());
        existingRoute.setEndPoint(updatedRoute.getEndPoint());
        existingRoute.setDuration(updatedRoute.getDuration());

        return routeRepository.save(existingRoute);
}
}