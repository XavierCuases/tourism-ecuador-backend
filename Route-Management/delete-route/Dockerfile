FROM maven:3.8.1-openjdk-17-slim AS build

WORKDIR /app

COPY pom.xml .
COPY src /app/src

RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/delete-route-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 5008

ENTRYPOINT ["java", "-jar", "app.jar"]