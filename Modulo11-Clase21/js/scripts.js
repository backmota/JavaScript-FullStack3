//URL JSON DEMO
let url = "https://jsonplaceholder.typicode.com/posts";

//Método Post con JSON
//Crud - Método de escritura o creación

/*El método POST se utiliza para añadir un nuevo recurso. El método fetch() debe enviar una petición POST al servidor, en donde el cuerpo tendrá un objeto con los campos author y body, el identificador será creado automáticamente por la base de datos. El resultado de dicha consulta será un objeto añadido a la base de datos.
*/

const postToAdd = {
	author: "Richard Stallman",
	body: "0 la libertad de usar el programa...",
};

const options = {
	method: "POST",
	body: JSON.stringify(postToAdd),
	header:{
		"Content-Type": "application/json; charset=UTP-8",
	},
};

fetch(url,options)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));




//Método GET con JSON
//cRud - Método de Lectura o Reed

/*El método HTTP GET se utiliza para obtener los datos existentes. El método fetch() debe enviar una petición GET al servidor sin cuerpo. El back-end, al recibir la solicitud, la procesará y devolverá los recursos requeridos como respuesta.

Obtengamos un array de todos los puestos. Para ello, accedemos al recurso /posts descrito en la documentación del back-end. El método por defecto fetch() realiza una petición GET, por lo que no es necesario anular las opciones de petición.
*/

fetch(url)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));

/*Conseguimos un post por identificador (propiedad id) añadiéndolo al recurso /posts/:postId. La última parte de esta ruta se llama parámetro dinámico y se describe en la documentación como /resource/:parameter. El recurso es el mismo, es la ruta de acceso a toda la colección, pero el parámetro cambia para cada elemento de la colección.
*/

const postID = 1;

fetch(`${url}?id=${postID}`)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));

//Método Update o Actualizar
/*Los métodos PUT y PATCH se utilizan para actualizar los datos existentes. El método a utilizar estará escrito en la documentación del back-end. El método fetch() tiene que enviar una petición al servidor, en donde el cuerpo tiene que especificar el objeto con los campos a modificar. La ruta especifica en qué colección y qué elemento queremos actualizar. El back-end, al recibir la solicitud, la procesará y devolverá el recurso actualizado en la respuesta.
*/

/*Los métodos PUT y PATCH se utilizan para actualizar los datos existentes. El método a utilizar estará escrito en la documentación del back-end. El método fetch() tiene que enviar una petición al servidor, en donde el cuerpo tiene que especificar el objeto con los campos a modificar. La ruta especifica en qué colección y qué elemento queremos actualizar. El back-end, al recibir la solicitud, la procesará y devolverá el recurso actualizado en la respuesta.
*/

const postToUpdate = {
	id:1,
	body: "CRUD is really awesome",
};

const optionsUpdate = {
	method: "PATCH",
	body: JSON.stringify(postToUpdate),
	headers:{
		"Content-Type": "application/json; charset=UTP-8",
	},
};

fetch(`${url}/${postToUpdate.id}`,optionsUpdate)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));

//Delete - Borrar

/*El método DELETE se utiliza para eliminar los datos existentes. El método fetch() debe enviar la petición DELETE al servidor sin cuerpo. La ruta especifica en qué y qué elemento queremos eliminar. El back-end, al recibir la solicitud, la procesará, eliminará el recurso de la colección y devolverá el estado del resultado en la respuesta.
*/

const postIDToDelete = 1;

const optionsDelete = {
	method: "DELETE",
};

fetch(`${url}/${postIDToDelete}`, optionsDelete)
	.then(() => console.log("Post Borrado"))
	.catch(error => console.log(error));

fetch(`${url}?id=${postID}`)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));



