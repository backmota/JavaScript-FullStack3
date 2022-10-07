//Operadores de comparación

/*
a > b y a < b - más/menos
a >= b y a <= b - más/menos o igual
a == b - igualdad
a != b - desigualdad
a === b - igualdad estricta
a !== b - desigualdad estricta
*/

const x = 5;
const y = 10;
const z = 5;
const nameOne = "Oscar";
const nameTwo = "Juan";


console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x < z:", x < z);
console.log("x <= z:", x <= z);
console.log("x === y:", x === y);
console.log("x === z:", x === z);
console.log("x !== y:", x !== y); 
console.log("x !== z:", x !== z);

console.log("nameOne es igual a nameTwo: ", nameOne != nameTwo);

//Validar un número

console.log(Number(x));

console.log(Number(nameTwo));//Not a Number

//Los métodosNumber.parseInt() y Number.parseFloat()

var margin = "5px";

console.log("El valor del margen es:",Number(margin));

console.log(Number.parseInt(margin));

let valueMargin = Number.parseInt(margin);

console.log("El valor del margen es:",Number(valueMargin));

let notacionCalc = 12.46;
let notacionCalcTwo = "12.46px";

console.log(Number.parseInt(notacionCalc));

console.log(Number.parseFloat(notacionCalc));

console.log(Number.parseFloat(margin));

console.log(Number.parseFloat(notacionCalcTwo));

let valueFloat = Number.parseFloat(notacionCalcTwo);

//Comprobación de un número

const validNumber = "51px";

console.log(Number.isNaN(Number(validNumber)));

//Math
// Math.floor(num) - devuelve el mayor número entero,
// menor o igual a lo especificado
console.log(Math.floor(12.5));
// Math.ceil(num) - devuelve el menor número entero,
// mayor o igual que el número especificado.
console.log(Math.ceil(12.5));

// Math.round(num) - devuelve el valor del número,
// redondea al entero más cercano
console.log(Math.round(12.1));
console.log(Math.round(12.4));
console.log(Math.round(12.5));
console.log(Math.round(12.9));

let numberValue1 = 20;
let numberValue2 = 10;
let numberValue3 = 50;
let numberValue4 = 40;
// Math.max(num1, num2, ...) - devuelve el mayor número del conjunto
console.log(Math.max(numberValue1,numberValue2,numberValue3,numberValue4));
// Math.min(num1, num2, ...) - devuelve el menor número del conjunto
console.log(Math.min(numberValue1,numberValue2,numberValue3,numberValue4));
// Math.pow(base, exponent) - potenciación 
console.log(Math.pow(2,4));

// Math.random() - devuelve un número pseudo-aleatorio en el rango [0, 1)
console.log(Math.random());
console.log(Math.random() * (10 - 1) + 1);


//Cadenas o String

const lenguajeCode = "JavaScript";

const message = "Estoy aprendiendo " + lenguajeCode;

console.log(message); 

let isANumber = 10;

console.log(isANumber + "");//Comprobar si es un número

console.log(2 + 2 + "2");
console.log(2 + "2" + 2 + 2);
console.log("" + 2 + 2 + 2);
console.log(2 + 2 + 2 + "");//Comprobar si es un número

//Cadenas de Plantillas

const guestName = "Mango";
const roomNumber = 207;

const greeting = `Bienvenido ${guestName}, su habitación es la número ${roomNumber}`;
console.log(greeting);
//Devuelve la posición (índice) en la que se encuentra la primera subcadena coincidente, o -1 si es que no se encuentra nada.
const newMessage = "Welcome to Bahamas!";
console.log(newMessage.indexOf("x"));

let isTrue = newMessage.indexOf("Welcome") == -1;
console.log(isTrue);

const productName = "Reparación de Droid";
//Compruebe si la subcadena es parte de la cadena y devuelve un tipo de dato lógico - true si lo es y false en caso contrario. El caso de los caracteres en la cadena y la subcadena importa, porque por ejemplo la letra "a" no es igual a la letra "A".
console.log(productName.includes("x"));
console.log(productName.includes("R"));
console.log(productName.includes("Reparación"));
console.log(productName.includes("reparación"));

console.log(newMessage.toLowerCase());
console.log(newMessage.toUpperCase());
//Determina si la cadena termina con los caracteres (subcadena) especificados entre paréntesis, devolviendo true o false.
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js"));
const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js"));

const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); 


const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames);

const age = 9;
//El operador && convierte todos los operandos en booleanos y devuelve el valor de uno de ellos. El operando izquierdo si se puede convertir en false, y el operando derecho en los demás casos.
console.log(age >= 10 && age <= 30);
console.log(age > 80 && age < 120);

//El operador || convierte todos los operandos en el tipo de dato lógico y devuelve el valor de uno de ellos. El operando izquierdo si se puede convertir en true, y el operando derecho en los demás casos.
console.log(age >= 10 || age <= 30);
console.log(age > 80 || age < 120);

//Todos los operadores que hemos considerado hasta ahora eran binarios - contienen dos operandos, izquierda y derecha. El operador lógico "NO" es un operador unario - que realiza una operación sobre un operando de la derecha.
console.log(!true);

let isFalse = age >= 10 && age <= 30;

console.log(isFalse);
console.log(!isFalse);

//Instrucción IF
//La bifurcación se utiliza para ejecutar un código diferente dependiendo de la condición. El principio de funcionamiento es sencillo: el resultado de una condición se convierte en el tipo de dato lógico true o false, entonces el flujo del programa se dirige a una u otra rama.

let country = "México"

if(country === "Colombia"){
	console.log("Bienvenido Parse");
}else{
	console.log("Bienvenido Compa");
}

if(country !== "Colombia"){
	console.log("Bienvenido Compa");
}else{
	console.log("Bienvenido Parse");
}

let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100


const subscriptionF = "free";

if (subscriptionF === "plus") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0

if(subscription === "free"){
	cost = 0;
	console.log(cost);
}else if(subscription === "pro"){
	cost = 100;
	console.log(cost);
}else if(subscription === "premium"){
	cost = 500;
	console.log(cost);
}else{
	console.log("Tu suscripción es invalida");
}


















