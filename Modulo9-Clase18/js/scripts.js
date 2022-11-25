//Promesas
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

/*
Promise (promesas) - Representa el estado actual de la operación asincrónica. Es una envoltura para un valor desconocido en el momento de la creación de promesas. Permite tratar los resultados de las operaciones asincrónicas como si fueran síncronas: en lugar del resultado final de una operación asincrónica, se devuelve una especie de promesa para obtener el resultado en el futuro.

Promesas pueden estar en tres estados:

Pendiente (pending) - Es el estado inicial al crear una promesa.
Cumplido (fulfilled) - La operación se realizó con éxito, con algún resultado
Rechazado (rejected) - La operación fue rechazada por un error.

Cuando se crea una promesa, se encuentra en estado de espera (pending), tras lo cual puede completarse con éxito (fulfilled), devolviendo el resultado (valor), o con error (rejected), devolviendo la causa. Cuando una promesa pasa al estado fulfilled o rejected es para siempre.

Cuando se crea una promesa, se encuentra en estado de espera (pending), tras lo cual puede completarse con éxito (fulfilled), devolviendo el resultado (valor), o con error (rejected), devolviendo la causa. Cuando una promesa pasa al estado fulfilled o rejected es para siempre.

Diferencias entre las funciones Promise y Callback:

Callbacks son funciones, Promises son objetos.
Callbacks se pasan como argumentos del código externo al interno, y Promises se devuelven del código interno al externo.
Callbacks manejan la finalización exitosa o fallida de una operación; Promises no manejan nada.
Las devoluciones de llamada pueden manejar múltiples eventos; Promises están asociadas a un solo evento.

Creación

La función executor notifica al instante (Promise) cuándo y cómo se completará la operación a la que está asociada. En él se puede ejecutar cualquier operación asincrónica, al finalizar la cual se debe llamar resolve() en caso de éxito (estado fulfilled), o reject() en caso de error (estado rejected). El valor de retorno de esta función se ignora.

resolve(value) - La función a la que se llamará en caso de operación exitosa. El argumento que se le pasa será el valor de la promesa realizada.
reject(error) - Función a la que llamar en caso de error. El argumento que se le pasa será el valor del pagaré rechazado.
*/

// Change value of isSuccess variable to call resolve or reject

const isSucess = true;

const promise = new Promise((resolve, reject) => {
	 // Asynchronous operation
	setTimeout(() => {
		if (isSucess) {
			resolve("La promesa se cumplio");
			console.log(promise);
		}else{
			reject("Se rompio la promesa");
			console.log(promise);

		}

	},3000);
});

console.log(promise);

//Método then()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

/*
El código que necesita hacer algo de forma asincrónica crea una promesa y la devuelve. El código externo, una vez recibida la promesa, articula los manipuladores en torno a ella. Cuando el proceso termina, el código asíncrono establece la promesa como fulfilled o rejected y llama automáticamente a los manejadores en el código externo.

Una vez creada la promesa, su resultado se procesa en funciones de callback. El código está escrito como si estuviéramos pensando en lo que puede pasar si se ejecuta o no la promesa, sin pensar en el tiempo.

El método then() toma dos funciones de Callback que serán llamadas cuando el Promise cambie de estado. El resultado de la promesa, valor o error, lo recibirán como argumentos.

promise.then(onResolve, onReject);

onResolve(value) - Será llamado cuando se ejecute con éxito la promesa y obtendrá su resultado como argumento.
onReject(error) - Será llamado cuando se ejecute la promesa con un error y obtendrá como argumento.

En el ejemplo, la función de callback onResolve será llamada después de dos segundos si la promesa tiene éxito, y onReject será llamada después de dos segundos si la promesa falla.
*/

//Método catch()
//En la práctica, el método then() maneja sólo la ejecución exitosa de la promesa, y el error de su ejecución en un método especial catch() para «atrapar» errores.
/*promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });
  */
const sick = true;

const makeACake = new Promise((resolve, reject) => {
	 // Asynchronous operation
	setTimeout(() => {
		if (!sick) {
			resolve("Poly se encuentra, bien de salud y realizará el pastel");
			console.log(makeACake);
		}else{
			reject("Poly no se encuentra bien de salud no realizará el pastel");
			console.log(makeACake);

		}

	},3000);
});

console.log("Console Log previo a promise.then()");

makeACake.then(
	value => {
		console.log(value);
		console.log("Tendremos la fiesta con pastel");
		console.log(makeACake);
	}).catch(
	error => {
		console.log(error);
		console.log("Tendremos la fiesta pero sin pastel");
		console.log(makeACake);
		//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
		//Método finally()
		/*Este método puede ser útil si quieres ejecutar el código después de que una promesa se haya resuelto (fulfilled o rejected), independientemente del resultado. Evita la duplicación del código en los manejadores then() y catch().
		*/
		}).finally(() => {
			console.log("La fiesta termino con o sin pastel")
			console.log(makeACake);
		});


console.log("Console Log despues del promise.then()");

//Cadenas de promesas
//El método then() devuelve otra promesa, en donde el valor es que devuelve su función callback onResolve. Esto permite construir cadenas asincrónicas de promesas.

/*
Dado que el método then() devuelve una promesa, puede pasar algún tiempo antes de que se ejecute, por lo que el resto de la cadena esperará. Si se produce un error en cualquier parte de la cadena, se cancela la ejecución de todos los then() posteriores y se da el control al método catch(). Por lo tanto, está al final de la cadena de promesas.
*/

const chaingPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(5);
	},3100);
});

chaingPromise.then(
	value => {
		console.log(value);
		return value * 2;
	}).then(
	value => {
		console.log(value);
		return value * 3;
	}).then(
	value => {
		console.log(value);
	}).catch(error => {
		console.log(error);
		console.log("Este error fue intencional");
	}).finally(() => {
		console.log("terminamos la cadena de promesas");
	});

//Promesa funcional

const fetchUserFromServer = username => {
	return new Promise((resolve, reject) => {
		

	setTimeout(() => {
		console.log(`Fetching data for ${username}`);
		const isSucess = true;

		if (isSucess) {
			resolve(`Encontamos al usuario ${username}`);
			console.log(fetchUserFromServer);
		}else{
			reject("error");
			console.log(fetchUserFromServer);
		}
	},4000);	
	});
};

console.log(fetchUserFromServer);

fetchUserFromServer("Paola").then(
	user => console.log(user)).catch(
	error => console.log(error));
//Métodos de clase Promise
//Hay tareas en las que hay que trabajar con todo el conjunto de promesas. En caso de que sea necesario esperar a que se ejecuten todas a la vez, y sólo entonces procesar sus resultados, y en otro caso, basta con esperar a que se ejecute cualquiera de ellas, ignorando las demás, etc. Para estos casos, la clase Promise tienen métodos estáticos para trabajar uno o más grupos de promesas.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//Promise.all()



setTimeout(() => {

	console.log("Promise.all:",Promise.all([chaingPromise,promise]).then(value => console.log(value)).catch(error => console.log(error)));

},5000);


//Promise.race()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
//Devuelve la promesa completada o rechazada, según el resultado del «más rápido» de las promesas transmitidas, con el valor o motivo de su rechazo.

setTimeout(() => {

	console.log("Promise.race:",Promise.race([chaingPromise,promise]).then(value => console.log(value)).catch(error => console.log(error)));

},5000);













