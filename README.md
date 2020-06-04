# Angular Project Template

That is the **frontend part** of full stack project consisting of (at least) 4 Docker Containers 
started with docker-compose file
- database container (postgres)
- database user interface container (pgadmin4)
- [backend container (spring boot)](https://github.com/val3ri/springboot-project-template)
- frontend container (angular)

You need this [docker-compose.yml file](https://github.com/val3ri/infrastructure-for-fullstack-project) for building this multiple container application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve --proxy-config proxy-config-local.json` to start the angular application against a locally started dev server. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

