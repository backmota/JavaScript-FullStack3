//Efectos Secundarios
/*Función de efecto secundario es una función que en tiempo de ejecución puede cambiar o utilizar variables globales, cambiar el valor de argumentos de tipo referencia, realizar entrada y salida, etc.*/

const dirtyMultiply = (array, value) => {
	for (let i = 0; i < array.length; i += 1){
		array[i] = array[i] * value;
	}
};

/*
const dirtyMultiply = ([1, 2, 3, 4, 5], 2) => {
	for (let i = 0; i < [1, 2, 3, 4, 5].length; i += 1){
		numbers[0] = numbers[0] * 2;
	}
};
*/

const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

dirtyMultiply(numbers,2);

console.log(numbers);

//CleanMultiply
/*
arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
}[, thisArg]);
*/

const cleanMultiply = (array, value) => {
	const newArray = [];

	array.forEach((number, index, arr) => {
		console.log(`El valor del array es: ${number} en el index ${index}, del array: ${arr}`);
		newArray.push(number * value);
	});

	return newArray;
};

const doubleValue = cleanMultiply(numbers, 2);

console.log(doubleValue);



//Enumeración de array
/*
array.method((item, idx, arr) => {

});
*/

/*Método map()

El método map(callback) se utiliza para transformar un array. Llama a una función de devolución de llamada para cada elemento del array original y escribe el resultado en un nuevo array, que será el resultado del método.

array.map((element, index, array) => {
  // Cuerpo de la función callback.
});
*/
 
const planets = ["Tierra", "Marte", "Venus", "Jupiter"];

console.log(planets);

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());

console.log(planetsInUpperCase);

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());

console.log(planetsInLowerCase);

//Conjunto de objetos
/* Ya sabemos que una tarea cotidiana es manipular un array de objetos. Por ejemplo, obtener un array de valores de propiedades de todos los objetos. Tenemos un array de estudiantes, y necesitamos obtener un array separada de sus nombres.*/

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names);


//Método flatMap
//El método flatMap(callback) es similar al método map(), pero se aplica en los casos en los que el resultado es un array multidimensional que necesita ser «suavizado».


const arr1 = [1, 2, [3], [4, 5], 6, []];

const studentsWithCourses = [
  { name: "Mango", courses: ["matemáticas", "física"] },
  { name: "Poly", courses: ["informática", "matemáticas"] },
  { name: "Kiwi", courses: ["física", "biología"] },
];

console.log(studentsWithCourses.map(student => student.courses));

console.log(studentsWithCourses.flatMap(student => student.courses));

//Método filter()
//El método filter(callback) se utiliza para una única operación: filtrar un array, es decir, cuando hay que seleccionar más de un elemento de una colección según algún criterio.

/*
No modifica el array original.
Recorre sobre el array original elemento por elemento.
Devuelve un nuevo array.
Añade al array devuelta los elementos que satisfacen la Función Callback.
Si callback devuelve true el elemento se añade al array de retorno.
Si callback devuelve false el elemento no se añade al array de retorno.
Si ningún elemento satisface la condición, se devuelve un array vacío.
*/

const values = [51, -3, 27, 21, -68, 42, -37, 2000];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues);

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); 

const bigValues = values.filter(value => value > 1000);
console.log(bigValues);

// Array original no se modifica
console.log(values);

//Filtrado de elementos singulares
/*
const studentsWithCourses = [
  { name: "Mango", courses: ["matemáticas", "física"] },
  { name: "Poly", courses: ["informática", "matemáticas"] },
  { name: "Kiwi", courses: ["física", "biología"] },
];
*/

const allCourses = studentsWithCourses.flatMap(student => student.courses);
console.log(allCourses);

const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);

console.log(uniqueCourses);

//Conjunto de objetos
/*
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];
*/

const LOW_SCORE = 40;
const HIGH_SCORE = 70;

const bestStudents = students.filter(student => student.score >= HIGH_SCORE);
console.log(bestStudents);

const worstStudents = students.filter(student => student.score < LOW_SCORE);
console.log(worstStudents);

const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); 


//Método find()
/*

array.find((element, index, array) => {
  // Cuerpo de la función callback.
});

No modifica el array original.
Recorre el array original elemento por elemento.
Devuelve el primer elemento que satisface la condición, es decir, cuando la llamada de retorno devuelve true.
Si ninguno de los elementos coincide, es decir, para todos los elementos del callback devuelve false, el método devuelve undefined.
*/

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
  { label: "green", color: "#F44336" },
];

console.log(colorPickerOptions.find(option => option.label === "pink"));
console.log(colorPickerOptions.find(option => option.color === "#3F51B5"));
console.log(colorPickerOptions.find(option => option.label === "white"));
console.log(colorPickerOptions.find(option => option.label === "green"));
console.log(colorPickerOptions.find(option => option.color === "#F44336"));

console.log(colorPickerOptions.findIndex(option => option.label === "pink"));
console.log(colorPickerOptions.findIndex(option => option.color === "#3F51B5"));
console.log(colorPickerOptions.findIndex(option => option.label === "white"));
console.log(colorPickerOptions.findIndex(option => option.label === "green"));
console.log(colorPickerOptions.findIndex(option => option.color === "#F44336"));
console.log(colorPickerOptions.findIndex(option => option.color === "#F45536"));

colorFind = "pink"
FinderColor = colorPickerOptions.findIndex(option => option.label === colorFind);

objetColor = colorPickerOptions.find(option => option.label === colorFind);
console.log(objetColor);
if(FinderColor == -1){
	console.log("No encontre el valor");
}else{
	console.log(`Encontramos el color ${colorFind}:`,objetColor);
}

//Tarea

function searchColor(array, colorFind) {
	// body...
	console.log(array);
	console.log(colorFind);
	console.log(`El color a buscar es ... en el array ...`);
}

searchColor(colorPickerOptions, "pink");





