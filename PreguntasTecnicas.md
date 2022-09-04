## DESARROLLO

### LIBRERIAS UTILIZADAS

#### DEPENDENCIAS

"axios": "^0.27.2", **AGREGADA**
"core-js": "^3.8.3",
"moment": "^2.29.4", **AGREGADA**
"vue": "^2.6.14",
"vue-router": "^3.5.1",
"vuetify": "^2.6.0",
"vuex": "^3.6.2"

#### DEPENDIENCIAS DE DESARROLLO

"@babel/core": "^7.12.16",
"@babel/eslint-parser": "^7.12.16",
"@vue/cli-plugin-babel": "~5.0.0",
"@vue/cli-plugin-e2e-cypress": "~5.0.0",
"@vue/cli-plugin-eslint": "~5.0.0",
"@vue/cli-plugin-router": "~5.0.0",
"@vue/cli-plugin-unit-jest": "~5.0.0",
"@vue/cli-plugin-vuex": "~5.0.0",
"@vue/cli-service": "~5.0.0",
"@vue/test-utils": "^1.1.3",
"@vue/vue2-jest": "^27.0.0-alpha.2",
"babel-jest": "^27.0.6",
"cypress": "^9.7.0",
"eslint": "^7.32.0",
"eslint-config-prettier": "^8.3.0",
"eslint-plugin-prettier": "^4.0.0",
"eslint-plugin-vue": "^8.0.3",
"jest": "^27.0.5",
"prettier": "^2.4.1",
"sass": "~1.32.0",
"sass-loader": "^10.0.0",
"sinon": "^14.0.0", **AGREGADA**
"vue-cli-plugin-vuetify": "~2.5.5",
"vue-template-compiler": "^2.6.14",
"vuetify-loader": "^1.7.0"

#### COMANDOS

##### NPM

● Instalacion
$ npm i

● Ejecucion
$ npm run serve

$ npm run build

$ npm run test:unit

$ npm run test:e2e

$ npm run lint

##### YARN

● Instalacion
$ yarn

● Ejecucion
$ yarn serve

$ yarn build

$ yarn test:unit

$ yarn test:e2e

$ yarn lint

#### DESCRIPCION DE IMPLEMENTACION

El proyecto consta de 2 vistas:
a) HomeView
● Muestra una tabla con un listado de cervezas, segmentado inicialmente de 10 en 10 (por pagina), teniendo la posibilidad de modificar la cantidad de registros solicitados (para el caso que se seleccionen todas, la api solo regresa 25 registros como maximo).
● La vista tiene un boton que muestra una ventana de dialogo la cual contiene los diferentes filtros que se pueden aplicar a dicha busqueda
● Cada registro muestra un boton ("Detalles") en la columna final, la cual muestra toda la infomacion del producto.

b) DetailVie
● Muestra toda la informacion que el api devuelve en una forma ordenada y clara
● Contiene un boton ("Back to list") que lleva al usuario al listado de todas las cervezas

El proyecto se realizo segmentado cada funcion minima en componentes independientes, con la finalidad de que el mantenimiento sea eficiente y que al mismo tiempo su tratamiento no afecte la funcionalidad de otro modulo, asi como poder aplicar la metodologia DRY (Dont repit yourself).

Los modulos que se encuentran dentro de la capeta src/components/beerDetails requiren el paso de informacion por propiedades, esto se planteo asi por que el modulo padre es el que hace uso del store y siempre contiene toda la informacion del modelo, esto con el fin de no saturar el store con propiedes (dentro del state)

El store esta seccionado por modulos, con el fin de tener mas ordenada la informacion, y en el se cuentran lo siguiente:

● Manejo del estado del cuadro de dialogo de filtros y el estado de cargando,
● Peticion al api
● Manejo de estado de la respuesta de la api
● Manejo de estado de los filtros

Lo anterior se implemento asi, para que, si en un futuro, se tiene algun otro componente que requiera del uso de dichos estados, sea de facil acceso a estos y no se sature el sistema con variables innecesarias

## CUESTIONARIO

● ¿Has aplicado los principios SOLID?
R= Si

● ¿Cuánto tiempo has estado pensando y escribiendo tests del código? Si
hubieras tenido mucho más tiempo... ¿qué habrías añadido? Si no has
realizado tests, ¿qué herramientas habrías utilizado para llevarlos a cabo?
R= 6 horas para las pruebas unitarias (Realizadas con Jest) y 3 horas para las pruebas end to end (Realizadas con Cypress)

● ¿Cómo mejorarías la API que has usado?
R= Le agregaría a la respuesta la cantidad total de registros para que
el total de páginas sea correcta ya que actualmente no se sabe cuantos
registros tiene la db

● ¿Crees que esta API soporta peticiones CORS? ¿Cómo has llegado a esa
conclusión?
R= Si, ya que de no tenerlo habilitado, el acceso desde algun otro dominio o puerto estaria denegado y enviara un error: Cross-Origin Request Blocked

● ¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna
vez has tenido que hacerlo?
R= Normalmente lo que hago es reproducir el error y ayudarme de las herramientas de desarrollo del chrome (las pestañas "console" para ver el detalle del error de la vista, y la pestaña "network" para ver si hay un posible error en back)

● Descríbete a ti mismo en formato JSON.

```JSON
{
  datosPersonales: {
    nombre: 'Victor Santiago Azuara Gallegos',
    edad: '49 años',
    celular: '+52 646 185 1733',
    correo: 'vzuara@gmail.com'
  },
  residencia: {
    pais: 'México',
    estado: 'Baja California',
    ciudad: 'Ensenada'
  },
  personalidad: {
    caracter: ['Disciplinado', 'Comprometido', 'Responsable', 'Honorable'],
    aspiraciones: 'continuar crecimiento personal, profesional, economico y bienestar para mi familia',
    hobbies: ['Escuchar musica', 'Estudiar', 'Ver series', 'Juegos de mesa', 'Salir a tomar cafe'],
    musica: {
      generos: ['Rock', 'Pop', 'Electronica']
    },
    fortalezas: ['Noble', 'Dedicado', ''Ordenado', 'Optimista', 'Altruista', 'Confiable'],
    areasOporunidad: ['testarudo', 'Impaciente', 'Perfeccionista']
  }
}
```
