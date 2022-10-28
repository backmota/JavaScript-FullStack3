//Clases
/*La sintaxis literal del objeto permite crear un único objeto. Pero a menudo es necesario crear muchos objetos del mismo tipo con el mismo conjunto de propiedades, pero con diferentes valores y métodos para interactuar con ellos. Todo esto debe hacerse de forma dinámica, en tiempo de ejecución. Para ello, se utilizan clases, una sintaxis especial de declaración de funciones para crear objetos.


La declaración de la clase comienza con la palabra clave class seguida del nombre de la clase y las llaves, en este caso su cuerpo. Las clases suelen nombrarse con una letra mayúscula, y el propio nombre refleja el tipo de objeto que se crea (sustantivo).
*/
//Constructor de clase
//La clase tiene un método constructor para inicializar una instancia. Si no se declara, se crea un constructor por defecto, una función vacía que no modifica la instancia.

/*
Una clase puede aceptar un gran número de entradas para las propiedades del futuro objeto. Por lo tanto, también es posible aplicarles el patrón de «objeto de parámetro», pasar un único objeto con propiedades lógicamente nombradas, en lugar de un conjunto de argumentos no relacionados.*/

/*
Encapsulación es un concepto que permite ocultar los detalles internos de una clase. El usuario de una clase sólo debe tener acceso a la interfaz pública: el conjunto de propiedades y métodos públicos de la clase.

En las clases, la encapsulación se implementa mediante propiedades privadas, a las que sólo se puede acceder desde dentro de la clase.

Digamos que el correo electrónico de un usuario no debe ser accesible directamente desde el exterior, es decir, debe ser privado. Añadiendo # al nombre de la propiedad, la hacemos privada. La declaración de una propiedad privada antes de la inicialización en el constructor es obligatoria.
*/


class User{
	// Declaración opcional de propiedades públicas
	//name;
	// Declaración obligatoria de propiedades privadas
	#name;
	#email;
	#password;
	// Sintaxis de la declaración de métodos de la clase
	constructor({name, email}){
	// Inicialización de las propiedades de los ejemplares	
		this.#name = name;
		this.#email = email;
		this.#password;
	}

	//Método getEmail
	getEmail(){
		return this.#email;
	}

	getName(){
		return this.#name;
	}

	changeEmail(newEmail){
		this.#email = newEmail;
	}

	setPassword(newPassword){
		this.#password = newPassword;
	}

	/*showPassword(){
		return this.#password;
	}
	*/
}

//const mango = new User("Mango", "mango@email.com");
const mango = new User({
	email: "mango@email.com",
	name: "Mango",
});

console.log(mango);
console.log(mango.getEmail());
mango.changeEmail("mango@gmail.com");
console.log(mango.getEmail());

console.log(mango.email);
console.log(mango.name);

console.log(mango.getName());

mango.setPassword("1234password");

console.log(mango.password);

//console.log(mango.showPassword());

//Getters y Setters
/*
Los Getters y Setters son una sintaxis más corta para declarar métodos que interactúan con las propiedades. Un getter y un setter imitan una propiedad pública normal de la clase, pero permiten cambiar otras propiedades de una manera más conveniente. Un getter se ejecuta cuando se intenta obtener el valor de una propiedad, mientras que un setter se ejecuta cuando se intenta cambiarla.

Los Getters y Setters son buenos para operaciones simples de lectura y cambio de valores de propiedades, especialmente para propiedades privadas como su interfaz pública. No funcionarán con las propiedades que almacenan una matriz o un objeto.*/

class Animal{
	name;
	#age;

	constructor({name, age}){
		this.name = name;
		this.#age = age;
	}

	showAge(){
		return this.#age;
	}

	get age(){
		return this.#age;
	}

	set age(newAge){
		this.#age = newAge;
	}
}

const dog = new Animal({
	name: "Chai",
	age: 0.7,
});

console.log(dog);
console.log(dog.age);
dog.age = 1;
console.log(dog.age);
dog.age = 2;
console.log(dog.age);
console.log(dog.showAge());

//Propiedades estáticas
/*Además de las propiedades públicas y privadas de una instancia futura, una clase puede declarar sus propias propiedades que sólo están disponibles para la clase pero no para sus instancias: las propiedades (static). Estas son útiles para almacenar información relacionada con la propia clase.

Añadiremos a la clase user la propiedad privada role, que define los derechos, por ejemplo, administrador, editor, usuario, etc. Los posibles roles de usuario los almacenaremos como una propiedad estática Roles son un objeto de propiedad.

Las propiedades estáticas se declaran en el cuerpo de la clase. Se añade la palabra clave static antes del nombre de la propiedad.
*/


class Developer{

	static Roles = { 
		ADMIN: "Administrador",
		EDITOR: "editor",
	};

	#email;
  	#role;

  	constructor({email, role}){
  		this.#email = email;
  		this.#role = role;
  	}

  	showEmail(){
  		return console.log(this.#email);
  	}

  	get role(){
  		return this.#role;
  	}

  	set role(newRole){
  		this.#role = newRole;
  	}

}

const mota = new Developer({
	email: "jj.mota.t@goit.com",
	role: Developer.Roles.ADMIN,
});

mota.showEmail();
console.log(mota.Roles);
console.log(Developer.Roles);
console.log(mota.role);





