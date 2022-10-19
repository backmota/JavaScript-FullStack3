/*Las funciones no son diferentes de los números, las cadenas o los arrays: son simplemente un tipo de datos especial (objeto de alto nivel), un valor que puede almacenarse en una variable o pasarse como argumento a otra función.*/


//Función de devolución de llamada (callback) es una función a la cual se pasa a otra función como argumento y que, a su vez, llama a la función pasada.

//FuncionCallback
function greet(guest){
	console.log(`Registramos al invitad@ ${guest}`);
	console.log(`Bienvenid@ ${guest}`);
}

function bye(user){
	console.log(`Adios ${user}`);
}

// Función de alto nivel
function registerGuest(name, callback, callbackTwo) {
  callback(name);
  callbackTwo(name);
}

registerGuest("Mango", greet, bye);

//Callback Online
/*Si la función callback es pequeña y sólo se necesita para pasar un argumento, se puede declarar directamente al llamar a la función en la que se pasa el callback. Dicha función sólo estará disponible como valor de parámetro y en ninguna otra parte del código.*/


function registerCar(model, callback){
	console.log(`El módelo del carro registrado es: ${model}`);
	callback(model);
	
}

registerCar("Audi", function notify(status){console.log(`Estimado usuario, su carro módelo ${status}, se encuentrá listo para revisión`);})

registerCar("Audi", function notifyEnd(status){console.log(`Estimado usuario, su carro módelo ${status}, se encuentrá listo para recolección`);})

//Repetición de funciones con callback

function printValue(value){
	console.log(value);
}

function prettyPrint(value){
	 console.log(`Logging value: ${value}`);
}

function repeat(n, action){
	for  (let i = 0; i < n; i += 1){
		action(i);
	}
}

repeat(5, printValue);
repeat(5, prettyPrint);

//Método forEach
//Un método de fuerza bruta para matrices que se utiliza como sustituto de los ciclos for y for...of cuando se trabaja con una colección de datos.

/*
array.forEach(function callback(element, index, array) {
  // Cuerpo de la función callback
});
*/

const numbers = [5, 10, 15, 20, 25];
// Clásico for
/*
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, valor ${numbers[i]}`);
}
*/

numbers.forEach(function (number, index, arrayValue){
	console.log(`Index = ${index}, Valor = ${number}, del array ${arrayValue}`);
});
//Función Flecha
numbers.forEach((number, index) => {
	console.log(`Index = ${index}, Valor = ${number}`);
});

//Funciones de Flecha

// Declaración de función normal
/*Las funciones de flecha tienen un sintáxis más corto y conciso, lo que reduce la cantidad de código, especialmente cuando la función es pequeña o cuando se utiliza como callback.

Todas las flechas se crean como una expresión funcional, y si la función no es anónima, debe asignarse a una variable.
*/

function classicAdd(a, b, c) {
  return a + b + c;
}

// Igual que la función de flecha

const arrowAdd = (a,b,c) =>{
	return a + b +c;
};

console.log(arrowAdd(1,2,3));

//Retorno implícito

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

console.log(add(1,2,3));

const sum = (a,b,c) => a + b + c;

console.log(sum(3,3,3));
//Pseudo-array arguments
//Las funciones de flecha no tienen una variable local argumentos que contengan todos los argumentos. Si se quiere recoger todos los argumentos en un array, se utiliza la operación rest.

const newArray = (firstArg,...args) => {
	console.log(firstArg);
	console.log(args);
	console.log(args[0]);
	console.log(args[1]);
	console.log(args[2]);
	console.log(args[3]);
}

newArray(2, 5, 6);

//Funciones de flecha como callbacks

const registerGuestArrow = (name, callback) => {
	callback(name);
};

registerGuestArrow("Jose", greet);




