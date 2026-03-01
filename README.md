Miembros: 
Carlos Gonzalez:  Carlos se encargó de todos los agentes. En su repo encontrarán la información técnica de su desarrollo.
repo: https://github.com/millo-cmd/ia-agent-backend


Estuardo Wyss: Estuardo se encargó del frontend en Angular. repo: https://github.com/ikcDevelopment/aiAgentAngular.git
Se creó una aplicación con angular 21.1.5 usando la librería gráfica Swimlane para definir cada nodo visual.
El nodo proyecto se conecta con el agente que está creando.  El nodo del agente se conecta con 3 nodos: 1. modelo, 2. memoria y 3 herramientas.
Cada uno de los nodos tiene un componente individual donde se alimenta la información relativa a cada uno.
Por razon de tiempo y previendo escalabilidad para futuras versiones, atraves de un servicio se definido una db
usando un Map<> object para almacenar la información por proyecto.


# Aiagent

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
