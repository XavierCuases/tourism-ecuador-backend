
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/get-routes-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 5006

ENTRYPOINT ["java", "-jar", "app.jar"]
