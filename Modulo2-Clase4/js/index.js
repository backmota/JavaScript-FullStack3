const clients = [5, 10 , 100, "Mango", "Poly", "Ajax"];

console.log(clients);
console.log(clients.length);

let lastIndex = clients.length -1;
console.log(lastIndex);

console.log(clients[3]);
//Iteración Array
//El ciclo for puede utilizarse para iterar sobre un array, es decir, «revisar» elemento por elemento.

for (let i = 0; i < clients.length; i +=1){
	console.log(`El valor de la variable clients en su index ${i} es: ${clients[i]}`);
}

//Ciclo for...of
/*
La construcción for...of declara un ciclo que enumera objetos iterables, así como arrays y cadenas. El cuerpo del ciclo se ejecutará para el valor de cada elemento. Es un buen sustituto del ciclo for si no quieres acceder a las iteraciones.

for (const variable of iterable){
	
}
*/


for (const client of clients){
	console.log(client);
}

//Recorrer un string

const string = "Javascript";

for (const character of string ){
	console.log(character);
}

//Operadores break y conti

const clientNameToFind = "Poly";
let message = "¡El cliente con este nombre no está en la base de datos";

for (const client of clients){


	if(client === clientNameToFind){
		message = "¡Hay un cliente con este nombre en la base de datos!"
		console.log("el cliente fue encontrado");
		break;
	}
	
}

console.log(message);

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1){
	if (numbers[i] < threshold) {
		continue;
	}

	console.log(`El número es superior a ${threshold}: ${numbers[i]}`);
}

for (let i = 0; i < numbers.length; i += 1){
	if (numbers[i] > threshold) {
		console.log(`El número es superior a ${threshold}: ${numbers[i]}`);
	}

	
}

//Asignación por referencia y valor

let a = 5;
let b = 10;

let c = a + b;

let d = c;

console.log(a);

//

const name = ["Mango"];

const otherName = name;

console.log(name);
console.log(otherName);
//Push agrega Valores al final
name.push("Poly");

console.log(name);
console.log(otherName);
//Pop Elimina el ultimo valor
name.pop();

console.log(name);
console.log(otherName);

name.pop();
name.push("Poly");

console.log(name);
console.log(otherName);

//Métodos Array

const email = "jj.mota.t@me.com"

let valueEmail = email.split("@");

console.log(valueEmail);
//Capturar en un prompt el correo de un usuario
let user = valueEmail[0];
let domain = valueEmail[1];

console.log(`El usuario del correo es ${user} y su dominio es ${domain}`);

const words = ["JavaScript", "es", "insteresante"];
console.log(words);
console.log(words.join(""));
console.log(words.join(" "));
console.log(words.join("-")); 

let recoverEmail = valueEmail.join("@");

console.log(recoverEmail);

//Método indexOf()

/*
indexOf(value) devuelve el primer índice, en el que el elemento con valor se encontró el value en el array, o el número -1 si no existe tal elemento. Utilice indexOf cuando quiera obtener el índice directamente elemento
*/
console.log(clients.indexOf("Poly"));
console.log(clients.indexOf("Monkong"));
console.log(clients.indexOf(100));


//Método includes()

/*
includes(value) comprueba si hay un elemento con valor value en el array y devuelve true o false respectivamente. El ámbito de aplicación de este método se reduce a las situaciones en las que es necesario comprobar si un elemento está en el array y su posición (índice) no es importante.
*/
console.log(clients.includes("Poly"));
console.log(clients.includes("Monkong"));
console.log(clients.includes(100));


let otherMessage = "¡El cliente con este nombre no está en la base de datos";

if (clients.includes(clientNameToFind)) {
	otherMessage = "¡El cliente con este nombre si está en la base de datos";
}

console.log(otherMessage);

/*
if (
  fruit === "apple" ||
  fruit === "strawberry" ||
  fruit === "cherry" ||
  fruit === "cranberries"
) {
  console.log("It is a red fruit!");
}
*/

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";

const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

//Método slice()
/*slice(begin, end) devuelve un nuevo array, que contiene una copia de una parte del array original sin modificarlo. La copia se realiza desde begin y hasta, pero sin incluir, end, índices de elementos del array original.
*/

console.log(clients.slice(4,5));
console.log(clients[4]);
//Si no se especifica end, se copiará desde start hasta el final del array original.
console.log(clients.slice(4));
console.log(clients.slice(3));
//Si el valor de start es negativo y no se especifica end, se copiarán los últimos elementos start.
console.log(clients.slice(-2));

console.log(clients);

//Método splice()

/*Eliminación
Para eliminar elementos de un array, se usan dos argumentos

splice(position, num)


*/


const scores = [1, 2, 3, 4, 5];


const deletedScores = scores.splice(2,2);

console.log(deletedScores);
console.log(scores);


console.log(clients);
const deletedClients = clients.splice(0,3);
console.log(clients);
console.log( deletedClients);

console.log(scores.splice(2,0, deletedScores));

//Adición - Para añadir uno o más elementos a un array, se deben pasar tres o más argumentos, siendo el segundo argumento igual a cero.

//splice(position, 0, new_element_1, new_element_2, ...)
const colors = ["red", "green", "blue"];
console.log(colors);
colors.splice(1, 0, "purple");
console.log(colors);


//Sustitución - Reemplazar es una operación de adición que elimina elementos en lugar de añadir otros nuevos. Requiere que se pasen al menos tres argumentos. El número de elementos a eliminar y añadir puede no ser el mismo.
const languages = ["C", "C++", "Java", "JavaScript"];
console.log(languages);
languages.splice(1, 1, "Python");
console.log(languages);
languages.splice(2, 2, "C#", "Swift", "Go");
console.log(languages);

//Método concat()
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

console.log(oldClients.concat(newClients));
console.log(newClients.concat(oldClients));

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst);

console.log(scores.concat(deletedScores));


















