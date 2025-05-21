#----------------------------------
# Stage 1
#----------------------------------

# Import docker image with maven installed
FROM eclipse-temurin:17-jdk-jammy AS builder
WORKDIR /
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline
COPY ./src ./src
RUN ./mvnw clean package -DskipTests=true

#--------------------------------------
# Stage 2
#--------------------------------------

# Import small size java image
FROM amazoncorretto:17-alpine-jdk AS deployer

# Copy build from stage 1 (builder)
COPY --from=builder /target/*.jar /target/taskmanagement.jar

# Expose application port 
EXPOSE 8080

# Start the application
ENTRYPOINT ["java", "-jar", "/target/taskmanagement.jar"]