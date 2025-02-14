package com.example.get_routes.service;
import com.example.get_routes.models.Route;
import com.example.get_routes.repository.RouteRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class RouteService {

   

    private final RouteRepository routeRepository;

    public RouteService(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }


    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public Route getRouteById(Long id) {
        return routeRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("No existe una ruta con ID " + id));
    }
}
