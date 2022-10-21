// Enfoque imperativo
const numbers = [1, 2, 3, 4, 5, 6, 10, 20 , 30];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); // [4, 5]

// Enfoque declarativo
//Ejemplo de la documentación de Mozilla, con el método Filter
/*var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])*/

const result = numbers.filter(number => number > 3 && number < 20);

console.log(result);