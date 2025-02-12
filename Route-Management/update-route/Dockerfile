FROM maven:3.8.1-openjdk-17-slim AS build

WORKDIR /app

COPY . /app

RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /target/update-route-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 5007

ENTRYPOINT ["java", "-jar", "app.jar"]
