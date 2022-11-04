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











