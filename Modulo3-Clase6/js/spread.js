/*
Sintaxis spread:

La operación ... (spread) permite extender una colección de elementos (array, cadena u objeto) a un lugar donde se espera un conjunto de valores individuales. Por supuesto, hay algunas limitaciones, por ejemplo, no se puede extender una matriz en un objeto y viceversa.
*/

const temps = [14, -4, 25, 8, 11];


console.log(Math.max(temps));
console.log(temps);
console.log(...temps);
console.log(Math.max(...temps));
console.log(Math.min(...temps));

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };

const third = {
	...first, ...second,
};

console.log(third);

//rest: colección de todos los argumentos de la función
/*La operación ... (rest) reúne un grupo de elementos independientes en una nueva colección. Sintácticamente, es un gemelo de la operación de dispersión, pero la diferencia es simple - la dispersión es cuando ... está en la parte derecha de la operación de asignación, mientras que el descanso es cuando ... está en su parte izquierda.
*/
function multiply(...args) {
	console.log(args);
	console.log(args[3]);
	console.log(...args);
}

multiply(1,2,3,4,5);
//Destructura de objetos

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
  gitHub: "https://github.com/backmota/JavaScript-FullStack3/tree/main/Modulo3-Clase6",
};

const {title, author} = book;

book.price = 300;

const {genres, isPublic, rating, coverImage = "https://via.placeholder.com/640/480", price = 200, gitHub = "https://github.com/backmota/JavaScript-FullStack3/tree/main/Modulo3-Clase5"} = book;

console.log(coverImage);
console.log(price);
console.log(gitHub);
