//Paginación

/*Una base de datos puede almacenar colecciones de cientos de millones de registros. Por lo tanto, es demasiado intensivo en recursos devolver toda la colección para cada solicitud GET. El tamaño del cuerpo de la respuesta será demasiado grande, y el tiempo de la solicitud se prolongará durante decenas de segundos, o incluso minutos: cuantos más datos haya en la respuesta del back-end, más tiempo pasará por la red.

Además, hay que pensar en los usuarios: difícilmente necesitan todos los millones de registros a la vez. El procesamiento de una cantidad tan grande de datos en la respuesta y la representación de la interfaz requerirán enormes recursos del dispositivo en el que se visualiza la página web. Las estadísticas muestran que los usuarios encuentran la información que les interesa en las primeras pantallas.

Supongamos que nuestro backend mi-api.com almacena una colección muy grande de posts en el recurso /posts, que representaremos con doce elementos en la ilustración.
*/

//Número de elementos respuesta

/*El primer parámetro define el número de elementos en la respuesta del back-end. Supongamos que, en nuestro caso, se llama per_page. No existe un nombre estándar para los parámetros de paginación, por lo que sus nombres dependen del desarrollador del back-end.

En una petición GET de este tipo, el back-end no devolverá toda la colección de doce elementos, sino sólo los cuatro primeros. Si se pasa un valor negativo o un valor mayor que que el número de elementos de la colección, el back-end puede responder de forma diferente: ignorarlos o devolver un error 400 (BAD REQUEST), dependiendo de su implementación.

Público JSONPlaceholder API también soporta la paginación, el número de elementos en la respuesta se controla con el parámetro _limit. Hay un total de cien artículos en la colección /posts. Cambie el valor del parámetro _limit en el ejemplo y examine la respuesta del back-end en la interfaz y en la pestaña Network.

https://github.com/typicode/json-server#paginate

https://developer.mozilla.org/es/docs/Glossary/REST

*/

const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

const fetchPostsBtn = document.querySelector(".btn");
const userList = document.querySelector(".posts");

fetchPostsBtn.addEventListener("click", () => {
  fetchPosts()
    .then((posts) => renderPosts(posts))
    .catch((error) => console.log(error));
});

function fetchPosts() {
  const params = new URLSearchParams({
    _limit: 5,
    // Change the group number here
    _page: 3
  });

  return fetch(`${url}?${params}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}






