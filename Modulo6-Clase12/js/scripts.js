//https://developer.mozilla.org/es/docs/Web/API/Node/textContent
/*
Propiedad textContent

elem.textContent devuelve el contenido textual dentro de un elemento. Se puede leer y escribir. No importa lo que se pase a textContent, los datos siempre se escribirán como texto.
*/

const text = document.querySelector(".article-text");
console.log(text.textContent); // text adentro del article text 

const title = document.querySelector(".article-title");
console.log(title.textContent);

//const name = prompt("Cómo te llamas?");

//title.textContent = `Welcome ${name}`;

//https://developer.mozilla.org/es/docs/Web/API/Element/classList

/*

La propiedad classList almacena un objeto con métodos para trabajar con las clases de elementos.

elem.classList.contains(cls) - Devuelve true o false dependiendo de si el elemento tiene la clase cls.
elem.classList.add(cls) - Añade la clase cls a la lista de clases del elemento.
elem.classList.remove(cls) - Elimina la clase cls de la lista de clases del elemento.
elem.classList.toggle(cls) - Si no hay clase cls, entonces la añade, si la hay, la elimina.
elem.classList.replace(oldClass, newClass) - Sustituye la clase existente oldClass por la especificada newClass.

*/


const content = document.querySelector("#paragraph");

console.log(content.classList);

console.log(content.classList.contains("red"));

console.log(content.classList.contains("blue"));


content.classList.remove("big");

console.log(content.classList);

content.classList.add("is-hidden");

console.log(content.classList);

content.classList.toggle("is-hidden");// Al exisitr is hidden la elimina
console.log(content.classList);
content.classList.toggle("is-hidden");//Al no existir lo crea
content.classList.toggle("is-hidden");//Vuelve a eliminar is hidden

content.classList.replace("red","blue");
console.log(content.classList);

const body = document.querySelector(".body");
body.classList.replace("body","dark-mode");
body.classList.replace("dark-mode","body");

//Propiedad style
/*
Se utiliza para leer y modificar los estilos en línea. 
Devuelve un objeto CSSStyleDeclaration que contiene una lista de todas las propiedades
 definidas en los estilos en línea del elemento solamente, no todo el CSS. 
 Cuando se escriben, las propiedades se escriben en camelCase, es decir, 
 background-color se convierte en element.style.backgroundColor, etc.
*/
//const title = document.querySelector(".article-title");

title.style.backgroundColor = "teal";
title.style.fontSize = "24px";

//Atributos

/*
https://developer.mozilla.org/es/docs/Web/API/Element/hasAttribute
https://developer.mozilla.org/es/docs/Web/API/Element/getAttribute
https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute
https://developer.mozilla.org/es/docs/Web/API/Element/removeAttribute
https://developer.mozilla.org/es/docs/Web/API/Element/attributes


Los elementos del DOM corresponden a los tags HTML que tienen atributos de texto. El acceso a los atributos se realiza mediante métodos estándar. Estos métodos funcionan con el valor, que se encuentra en el HTML.

elem.hasAttribute(name) - Comprueba el atributo, devuelve true o false.
elem.getAttribute(name) - Obtiene el valor del atributo y lo devuelve
elem.setAttribute(name, value) - Establece el atributo.
elem.removeAttribute(name) - Elimina el atributo.
elem.attributes - propiedad, devuelve el objeto de todos los atributos del elemento.
*/

const image = document.querySelector(".image");

console.log(image.attributes);

console.log(image.hasAttribute("src"));
console.log(image.hasAttribute("href"));

console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));
console.log(image.getAttribute("href"));

image.setAttribute("alt", "Javascript is Amazing");
//console.log(image.getAttribute("alt"));
//image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png");

//image.setAttribute("alt", "Tux, mascota de Linux");
//console.log(image.getAttribute("alt"));

//Data Set - data-atributos
//https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes

/*
Permite añadir un atributo arbitrario a un tag y recuperar su valor en JavaScript. Esta función se utiliza para simplificar la escritura de código, por ejemplo, vinculando datos y marcas mediante un identificador único, especificando el tipo de acción de un botón, etc.*/

const saveBtn = document.querySelector('.editor button[data-action="save"]');
console.log(saveBtn);
console.log(saveBtn.dataset.action);

const closeBtn = document.querySelector('.editor button[data-action="close"]');
console.log(closeBtn);
console.log(closeBtn.dataset.action);

const dishes = document.querySelectorAll(".dishes > li");
console.log(dishes);
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
dishes.forEach((dish) => {
	console.log(dish.dataset.id);
});


//Creación y eliminación de elementos
/*
La API del DOM no sólo permite seleccionar o modificar los elementos existentes, sino también eliminar y crear nuevos elementos para luego añadirlos al documento.

https://developer.mozilla.org/es/docs/Web/API/Document/createElement

document.createElement(tagName);
*/

const heading = document.createElement("h1");
console.log(heading);

heading.textContent = "Este es un titulo";

console.log(heading);

const newImage = document.createElement("img");
newImage.src = "https://placeimg.com/640/480/nature";
newImage.alt = "Nature";

console.log(newImage);

//Anexo de información 

/*
Para que el elemento creado se muestre en la página, debe añadirse a un elemento existente en el árbol DOM. Digamos que añadimos a algún elemento elemento, existen métodos para ello.

element.append(el1, el2, ...) - Añade uno o más elementos después de todos los hijos del elemento.
element.prepend(el1, el2, ...) - Añade uno o más elementos antes de todos los hijos del elemento elemento.
element.after(el1, el2, ...) - Añade uno o más elementos después del elemento element.
element.before(el1, el2, ...) - Añade uno o más elementos antes del elemento element.
En todos estos métodos, el son elementos o cadenas, en cualquier combinación y cantidad. Las cadenas se añaden como nodos de texto.


https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
*/


const listNames = document.querySelector(".usernames");
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
console.log(lastItem); 
listNames.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";

listNames.prepend(firstItem);

listNames.prepend(heading);
listNames.append(newImage);


// Adds a title before the list
const newTitle = document.createElement("h2");
newTitle.textContent = "USERNAMES";
listNames.before(newTitle);

const newText = document.createElement("p");
newText.textContent =  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
listNames.after(newText)

//Remove
//https://developer.mozilla.org/es/docs/Web/API/Node/removeChild
const deleteText = document.querySelector(".article-text");
deleteText.remove();








































