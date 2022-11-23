//Asincronía
//https://developer.mozilla.org/es/docs/Web/API/setTimeout
console.log("First Log");
console.log("Second Log");
//La siguiente función tiene un tiempo fuera de 2000 millisegundos
setTimeout(() => {
	console.log("Tiempo Fuera");
	sayHello();
},2000);
setTimeout(() => {
	console.log("Tiempo Fuera Dos");
	console.log("Third Log");
},1000);
console.log("End Log");
setTimeout(() => {
	console.log("Tiempo Fuera");
},2000);


function sayHello(){
	whoAreYou();
	console.log("Hola");
	
}

function whoAreYou(){
	setTimeout(() => {
		console.log("Quien eres?");
	},4000);
	
}

/*
Multiproceso
No confunda la asincronía con el multiproceso (paralelismo): son modelos de programación diferentes. He aquí una sencilla analogía que pondrá todo en su sitio. Imagina que eres un chef en un restaurante y recibes un pedido de café y tostadas.

Enfoque síncrono de un solo hilo - Usted mismo prepara el café, luego las tostadas y las sirve, y después limpia la cocina.
Enfoque asíncrono de un solo hilo - Empiece a preparar el café y coloque el temporizador, luego prepare las tostadas y también coloque el temporizador. Mientras prepara el café y las tostadas, puede limpiar la cocina. Cuando los temporizadores suenen, retire el café del fuego, remueve las tostadas y las sirve.
Enfoque multiproceso (paralelismo) - Contrate a dos ayudantes, uno para preparar el café y otro para preparar las tostadas. Ahora usted tiene un problema, ser el asistente de control (poder) para que ambos no entren en conflicto en la cocina al usar los recursos necesarios.
En los procesos asincrónicos de un solo hilo, se tiene una programación de tareas en la que algunas dependen del resultado de otras. A medida que avanza cada tarea se llama al código para procesar su resultado. Pero sólo se necesita un trabajador para realizar todas las tareas, no un trabajador por tarea.
*/

//Temporizadores
//Time-out

const button = document.querySelector("button");

const onClick = () => {
	console.log("Comienza la función onClick");
	setTimeout(() => {
		console.log("tiempo fuera onClick");
		alert("I love async JS!");
	},1000);
	console.log("termina la función onClick");
};

button.addEventListener("click", onClick);

const greet = () => {
	console.log("Hello!!!");
};

const timer = setTimeout(greet, 3000);
//https://developer.mozilla.org/es/docs/Web/API/clearTimeout
clearTimeout(timer);

//Intervalo
/*El método setInterval() es una forma sencilla de repetir el código una y otra vez con un intervalo de tiempo de repetición establecido. La sintaxis y los parámetros son los mismos que setTimeout(). A diferencia de setTimeout(), el intervalo no ejecuta la función una vez, sino que la repite regularmente en un intervalo especificado. Es posible detener la ejecución llamando al método clearInterval(id).

const timerId = setInterval(callback, delay, args...);

function second(){
	console.log("Paso un segundo");
}

const timerId = setInterval(second,1000);
*/

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
	timerId = setInterval(() => {
		console.log(`I love async JS! ${Math.random()}`);
	}, 1000);
});

stopBtn.addEventListener("click", () => {
	clearTimeout(timerId);
	console.log(`Interval with id ${timerId} has stopped!`);
});



