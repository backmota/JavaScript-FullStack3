const name = "algo";

const user = {
	name: "Jacques",
	tag: "jgluke",
	stats: {
		followers: 5000,
		views: 4820,
		likes: 1308,
	},
};

const userTwo = {
	name: "Jacques",
	tag: "jgluke",
	stats: {
		followers: 5000,
		views: 4820,
		likes: 1308,
	},
};

console.log(userTwo["name"]);

const {
	name: userName,
	tag,
	unfollowers = 0,
	stats: {followers, views: userViews, likes: userLikes = 0},
} = user;

const {
	name: userNameTwo,
	tag: userTag,
	unfollowersUserTwo = 0,
	stats: {followers: followersUserTwo, views: userViewsTwo, likes: userLikesTwo = 0},
} = user;

console.log(userName);
console.log(tag);
console.log(followers);
console.log(unfollowers);
console.log(userViews);
console.log(userLikes);

//Desestructuración de arrays

/*
La asignación destructiva también puede utilizarse para los arrays, pero con algunas características especiales.

En lugar de llaves {}, se utilizan corchetes [].
Las variables especificadas entre corchetes [] se asignarán secuencialmente a los valores de los elementos del array.
Por ejemplo, tienes un array de colores del que quieres obtener los valores de cada componente de color en variables separadas.
*/

let colorRed, colorGreen, colorBlue;

const rgb = [197, 198, 255];
const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`);

[colorRed, colorGreen, colorBlue, alfa = 0.3] = rgb;

console.log(`R:${colorRed},G:${colorGreen},B:${colorBlue},A:${alfa}`);

const [selectColorRed, ...colors] = rgb;

const [selectColorBlue, ...otherColors] = colors;

console.log(selectColorRed);
console.log(colors);

console.log(otherColors);

//Pattern «Objeto de los parámetros»
/*Si una función acepta más de dos o tres argumentos, es muy fácil confundir qué secuencia pasar. Esto da lugar a un código muy poco obvio en el punto en el que se llama.
*/
//Primero se crear el objeto

const book = {};

//Cuarto se invoca la función y se crea el objeto book
function doStuffWithBook(book) {
	console.log(book.title);
	console.log(book.numberOfPages);
//Quinto nos regresa el valor book.title	
	return book.title;
}

//Se crea el atributo title al objeto book
//Tercero se manda a llamar la función doStuffWithBook y se le envían los parametros con un patron de diseño
book.name = doStuffWithBook({
	title: "The Last Kingdom",
	numberOfPages: 736,
	downloads: 10283,
	rating: 8.38,
	isPublic: true,
});


console.log(book.name);

