/*
Al especificar el número deseado de elementos en la respuesta, siempre obtenemos el mismo resultado: el primero per_page de los elementos de la colección, el llamado primer grupo o página. El segundo parámetro de paginación controla el desplazamiento dentro de la colección: el número del grupo de elementos que queremos recuperar. Si el back-end implementa la paginación, el valor por defecto de este parámetro es uno: el primer grupo o «página» de elementos. En nuestro caso, que se llame page.

Al cambiar el valor de page, le decimos al back-end qué grupo de elementos queremos recuperar a continuación, y así sucesivamente, hasta que la colección se quede sin elementos. Si lo establecemos con un valor negativo o con más grupos en la colección, la respuesta del back-end dependerá de su implementación.

В JSONPlaceholder API El parámetro que controla el grupo de elementos se llama _page. Cambie su valor en el ejemplo y examine la respuesta del back-end en la interfaz y en la pestaña Network.
*/

const url = "https://jsonplaceholder.typicode.com/posts";
let limitNumber = 15;
let pagesNumber = 3;

const fetchPostsBtn = document.querySelector(".btn");
const userList = document.querySelector(".posts");

fetchPostsBtn.addEventListener("click", () => {
  fetchPosts()
    .then((posts) => renderPosts(posts))
    .catch((error) => console.log(error));
});

function fetchPosts() {
  const params = new URLSearchParams({
    _limit: limitNumber,
    // Change the group number here
    _page: pagesNumber
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
    .join("<h3>Nuevo Post</h3>");
  userList.innerHTML = markup;
}

