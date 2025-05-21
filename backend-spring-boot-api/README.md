# Instrucciones cómo ejecutar y probar la aplicación


## Ejecutar

Desde la línea de comandos, clone y ejecute la aplicación:

```bash
# Clone this repository
git clone https://github.com/rsalgadoc/task-app.git

# Go into the repository
cd backend-spring-boot-api

```

## Opcion 1 para ejecutar(Maven)

```bash
# Execute the command
./mvnw spring-boot:run
```

## Opcion 2 para ejecutar(Docker)

```bash
# Execute the command
docker build -t rsalgadoc/taskmanagement .

# Execute the command
docker run -d --name backend-taskmanagement -p 8083:8080 --restart always rsalgadoc/taskmanagement
```

## Opcion 3 para ejecutar(Docker Compose)

```bash
# Execute the command
docker compose up -d 
```


## Probar la aplicación

- Ir a Postman e importar la coleccion [Previred_Task_Management.postman_collection.json](Previred_Task_Management.postman_collection.json)

- Comenzar enviando el request POST Sign In, para obtener el Token.

- En la colección Previred Task Management(no en un request en particular) ir a la pestaña Authorization, aca en Auth Type seleccionar Bearer Token y en el campo Token poner el valor obtenido en el paso 1, con esto el método de autorización se utilizará para cada solicitud de esta colección.

- Luego se pueden realizar las pruebas con lo distintos request de Tareas:
  1. Create Task
  2. Get task by ID or Get tasks
  3. Update Task
  4. Delete Task



## Documentación

- Se utilizó Swagger UI para generar la documentación visual de las API.
- La documentation la pueden encontrar en 
	http://localhost:8080/swagger-ui/index.html
