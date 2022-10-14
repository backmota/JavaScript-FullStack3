const car = {
	motor: "v8",
	model: {
		age: 2022,
		name: "chevy",
	},
	brand: "Chevrolet",
	doors: 5,
	price: 20000,
};

console.log(car.model.age);
console.log(car.model.name);

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
  //key: "Pass123",

};

const bookTitle = book["title"];
console.log(bookTitle);
const bookGenres = book["genres"];
console.log(bookGenres[1]);

const bookT = book.title;
console.log(bookT);

const bookAge = book["age"];
console.log(bookAge);

book.title = "Paola";

console.log(book);

book.year = 2022;
console.log(book);

const name = "Henry Sibola";
const age = 25;

/*
const user = {
	Nombre: name,
	Edad: age,
};
*/

const user = {
	name,
	age,
};
console.log(user.name); 
console.log(user.age);

const bookShelf = {
	books: ["The Last Kingdom", "Dream Guardian"],
	//Esta función regresa los libros de bookshelf
	getBooks(){
		return this.books;
	},
	addBook(bookName = "Sin titulo"){
		console.log("Este método agregará un nuevo libro a la propiedad books " + bookName);
		this.books.push(bookName);
	},
	removeBook(bookName){
		const bookIndex = this.books.indexOf(bookName);
		this.books.splice(bookIndex, 1);
	},
};

console.log(bookShelf.getBooks());
bookShelf.addBook();
bookShelf.addBook("Harry Potter");
bookShelf.addBook("The Lord Of The Rings");
console.log(bookShelf.getBooks());
bookShelf.removeBook("Sin titulo");
console.log(bookShelf.getBooks());

//Ciclo for...in
//Para enumerar los objetos se utiliza un ciclo especial for...in, en donde se enumeran las claves del objeto object.
/*
for (key in object) {
  // instrucciones
}
*/

for (const key in book){
	// Llave
	 console.log(key);

	 // Valor de una propiedad con esta clave
	 console.log(book[key]);
};

//hasOwnProperty()

const animal = {
  legs: 4,
  size: "small",
};

const dog = Object.create(animal);
console.log(dog);

dog.name = "Mango";

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4
console.log(dog.size);

console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("size"));

const cat = Object.create(animal);

console.log(cat.legs);

for (const key in book){
	if (book.hasOwnProperty(key)) {
	    console.log(key);
	    console.log(book[key]);
	  }
};

for (const key in dog){
	if (dog.hasOwnProperty(key)) {
	    console.log(key);
	    console.log(dog[key]);
	  }
};

const keys = Object.keys(book);
const keysAnimal = Object.keys(dog);

console.log(keys);
console.log(keysAnimal);


for (const key of keys) {
  // Clave
  console.log(key);
  // Valor de la propiedad
  console.log(book[key]);
}

const values = Object.values(book);
console.log(values);

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};


const scores = Object.values(goods);
console.log(scores);

let total = 0;

for (const score of scores){
	total += score;
}

console.log(total);


const entries = Object.entries(book);
console.log(entries);
console.log(entries[0][0]);
//Matriz multinivel
const matriz = [[1,0,1],[0,1,0],[1,1,[0,0,1]]];
console.log(matriz);
console.log(matriz[1]);
console.log(matriz[1][1]);
console.log(matriz[2][2][2]);

const entriesCar = Object.entries(car);
console.log(entriesCar);
console.log(entriesCar[1]);
console.log(entriesCar[1][1]);

const books = [
	{
	    title: "The Last Kingdom",
	    author: "Bernard Cornwell",
	    rating: 8.38,
	},
	{
	    title: "En la orilla de aguas tranquilas",
	    author: "Robert Sheckley",
	    rating: 8.51,
	},
	{
	    title: "El sueño de un hombre divertido",
	    author: "Fiódor Dostoyevski",
	    rating: 7.75,
	},
];

for (const book of books){
	console.log(book.title);
	console.log(book.author);
	console.log(book.rating);
}

const bookNames = [];

for (const book of books){
	bookNames.push(book.title);
}

console.log(bookNames);




