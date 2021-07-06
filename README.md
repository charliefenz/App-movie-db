# final-project. App-movie-db
Ejemplo de una app que contiene una base de datos de películas y series. Permite al usuario encontrar tanto unas como otras, por categorías y con palabras clave a través de un buscador en la cabecera. La lógica se maneja desde cuatro módulos principales: **movies**, **series**, **movies-and-series** y **search**, cada uno con sus componentes, rutas, servicios y modelos. La información se obtiene a través de APIs. La principal: [themoviedb.org](https://www.themoviedb.org/documentation/api) que proporciona toda la información necesaria y una API adicional: [restcountries.eu](https://restcountries.eu/#api-endpoints-code) para la obtención de los nombres de los países.
## Tecnologías utilizadas
* Angular para el desarrollo de la aplicacion.
* Bootstrap para el layout responsive de los proyectos.
* Angular Material para animaciones, popups y elementos de formularios.
### Layout y Routing
#### Layout general
Se ha diseñado una cabecera que contiene el logo, el menú de navegación y un input para buscar; un espacio principal para contener toda la información referente a cada ruta y un footer corriente.
#### /'' (principal)
Ruta principal que muestra las películas y series de la semana (controlada por el módulo **movies-and-series**).
Desde ella el usario puede acceder a una serie o una película en particular lo que redirigirá a la ruta individual de cada una (controlada por cada módulo de forma independiente).
#### /movies y /series
Se puede acceder desde la cabecera, a través del botón "Pelis" o del botón "Series". 
Es controlada por cada módulo en particular y muestra tres listados de items con funcionalidad para permitir el scroll horizontal: "Populares", "Más valoradas" y "Por género". Este último permite al usuario elegir el género desde un drop-down y actualiza la vista con las películas (o series) que contienen el género seleccionado.
#### /movies/:id
Muestra el detalle de cada película. 
El usuario obtiene toda la información relevante dentro de un diseño bastante atractivo, compuesto por el título en español en grande y el título original un poco más pequeño, todo con un fondo generado a partir de la imagen complementaria de la película.
La ficha, además, muestra otra vez el poster de la película y la información relevante:
* Géneros (en el cual se utilizó el componente **mat-chip** de Angular Material).
* Reparto principal (compuesto por los 3 primeros actores).
* Año.
* Duración.
* Valoración.
* Link a sitio web (en caso de que exista).
#### /series/:id
Igual layout que en películas, con el adicional de mostrar más información relevante, como es:
* Logo de productora (o productoras).
* País.
* Temporadas.
##### Temporadas
El listado de temporadas es clicable para el usuario y al hacerlo, genera en la misma ficha, una visualización de la información relevante de la temporada con todos sus capítulos organizados en un listado responsive, controlado por el layout de Bootstrap.
La API contiene resultado de todos los episodios, emitidos y por emitir. Estos se diferencian por si la API devuelve mínimamente un título, por lo que, para mantener un diseño coherente y una información completa, se ha filtrado el renderizado de forma que solo muestre un episodio siempre que tenga como mínimo un título y una imagen.
Debido a esto, la ficha como mínimo muestra la información básica de la temporada (fecha de estreno y nro. de capítulos) y de esta forma se muestra al usuario información relevante sobre episodos, solo en caso de que realmente exista.
