//Método every()
/*
Comprueba si todos los elementos del array pasan la prueba proporcionada por la función de devolución de llamada. Devuelve true o false
array.every((element, index, array) => {
  // Cuerpo de la función callback
});

No modifica el array original.
Recorre el array original elemento por elemento.
Devuelve true si todos los elementos del array cumplen la condición.
Devuelve false si al menos un elemento del array no cumple la condición.
El recorrido del array se detiene si callback se vuelve false.

*/

//const numbers = [1, 2, 3, 4, 5];
const numbers = [2, 7, 3, 14, 6];


console.log(numbers.every(value => value >= 0));

//Método some()
/*
Comprueba si al menos un elemento del array pasa la prueba proporcionada por la función de callback. Devuelve true o false.

array.some((element, index, array) => {
  // Cuerpo de la función callback
});

No modifica al array original.
Recorre al array original elemento por elemento.
Devuelve true si al menos un elemento del array satisface la condición.
Devuelve false si ningún elemento del array satisface la condición.
El recorrido del array se detiene si callback se vuelve true.
*/

console.log([1, 2, 3, 4, 5].some(value => value >= 0));
console.log([-70, 2, 3, 4, 5].some(value => value >= 0));
console.log([-70, -2, 3, -4, -5].some(value => value >= 0));
console.log([-70, -2, -3, -4, -5].some(value => value >= 0));

const fruits = [
  {name: "apples", amount: 100},
  {name: "bananas", amount: 0},
  {name: "grapes", amount: 50},
];

// every devolverá true sólo si todos los frutos son mayores que 0

const allAvailable = fruits.every(fruit => fruit.amount > 0);
console.log(allAvailable);

if(!allAvailable){
  console.log("No hay existencia disponible en todas las frutas");
}else{
  console.log("Existen todas las frutas en existencia");
}

const anyAvailable = fruits.some(fruit => fruit.amount > 0);

if(anyAvailable){
  console.log("Existe disponibilidad en por lo menos una fruta");
}else{
  console.log("No existen frutas disponibles");
}

//Método reduce()
/*

El método reduce(callback, initialValue) se utiliza para procesar cada elemento del array secuencialmente, almacenando el resultado intermedio como batería. Un poco más difícil de aprender que otros, pero vale la pena el resultado.

No modifica el array original.
Recorre el array original elemento por elemento.
Devuelve cualquier cosa.
Hace cualquier cosa.

array.reduce((previousValue, element, index, array) => {
  // Cuerpo de la función callback
}, initialValue);
*/
//[2, 7, 3, 14, 6]
const total = numbers.reduce((previousValue, number) => {
  return previousValue + number;
},0);

console.log(total);

/*
Iteración 1 -> previousValue = 0, number = 2 -> return 0 + 2 = 2
Iteración 2 -> previousValue = 2, number = 7 -> return 2 + 7 = 9
Iteración 3 -> previousValue = 9, number = 3 -> return 9 + 3 = 12
Iteración 4 -> previousValue = 12, number = 14 -> return 12 + 14 = 26
Iteración 5 -> previousValue = 26, number = 6 -> return 26 + 6 = 32
*/

//Reduce dentro de un conjunto de objetos
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const totalScore = students.reduce((total, student) =>{
  return total + student.score;
},0);

console.log(`El total de calificaciones es ${totalScore}`);

const averageScore = totalScore / students.length;

console.log(`El promedio de calificaciones es: ${averageScore}`);

//Example

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes,0);

console.log(likes);
// Recorre todos los elementos de la colección y añade los valores de la propiedad tags
//  al acumulador, con el valor inicial especificado por el array vacío [].
// En cada iteración ponemos todos los elementos de 'tweet.tags' en el acumulador y lo devolvemos.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);
  return allTags;
},[]);

console.log(tags);

const getTags = tweets => tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
},[]);


console.log(getTags(tweets));

//Método sort()
/*
Ordena y modifica el array original.
Devuelve el array modificado, es decir, una referencia al array original ordenado.
Por defecto, se ordena de forma ascendente.
La ordenación se realiza convirtiendo los valores en una cadena y comparando números ordinales en la tabla Unicode.
*/

const scores = [61, 19, 74, 35, 92, 56];

console.log(scores);

scores.sort();

console.log(scores);

const studentsNames = ["Vika", "Andrei", "Oleg", "Julia", "Boris", "Katia"];
console.log(studentsNames);
studentsNames.sort();
console.log(studentsNames);

const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters);

const newScores = [61, 19, 74, 35, 92, 56];
const ascedingScore = [...scores].sort();

console.log(newScores);
console.log(ascedingScore);

/*El método sort(compareFunction) necesita una función de callback con dos parámetros para especificar su orden de clasificación. Esta es una función de comparación (compare function), el orden de clasificación depende de su resultado. El método Sort() lo llamará para dos elementos cualesquiera.*/

const upperScore = [...newScores].sort((a,b) => a - b);
console.log(upperScore);

const descendingScore = [...newScores].sort((a,b) => b - a);
console.log(descendingScore);


const newStudentsNames = ["Vika", "vika", "Andrei", "andrei", "Oleg", "Julia", "Boris", "Katia"];


"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0

const inReverseOrder = [...newStudentsNames].sort((a,b) => b.localeCompare(a));

console.log(inReverseOrder);







