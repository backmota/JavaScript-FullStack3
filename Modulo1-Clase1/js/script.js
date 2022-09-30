//Esto es un comentario de una sola Linea

/*
Esto es un comentario 
de más de una
linea
*/

//Con la palabra reservada var yo puedo nombrar una variable para asignarle un nombre y un valor
var a = 5;

var b = a * a;
//Con la instrucción console y el método .log() puedo imprimir variable o textos
console.log("El valor de a es igual: " + a);
console.log("La formula para sacar el valor de B es igual al valor de a * a");
console.log("El valor de b es igual: " + b);

//Propiedades
/*
Tanto usted como nosotros tenemos ciertas propiedades, 
como: altura, peso, color de ojos, es decir,
 algunas características descriptivas. 
 Los datos también tienen propiedades, 
 por ejemplo, una cadena tiene la propiedad de longitud.
 La sintaxis para referirse a la propiedad es muy simple – mediante un punto.
*/

var hello = "Hola Mundo";

console.log("La variable hello tiene una longitud de: " + hello.length + " caracteres");

//Métodos
/*
Se trata de una llamada a una acción, por ejemplo, 
"sentarse" o "nadar", es decir, alguna operación activa. 
De la misma manera, los datos tienen sus propios métodos predefinidos, 
por ejemplo, se pueden añadir o eliminar elementos de una colección, convertir
 una cadena a un caso diferente, etc. La sintaxis de una llamada a un método 
 es muy similar a la de una llamada a una propiedad, pero se añade un par de paréntesis al final.
*/

console.log(hello.toUpperCase());

//Variables

var A = 10;

console.log("Valor de A: " + A);
console.log("Valor de a: " + a);

//String o cadena de caracteres
var user = "Nombre de Usuario";
//Boolean - Verdadero o Falso
var isActive = false;
//Number o númericos
var ageUser = 31;

//Constante es un valor que no cambia

const yearOfBirth = 1991;
console.log(yearOfBirth);

//Este código generá un error porque no puedo cambiarle el valor a una constante yearOfBirth = 2020;

console.log(yearOfBirth);

//Otra forma de declara variable es con el uso de let
// Las variables declaradas con let no necesitan que se les asigne un valor inmediatamente.

let age;
// Si a una variable declarada como let no se le asigna inicialmente un valor,
// se inicializa con un valor especial undefined (indefinido).
console.log(age);
// console.log() es un método para enviar datos a la consola del navegador,
// más adelante lo conoceremos con más detalle.

// Si a una variable se declara como let, su valor puede sobrescribirse
age = 30;

console.log(age);

/*
Cuándo usar const y let
La única diferencia entre const y let es que const prohíbe reasignar repetidamente cualquier valor a una variable. Al declarar const hace que el código sea más legible, porque la variable siempre hace referencia al mismo valor. En el caso de la "licencia" no existe tal garantía.

Sería conveniente usar let y const de esta manera:

Utilice const por defecto, la mayoría de las variables serán declaradas por defecto.
Utilice let si necesita asignar un valor diferente a una variable en tiempo de ejecución. en tiempo de ejecución del script.
*/

//Tipos de datos Primitivos 

//Number - números enteros y de coma flotante (punto).
const ageOfUser = 20; //int
const points = 15.8; //float

//String - Es una secuencia de ceros o más caracteres. La cadena comienza y termina con una sola ', o con comillas ".

const userName = "Mango";
console.log(userName.length);
const description = '';
console.log(description.length);

//Boolean - Es un tipo de datos lógicos, banderas de estado. Sólo hay dos valores: true y false. Por ejemplo, a la pregunta de si la luz de una habitación está encendida o apagada se puede responder con un sí (true) o con un no (false).

const isLoggedIn = true;
const canMerge = false;
const hasChildren = true;
const isModalOpen = false;

console.log(isLoggedIn);

//null - Es un valor especial, que esencialmente significa nada. Se utiliza en situaciones en las que es necesario especificar explícitamente un vacío. Por ejemplo, si el usuario aún no ha seleccionado nada, entonces podemos decir que el valor null.

let selectedProduct = null;

console.log(selectedProduct);

//undefined - Es otro valor especial. Por defecto, cuando se declara una variable pero no se inicializa, su valor es indefinido, se le asigna undefined

//Para descrubir el tipo de dato de una variable o una constante utilizamos typeof

console.log(typeof ageOfUser);
console.log(typeof points);
console.log(typeof userName);

//Alertas

const message = "JavaScript is awesome!";
//alert(message);
//alert(message);


//Recuperación de datos
//confirm() - Muestra una ventana modal con un mensaje y dos botones, Ok y Cancel. Si hace clic en Ok, el resultado será true, si hace clic en Cancel - Regresará false.
const isMajorAge = confirm("Eres mayor de edad");
alert(isMajorAge);

//prompt() - Muestra una ventana modal con un campo de entrada y botones Ok y Cancel. Si se pulsa Ok, el resultado será el que el usuario haya introducido, si se pulsa Cancel- regresará null.
const whatIsYourAge = prompt("Cual es tu edad?");
alert("Tu edad es: " + whatIsYourAge);

//Pide al usuario que ingrese el lado de un cuadrado y calcula su area
let squareL = prompt("Cual es el la longitud del cuadro a calcular");

let squareArea = squareL * squareL;

alert("El área del cuadrado es: " + squareArea);

//Calcula el area de rectagunlo
//Calcula el area de triangulo
//Calcula el area de hexagono
//Calcula el area de trapezoide 

const x = 10;
const y = 5;

// Suma
console.log(x + y); // 15

// Resta
console.log(x - y); // 5

// Multiplicación
console.log(x * y); // 50

// División
console.log(x / y); // 2

// Residuo de la división
console.log(x % y); // 0

// Suma de sustituciones (también disponible para todos los demás operadores)
let value = 5;

// Entradas similares value = value + 10;
value += 10;
console.log(value); // 15






