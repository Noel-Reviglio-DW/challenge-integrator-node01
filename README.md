Se nos solicita el presente proyecto como culminación de proceso de capacitación en la tecnología serverside JavaScript. Describo los requerimientos funcionales y no funcionales que dan marco al proyecto: -Objetivos: Crear APIs para una empresa Software Factory que necesita acceder y persistir información de su negocio, para esto se pide generar una solución cloud native. Este necesita poder comprender los siguientes dominios de información:

Clients
Projects
Talents Las entidades son libres de modelar a modo de percepción personal
-Criterios de Aceptación: ● Desarrollar 3 API 's REST que tengan expuestos endpoints para poder acceder a los requisitos de negocio. ● Desarrollar la arquitectura como Microservicios. ● Generar Unit test que con su coverage supere el 70%. ● Tiene que seguir los patrones SOLID. ● Se tiene que poder probar todo el workflow en ambiente local. ● Subir el código a un repositorio Github / Gitlab. ● Utilizar Conventional commits de Angular.

-API's REST:

Clients: La API va a ser capaz de generar un CRUD sobre los Clients.
Projects: La API va a ser capaz de generar un CRUD sobre los Projects.
Talents La API va a ser capaz de generar un CRUD sobre los Talents.Consideraciones adicionales
Los proyectos tienen estados ["PENDING", "GOING", "SUSPENDED", "DONE"]
Se debe poder obtener el listado de proyectos por cliente
Se debe poder obtener el listado de proyectos por estados
Se debe poder obtener el listado de proyectos por cliente y estados
Poder asignar los clientes a muchos proyectos
Validar la cantidad de proyectos en GOING por Talent. ( fijar un porcentaje por proyecto )
Las API 's deben ser REST compliance, generando error handling & mapping.
Observabilidad es un nice to have.
Las API con method DELETE tienen que hacer un borrado lógico en la persistencia.
-Stack tecnológico:

nodeJS v14.x
NestJS
Serverless Framework
Serverless Offline
Jest
npm
TypescriptArquitectura
-Compute: Utilizaremos AWS Lambda Function para alojar y correr el código de nuestras API 's. Cada dominio utilizara una Lambda function

-API Gateway: Utilizaremos AWS API Gateway V1 (REST) para exponer nuestras Lambdas con API 's REST.

-Persistencia: Utilizaremos soluciones noSQL o SQL para persistir nuestro modelo de negocio.

DynamoDB
MongoDB
MySQL
PostgreSQL
-Diseño de Componentes: Cada Lambda estará diseñada con nestJS como framework w/ Express como HTTP Server.