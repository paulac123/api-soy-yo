API REST para SOYYO

Este proyecto consiste en una API REST desarrollada con Node.js que permite obtener un listado de entidades a partir de un rango de códigos.
El listado es devuelto ordenado alfabéticamente por el nombre de las entidades.

Instrucciones para la instalación y ejecución

Estas instrucciones te permitirán instalar y ejecutar una copia del proyecto en tu máquina local para desarrollo y pruebas.

Pre-requisitos

- Tener instalado Node.js
- Tener instalado Docker
- Tener instalado npm

Instalación

Clona el repositorio:
git clone https://github.com/paulac123/api-soy-yo.git
cd api

Instala las dependencias del proyecto:

npm install

Ejecuta la API localmente:

node src/index.js

Esto iniciará el servidor en `http://localhost:3000`.

#Contenerización con Docker

Construye la imagen de Docker:

docker build -t co.com.soyyo.entity.filter-dev-1_0_0 .

Corre el contenedor:

docker run -d -p 3000:3000 co.com.soyyo.entity.filter-dev-1_0_0

Ejecutando las pruebas

El proyecto incluye pruebas unitarias simples utilizando Jest.

Para ejecutarlas:

npm test

Tecnologías utilizadas

- Node.js – Entorno de ejecución JavaScript
- Express – Framework para construir APIs REST
- Joi – Validación de datos de entrada
- Jest – Framework de testing
- Docker – Para contenerizar la aplicación
- Axios – Para realizar peticiones HTTP a la API externa

Validaciones

Se utiliza Joi para validar que los datos de entrada (`startId` y `endId`) cumplan con los requisitos del esquema.

Se controla que el rango esté entre 1 y 20, que `startId <= endId`, y que ambos sean enteros.

Endpoint principal

POST `/entities/filter`

Filtra las entidades en el rango proporcionado y las devuelve ordenadas alfabéticamente.

posibles errores:

- `400` – Error en validación de datos de entrada
- `404` – No se encontraron entidades válidas en el rango
- `500` – Error del sistema

Autor

Paula Cruz

Licencia

Este proyecto está bajo la Licencia MIT.
