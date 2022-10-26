const petya = {
	username: "petya",
	showName(){
		console.log(this.username);
	},
};

petya.showName();

const bookShelf = {
  authors: ["Bernard Cornwell", "Robert Sheckley"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
  	console.log(authorName);
  	if(authorName != undefined){
  		this.authors.push(authorName);
  	}
  },
};

console.log(bookShelf.getAuthors());
bookShelf.addAuthor();
console.log(bookShelf.getAuthors());
bookShelf.addAuthor("Tanith Lee");
console.log(bookShelf.getAuthors());

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback){
	console.log(`Tramitamos la solicitud de ${callback}.`);
}

makeMessage(customer.getFullName());

//this en las funciones de flecha
/*
const showThis = () => {
	console.log("this in showThis: ", this);
};

showThis();

const user = {
  username: "Mango",
};

user.ShowContext = showThis;

user.ShowContext();
*/

/*Método call()
foo.call(obj, arg1, arg2, ...)
*/
function greetGuest(greeting){
	console.log(this);
	console.log(greeting);
	//console.log(...arguments[]);
	console.log(`${greeting}, ${this.username}`);
}

const mango = {
  username: "Mango",
};
const poly = {
  username: "Poly",
};

greetGuest.call(mango, "Bienvenidos", "Argumento 2", "Argumento N");

//Método Apply
//foo.apply(obj, [arg1, arg2, ...])

greetGuest.apply(mango, ["Bienvenidos","Argumento 2","Argumento N"]);

//Método bind()
function greet(clientName) {
  return `${clientName}, bienvenidos a «${this.service}».`;
}

const steam = {
  service: "Steam",
};

const steamGreet = greet.bind(steam);

console.log(steamGreet("Otro nombre"));




