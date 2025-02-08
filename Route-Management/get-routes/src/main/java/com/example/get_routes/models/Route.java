package com.example.get_routes.models;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "routes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private double distance;

    @Column(name = "start_point", nullable = false) 
    private String startPoint;

    @Column(name = "end_point", nullable = false) 
    private String endPoint;

    @Column(nullable = false)
    private int duration; // in hours
}
