/*
En una clase se pueden declarar no sólo métodos de una futura instancia,
 sino también métodos disponibles sólo para la clase, en este caso, 
 métodos estáticos, que pueden ser públicos o privados. 
 La sintaxis es la misma que para las propiedades estáticas, 
 excepto que el valor es un método.
*/

class User {
	//No es necesario declarar propiedades publicas
	//email;
	//name;
	#email;

	static #takenEmails = [];
	//Método estatico
	static isEmailTaken(email){
		return User.#takenEmails.includes(email);
	}

	constructor({email}){
		this.#email = email;
		User.#takenEmails.push(email);
	}
	/*

	Método publico

	getEmail(){
		return this.#email;
	}
	*/
}

const jose = new User({email:"jj@goit.com"});
const mango = new User({email:"mango@email.com"});
//console.log(jose.isEmailTaken("mango@mail.com"));
//console.log(jose.getEmail());
console.log(User.isEmailTaken("jj@goit.com"));
console.log(User.isEmailTaken("poly@emial.com"));
console.log(User.isEmailTaken("mango@email.com"));

//Herencia de clases
//La palabra clave extends permite la herencia de clases, donde una clase (hija, derivada) hereda las propiedades y métodos de otra clase (parental)

/*
class Child extends Parent {

}
*/

/*
En la expresión class Child extends Parent la clase hija Child hereda (extiende) de la clase padre Parent

Esto significa que podemos declarar una clase base que almacena características y métodos comunes para un grupo de clases derivadas que heredan las propiedades y métodos del padre, pero también añaden los suyos propios.

Por ejemplo, una aplicación tiene usuarios con diferentes funciones: administrador, redactor de artículos, gestor de contenidos, etc. Cada tipo de usuario tiene un conjunto de características comunes, como el correo electrónico y la contraseña, pero también hay características únicas

Al hacer clases independientes para cada tipo de usuario, obtenemos una duplicación de propiedades y métodos comunes, y si queremos cambiar, por ejemplo, el nombre de una propiedad, tenemos que pasar por todas las clases, lo cual es inconveniente y consume mucho tiempo.

En su lugar, podemos hacer una clase común User que almacenará un conjunto de propiedades y métodos compartidos, y luego hacer clases para cada tipo de usuario que heredan este conjunto de la clase User. Si necesitas cambiar algo compartido, sólo tienes que cambiar el código de la clase User.
*/

class Admin {
	#email;

	constructor(email){
		this.#email = email;
	}

	get email(){
		return this.#email;
	}

	set email(newEmail){
		this.#email = newEmail;
	}

}

class ContentEditor extends Admin{
	// Cuerpo de la clase ContentEditor
	constructor({email, posts}){
	/*
	Lo primero que hay que hacer en el constructor de la clase hija 
	es llamar a la función especial super(arguments), que es un alias del constructor
	 de la clase padre. De lo contrario,
	  cuando se intente llamar a this en el constructor de la clase hija, 
	  se producirá un error. Cuando llamamos al constructor de la clase padre,
	   le pasamos los argumentos necesarios para inicializar las propiedades.
	*/
		super(email);
		this.posts = posts;
	}

	hello(){
		console.log("Hola Mundo");
	}
}

const editor = new ContentEditor({email: "editor@gmail.com", posts: []});
const admin = new Admin("jjmota@goit.com");

console.log(editor);
console.log(admin);

console.log(editor.email);
console.log(admin.email);

editor.hello();
//admin.hello();



