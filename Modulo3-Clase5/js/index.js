let name = "José Mota";


function hello(name = "Valor por defecto"){
	console.log(`Dentro de la función: Hola ${name}`);
	let string = `Hola ${name}`;
	return string;
}

console.log("Llamada función " + hello(name));

function count(countFrom = 0, countTo = 10, step = 1){
	console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

	for (let i = countFrom ; i <= countTo; i += step){
		console.log(`${i}`);
		//console.log(`${i} , ${arguments[3]}`);
	}
}

count();
count(5);
count(5, 20);
count(5, 20, 5);
count(5, 20, 5, 100);


//Pseudo-array arguments
/*
Se puede acceder a la lista de todos los argumentos mediante una variable especial arguments, a la que sólo se puede acceder dentro de la función y que almacena todos los argumentos como un pseudo-array.

Pseudo-array es la colección, con la propiedad length y la posibilidad de acceder a un elemento por índice, pero carece de la mayoría de los métodos para trabajar con un array.

Considere un ejemplo de uso de arguments en una función que multiplica cualquier número de argumentos:
*/

function multiply(){
	let total = 1;

	for(const argument of arguments){

		console.log(`${total} x ${argument}`)
		total *= argument;
	}

	return total;
}

console.log(multiply());
console.log(multiply(2,2));
console.log(multiply(2,2,4));
console.log(multiply(2,2,4,2,2,4));

//Pattern «Retorno temprano»

let balance = 300;

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log(
      "Introduzca un importe superior a cero para realizar la operación"
    );
    return;
  } else if (amount > balance) {
    console.log("Insuficiencia de fondos en la cuenta");
    return;
  } else {
    console.log("La operación de retirada se ha realizado con éxito");
    balance -= amount;
    return balance;
  	console.log(balance);
  }
}


balance = withdraw(100, balance);
console.log(balance);
balance = withdraw(100, balance);
balance = withdraw(100, balance);
balance = withdraw(100, balance);

//Expresión funcional

//sum(1,2,3);

const sum = function (x,y,z) {
	console.log(`El resultado de la suma es igual a ${x + y  + z}`);
}

sum(1,2,3);


/*

Búsqueda a través de la cadena de visión
El intérprete intenta primero encontrar la variable en el ámbito en el que se accedió a ella. Si no hay tal variable en el ámbito local, saldrá un nivel por intento, hasta encontrar el valor o llegar al ámbito superior (global) y darse cuenta de que no se puede encontrar una variable con ese identificador porque simplemente no existe, entonces habrá un error diciendo que la variable no está declarada.

function foo() {
  const a = 20;
  console.log(a); // 20
  console.log(b);

  for (let i = 0; i < 5; i++) {
  	 let b = 30;
    console.log(a); // 20
    console.log(b);

    if (i === 2) {
      console.log(a); // 20
      console.log(b);
    }
  }
}

// ❌ ¡Error! La variable a no está disponible en el ámbito global
//console.log(a);
*/

//Pila de llamadas
/*
Cuando se llama a una función, se puede llamar a otras funciones dentro del cuerpo de la función, y se puede llamar a otras funciones en ellas, etc. JavaScript es un lenguaje de un solo hilo, lo que significa que sólo se puede ejecutar una instrucción a la vez. Esto significa que las funciones que ya han sido llamadas pero no han completado su ejecución tienen que esperar a las funciones llamadas dentro de sí mismas para continuar su trabajo.*/

function fnA(){
	console.log("Registro desde el interior de la función fnA antes de llamar a fnB");
	fnB();
	 console.log("Registro desde el interior de la función fnA después de llamar a fnB");
}

function fnB(){
	console.log("Registro dentro de la función fnB");	
}

console.log("Registro antes de llamar a fnA");
fnA();
console.log("Registro después de llamar a fnA");

function calc(){
	if (arguments[0] == "multiply") {
		return multiply(arguments[1],[2],[3]);


	}else{
		console.log("Aún no contamos con esa función")
	}
}

console.log(calc("multiply",1,2,3));

function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo2() {
  console.log("foo");
  bar();
  baz();
}

foo2();


