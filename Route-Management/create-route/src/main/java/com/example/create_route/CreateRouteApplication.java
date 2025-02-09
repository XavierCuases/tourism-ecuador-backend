package com.example.create_route;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CreateRouteApplication {

    public static void main(String[] args) {
        System.setProperty("SERVER_PORT", System.getenv().getOrDefault("SERVER_PORT", "5005"));
        System.setProperty("DB_HOST", System.getenv().getOrDefault("DB_HOST", "users.c20pppmbajcg.us-east-1.rds.amazonaws.com  "));
        System.setProperty("DB_PORT", System.getenv().getOrDefault("DB_PORT", "5432"));
        System.setProperty("DB_NAME", System.getenv().getOrDefault("DB_NAME", "routes"));
        System.setProperty("DB_USERNAME", System.getenv().getOrDefault("DB_USERNAME", "postgres"));
        System.setProperty("DB_PASSWORD", System.getenv().getOrDefault("DB_PASSWORD", "Federer.-"));

        SpringApplication.run(CreateRouteApplication.class, args);
    }
}