//URL JSON

let url = "http://localhost:1337/post";


//Método POST para crear un nuevo registro

const postToAdd = {
	author: "Richard Stallman",
	title: "Software Libre",
};

const optionsPOST = {
	method: "POST",
	body: JSON.stringify(postToAdd),
	header:{
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
};

fetch(url,optionsPOST)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));


const postToAddTwo = {
	author: "Linus Torvalds",
	title: "Linux",
};

const optionsPOSTTwo = {
	method: "POST",
	body: JSON.stringify(postToAddTwo),
	header:{
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
};

fetch(url,optionsPOSTTwo)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));	

//Método GET - Visualizar todos los datos

const optionsGET = {
	method: "GET",
	header:{
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",	
	},
};

fetch(url,optionsGET)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));

//Busqueda de un usuario

const postID = 9;

fetch(`${url}/?id=${postID}`)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));

const authorName = "Linus Torvalds";

fetch(`${url}/?author=${authorName}`)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));

//Método PATCH - Actualizar

const postToUpdate = {
	id: 10,
	author: "Miguel de Icaza",
	title: "GNOME",
};

const optionsUpdate = {
	method: "PATCH",
	body: JSON.stringify(postToUpdate),
	header: {
		"Content-Type": "application/json; charset=UTF-8",
	},
};

fetch(`${url}/${postToUpdate.id}`, optionsUpdate)
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));

//Método DELETE

const postToDelete = 22;

const optionsDelete = {
	method: "DELETE",
};

fetch(`${url}/${postToDelete}`,optionsDelete)
	.then(() => console.log("Post Borrado"))
	.catch(error => console.log(error));

//Sintaxis async/await

/*Función asincrónica (async/await) - Es una forma conveniente de escribir código asincrónico que parece código síncrono. La sintaxis async/await se basa en promesas, por lo que no bloquea el hilo principal de ejecución del programa.

Para declarar una función de flecha asincrónica, añada la palabra clave async antes de la lista de parámetros. Dentro de él, puedes usar el operador await y poner algo a la derecha de él, que devuelva Promise. El método response.json() también devuelve Promise, así que ponemos await.
*/


const fetchPost = async () => {
	const response = await fetch(url);
	const post = await response.json();
	return post;
}

fetchPost().then(post => console.log(post));

/*
Cuando el intérprete encuentra await, pausa la ejecución de esta función (no todo el script) y espera hasta que se ejecute una promesa a la derecha de await. En cuanto se ejecuta Promise, la función se reanuda y en la línea siguiente podemos ver el resultado de la operación asincrónica.

El operador await sólo se puede utilizar en el cuerpo de una aplicación asincrónica (async) función.
El operador await pone en pausa la función hasta que se ejecute Promise (fulfilled o rejected).
Si Promise ha tenido éxito (fulfilled), el operador await devolverá su valor.
Si Promise fue rechazada con un error (rejected), el operador await lanzará un error.
Función asincrónica siempre devuelve promise, por lo que cualquier valor devuelto será su valor
Si no se especifica un valor de retorno, se devolverá Promise con el valor undefined.
Cualquier función puede ser asincrónica, ya sea un método de un objeto, una clase o una devolución de llamada, o función en línea. Todas ellas pueden utilizar el operador await y seguramente devolverán a Promise, porque son funciones asincrónicas.
*/

//Manejo de Errores

/*
Si el resultado de la función asincrónica (Promise) no se utiliza en el código externo, los errores se manejan en el cuerpo de la función mediante la construcción try...catch. El valor del parámetro error en el bloque catch es el error que generará await si Promise es rechazada.
*/

const postToDeleteTwo = 19;

const fetchError = async () => {
	try {
		const response = await fetch(`${url}/${postToDeleteTwo}`,optionsDelete);
		const post = await response.json();
		console.log(post);
	} catch (error){
		//console.log(error.message);
		console.log(error.message);
	}
};

fetchError();

//Preguntas paralelas

/*
Si es necesario realizar varias consultas simultáneamente, utilice la sintaxis async/await con mucho cuidado. En el siguiente ejemplo, se ejecutarán tres consultas secuenciales porque la ejecución de la función asincrónica se detiene cuando el intérprete encuentra await. Además, el análisis sintáctico de los resultados de la consulta también será secuencial, lo que llevará más tiempo.
*/


const fetchParallel = async () => {
	try {
	const firstResponse = await fetch(`${url}/?id=${27}`);
	const secondResponse = await fetch(`${url}/?id=${26}`);
	const thirdResponse = await fetch(`${url}/?id=${25}`);

	const firstUser = await firstResponse.json();
 	const secondUser = await secondResponse.json();
  	const thirdUser = await thirdResponse.json();

  	console.log(firstUser, secondUser, thirdUser);
  } catch (error){
		console.log(error.message);
	}
};

fetchParallel();

/*
La pestaña Network muestra claramente que cada consulta posterior espera hasta que la anterior haya terminado. Es decir, se ejecutan secuencialmente, lo que supone un tiempo mayor igual a la suma de las duraciones de todas las consultas. Esto es normal si las consultas dependen unas de otras, es decir, la siguiente consulta utiliza el resultado de la anterior.
*/

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", async () => {
	try{
		const users = await fetchUsers();
		renderUserListItems(users);
	}catch (error) {
		console.log(error.message);
	}
});

async function fetchUsers(){
	const userIds = [25, 30, 1, 18, 29, 36,];


	const arrayOfPromises = userIds.map(async (userId) => {
		const response = await fetch(`${url}/?id=${userId}`);
		return response.json();
	});
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
	const users = await Promise.all(arrayOfPromises);
	return users;
}

function renderUserListItems(users){
	const markup = users.map(
		(user) => `<li class="item">
		<p><b>ID</b>: ${user[0].id}<p>
		<p><b>Author</b>: ${user[0].author}<p>
		<p><b>Title</b>: ${user[0].title}<p>
		<p><b>Create UNIX</b>: ${user[0].createdAt}<p>
		<p><b>Update UNIX</b>: ${user[0].updatedAt}<p>
		</li>`).join("")
	userList.innerHTML = markup;
}

