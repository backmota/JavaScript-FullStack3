//Programación basada en prototipos
/*
La POO en JavaScript se basa en la herencia de prototipos. Los objetos pueden encadenarse para que una propiedad que no se encuentre en un objeto buscar automáticamente una propiedad en otra. El enlace es una propiedad especial oculta [[Prototype]] que aparece en la consola del navegador como __proto__.
*/


const animal = {
	legs: 4,
	size: "small",
	bark(){
		console.log("ladrar");
	},
};

const dog = Object.create(animal);
const cat = {};

dog.name = "Chai";

console.log(dog);
console.log(dog.legs);
console.log(dog.size);
dog.bark();
dog.bark();


console.log(dog.hasOwnProperty("legs"));

console.log(animal.isPrototypeOf(dog));
console.log(animal);
console.log(animal.isPrototypeOf(cat));