//https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
/*Otra forma de crear elementos DOM y colocarlos en un árbol es utilizar las cadenas con tags y dejar que el navegador haga todo el trabajo pesado. Este enfoque tiene sus pros y sus contras.

Lectura
La propiedad innerHTML almacena el contenido de un elemento, incluyendo los tags, como una cadena. El valor de retorno es siempre un código HTML válido.
*/

const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);

//Cambio
//La propiedad innerHTML se puede leer y escribir. Si escribe una cadena con tags HTML, el navegador analizará la cadena y las convertirá en elementos válidos y los añadirá al árbol DOM.

title.innerHTML = 'New and <span class="accent">improved</span> title';


const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");
const markup = technologies.map((technology) => `<li class="list-item">${technology}</li>`).join("");

console.log(markup);

list.innerHTML = markup;


