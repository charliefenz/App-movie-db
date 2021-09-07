# App-movie-db
Ejemplo de una app que contiene una base de datos de películas y series. Permite al usuario encontrar tanto unas como otras, por categorías y con palabras clave a través de un buscador en la cabecera. La lógica se maneja desde cuatro módulos principales: **movies**, **series**, **movies-and-series** y **search**, cada uno con sus componentes, rutas, servicios y modelos. La información se obtiene a través de APIs. La principal: [themoviedb.org](https://www.themoviedb.org/documentation/api) que proporciona toda la información necesaria y una API adicional: [restcountries.eu](https://restcountries.eu/#api-endpoints-code) para la obtención de los nombres de los países.
## Tecnologías utilizadas
* Angular para el desarrollo de la aplicacion.
* Bootstrap para el layout responsive de los proyectos.
* Angular Material para animaciones, componentes genereales y componentes de formularios.
## Layout y Routing
### Layout general
Se ha diseñado una cabecera que contiene el logo, el menú de navegación y un botón para buscar; un espacio principal para contener toda la información referente a cada ruta y un footer corriente.
### /'' (principal)
Ruta principal que muestra las películas y series de la semana (controlada por el módulo **movies-and-series**). 
Cada item se ha diseñado usando el componente **mat-card** de Angular material y muestra el poster oficial de la serie o película, así como el título. Haciendo clic en cada uno de ellos se accede a su información detallada, la cual está ubicada en una ruta individual identificada por el id del item y que está controlada de forma independiente por el módulo que le corresponde, dependiendo de si es serie o película.
### /movies y /series
Se puede acceder desde la cabecera, a través del botón "Pelis" o del botón "Series". 
Es controlada por cada módulo en particular y muestra tres listados de items con funcionalidad para permitir el scroll horizontal: "Populares", "Más valoradas" y "Por género". Este último permite al usuario elegir el género desde un drop-down y actualiza la vista con las películas (o series) que contienen el género seleccionado.
### /movies/:id
Muestra el detalle de cada película. 
El usuario obtiene toda la información relevante dentro de un diseño bastante atractivo, compuesto por el título en español en grande y el título original un poco más pequeño, todo con un fondo generado a partir de la imagen complementaria de la película.
La ficha, además, muestra otra vez el poster de la película y la información relevante:
* Géneros (en el cual se utilizó el componente **mat-chip** de Angular Material).
* Reparto principal (compuesto por los 3 primeros actores).
* Año.
* Duración.
* Valoración.
* Link a sitio web (en caso de que exista).
### /series/:id
Igual layout que en películas, con el adicional de mostrar más información relevante, como es:
* Logo de productora (o productoras).
* País.
* Temporadas.
#### Temporadas
El listado de temporadas es clicable para el usuario y al hacerlo, genera en la misma ficha, una visualización de la información relevante de la temporada con todos sus capítulos organizados en un listado responsive, controlado por el layout de Bootstrap.
Para mantener un diseño coherente y una información completa, se ha filtrado el renderizado de forma que solo se muestre un episodio siempre que tenga como mínimo un título y una imagen. Así se muestra al usuario información, solo en caso de que realmente exista.
El diseño de cada episodio se realiza con el componente **mat-card** de angular material, similar a los listados de películas y series, mostrando el número, fecha y título del episodio.
### /search
Se accede cuando el usuario realiza una búsqueda utilizando el botón de búsqueda ubicado en la cabecera de la página. No importa en que ubicación esté navegando, la búsqueda se puede activar desde cualquier lugar y sus resultados se reflejan una vez se haya ejecutado. La  información existente es reemplazada por el resultado de la búsqueda y la url se actualiza con la consulta pasada en el input de la búsqueda.
El resultado de la búsqueda se muestra siguiendo los mismos lineamientos de los listados, solo que en este caso se hace con un grid responsive, controlado por Bootstrap.
Si la query no devuelve ningún resultado, se muestra un mensaje al usuario para que realice otra búsqueda.
#### Limitaciones de search en la API
La API utiliza sus propios algoritmos para mostrar los resultados mas importantes de primero y no permite que se le pasen parámetros de filtrado mas allá que la propia query.
También es común encontrar resultados sin imagenes de poster. En el caso último, se ha decidido conservar la respuesta sin filtrar para que se muestren los resultados sin imagen y se ha insertado una lógica para que, llegado el caso, se muestre una imagen local que indique que el item no posee imagen.
## Modulado
Se utilizó un approach modular para que la apliación cargue siempre los componentes de layout principales, que son integrantes de la carpeta /app/components y que corresponden al header, footer y serch-bar. El resto de componentes se cargan bajo pedido y se han agrupado en 4 módulos:
1. **Movies-and-series**. Controla todo lo referente a vistas en que se tengan que combinar películas y series, y aloja el servicio encargado de traducir los paises que la API principal devuelve codificados.
2. **Movies**. Controla todo lo referente a vistas y servicios relacionados con las películas.
3. **Series**. Controla todo lo referente a vistas y servicios relacionados con las series.
4. **Search**. Controla todo lo referente a vistas y servicios relacionados con la ejecución de las búsquedas.
### Lógica de rutas de carga
Como los componentes de layout siempre son cargados, los **routerLink** de cada elemento del menú están diseñados para hacer un lazy load de cada modulo al cual corresponda. En particular, el elemento search dentro del header, es un mero comunicador, es decir, se encarga de recoger la query que el usuario coloca y la envia al módulo de search dentro del **queryParams** del metodo **navigate** de router.
Cuando la aplicación carga en el inicio se carga el módulo **movies-and-series**, cuyo componente principal muestra los listados de peliculas y series. Desde ahí, dependiendo del elemento seleccionado por el usuario, este llama al módulo **movies** o **series**.
### Movies-and-series
#### Componentes
* Main. Se encarga de estructurar la página principal.
* Main-item. Se encarga de mostrar el elemento unitario de cada listado.
#### Servicios
* getCountryName(countryCode). Llama a la API de [restcountries.eu](https://restcountries.eu/#api-endpoints-code) para devolver el observable que contiene el nombre completo, en español, del país correspondiente al código que se pasa como parámetro.
### Movies | Series
#### Componentes en Movies y Series
* list-*movies|series*-by-genre. Se encarga de mostrar en un **mat-select** todos los generos disponibles para que el usuario pueda seleccionar. Cuando este lo hace, activa y provee de la información necesaria al componente encargado de mostrar los resultados.
* list-*movies|series*-by-genre-selector. Muestra los resultados correspondientes a la selección del usuario realizada en el componente **list-*movies/series*-by-genre**.
* list-popular-*movies|series*. Muestra el array de objetos de *películas o series* más populares.
* list-top-rated-*movies|series*. Muestra el array de objetos de *películas o series* mejor valoradas.
* *movie|serie*-detail. Muestra toda la información de una *película o serie* en particular.
* *movie|serie*-item. Muestra el elemento unitario *película o serie* de los listados. 
* *movies|series*-main-page. Organiza la estructura de página principal e inical del módulo.
#### Componentes solo en Series
* episode-list. Muestra el array de episodios.
* episode-item. Muestra el elemento unitario del listado de episodios.
#### Modelos en Movies y Series
* array-*movie|serie*-credit-response
* array-*movies|series*-response
* *movie|serie*-cast
* *movie|serie*-detail
* *movie|serie*-list-result
#### Modelos solo en Series
* episode
* network
* season-detail
* seasons
#### Servicios en Movies y Series
* getPopular*Movies|Series*(). Llama a la API y devuelve un observable que contiene el array de objetos correspondiente a las *peliculas o series* populares.
* get*Movie|Serie*(id). Llama a la API y devuelve un observable que contiene todos los detalles de la *película o serie* correspondiente al id que se pasa como parámetro.
* getCredits(id). Llama a la API y devuelve un observable que contiene el array del reparto de la *película o serie* correspondiente al id que se pasa como parámentro.
* getTopRated*Movies|Series*(). Llama a la API y devuelve un observable que contiene el array de objetos correspondiente a las *peliculas o series* más valoradas.
* get*Movie|Serie*Genres(). Llama a la API y devuelve un observable que contiene el array de géneros disponibles para las *películas o series*. En la app se usa para poblar el componente **mat-select** ubicado dentro del componente **list-*movies|series*-by-genre**, que permite al usuario seleccionar el género que desea buscar.
* get*Movies|Series*ByGenres(genreId): Llama a la API y devuelve un observable que contiene el array de objetos correspondientes a las *películas o series* que contienen el género cuyo id se pasa como parámetro. En la app se usa para listar el resultado de búsqueda de *películas o series* por genero que se encuentra dentro del componenente **list-*movies|series*-by-genre-selector**.
* getSearch*Movies|Series*(page, query): Llama a la API y devuelve un observable que contiene el array de objetos correspondientes a las *películas o series* que coinciden con la query que se pasa como parámetro. En la app se usa desde el módulo **search** que es el que maneja toda la información referente a resultados de búsqueda generales. Si la query no coincide con ningún resultado, la API devuelve dentro del observable un array vacío, que al ser identificado, se utiliza para mostrar un texto de información al usuario, para que haga una búsqueda diferente.
* getTrending*Movies|Series*(). Llama a la API y devuelve un observable que contiene el array de objetos correspondiente a las *peliculas o series* más valoradas. En la app se usa desde el módulo **movies-and-series** para mostrar en la página principal de la aplicación.
#### Servicios solo en Series
* getSeason(tvId, seasonNumber). Llama a la API y devuelve un observable que contiene el array de episodios para la temporada y serie concreta que coincide con los parámetros identificativos de cada una de ellas.
### Search
#### Componentes
* search-item. Se encarga de mostrar el elemento unitario del resultado.
* search-result. Se encarga de estructurar la página que muestra los resultados.
#### Modelos
* search-return
## Elementos generales
Se ha estructurado de forma que existan entidades generales que caben dentro del contexto de aprovechamiento de cualquier elemento o módulo de la aplicación. Se encuentran dentro de la carpeta *common*.
### Clases
Como hay muchos pedidos a la API, se han creado tres clases con el objetivo de centralizar la construcción de las url de petición.
* countries-api-endpoints. Contiene la url para hacer los pedidos a la API de [restcountries.eu](https://restcountries.eu/#api-endpoints-code).
* endpoints. Contiene las distintas estructuras para formar las URL de los pedidos a la API de [themoviedb.org](https://www.themoviedb.org/documentation/api).
* global-constants. Guarda variables para hacer más fácil la construcción de URLs en cualquier parte de la aplicación.
### Modelos
* array-genres-response.
* countries
* crew
* genre
### Estilos
Un archivo de variables generales que se importa en los archivos locales de los componentes que lo necesiten. Contiene variables esenciales como la paleta de colores, los breakpoints de bootstrap, el ancho de los items, etc.


