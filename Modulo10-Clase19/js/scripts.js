/*
AJAX
AJAX (Asynchronous JavaScript and XML) - Es un método para recibir o enviar datos y luego actualizar la interfaz en base a estos datos, sin tener que recargar la página. Esto reduce el tiempo de respuesta y hace que la página web sea más interactiva. Este proceso puede explicarse con el ejemplo de la carga de datos.

Se produce un evento en la página web (la página se carga, se hace clic en el botón
«Mostrar más», se envía un formulario, etc.)
En el cliente, usando JavaScript, la respuesta a este evento es una función para trabajar con el servidor, donde se crea y envía una petición HTTP.
El servidor recibe y procesa la petición HTTP, devolviendo los datos en formato JSON como respuesta.
En el cliente, mediante JavaScript, se procesa la respuesta del servidor,
se leen los datos y se actualiza la interfaz./*

A pesar de que el nombre de la tecnología incluye XML, en la web moderna ha sido sustituido por JSON, y el nombre quedó como un homenaje a la memoria. AJAX se define como cualquier comunicación con el servidor sin recargar la página.
*/

/*
https://developer.mozilla.org/es/docs/Web/API/Fetch_API
Fetch API

Interfaz de navegador incorporada disponible en el objeto window, que contiene un conjunto de propiedades y métodos para enviar, recibir y procesar recursos del servidor. El método fetch() proporciona una interfaz moderna para realizar peticiones al servidor y se basa en Promise.

fetch(url, options)


url - Es la ruta de acceso a los datos en el back-end para ser recuperados, creados o cambiados. Argumento obligatorio.
options - Objeto de configuración de la consulta: método (por defecto GET), titulares,
cuerpo, etc. Argumento opcional.
Vamos a hacer consultas JSONPlaceholder API - público API REST para la creación rápida de prototipos, que proporciona una colección de usuarios reales en el recurso /users.

*/

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
	//fetch("localhost:1337/users")
  return fetch("http://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUserList(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}



