//Objetos
//Los objetos permiten describir y agrupar las características de una entidad: un usuario, un libro, un producto en una tienda, cualquier cosa. Los objetos también se llaman diccionarios, es decir, contienen términos (propiedades) y sus definiciones (valores).
const book = {
	title: "The Last Kingdom",
	author: "Bernard Cornwell",
	genres: ["historical prose", "adventure"],
	isPublic: true,
	rating: 8.38,
	price: 100,
};

console.log(book);
console.log(book.title);
console.log(book.genres[1]);

const user = {
	name: "Jacques Gluke",
	tag: "jgluke",
	location: {
	   country: "Jamaica",
	   city: "Ocho Rios",
	},
	stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },

}	


console.log(user);
console.log(user.location.country);