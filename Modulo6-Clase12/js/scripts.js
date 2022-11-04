//https://developer.mozilla.org/es/docs/Web/API/Node/textContent
/*
Propiedad textContent

elem.textContent devuelve el contenido textual dentro de un elemento. Se puede leer y escribir. No importa lo que se pase a textContent, los datos siempre se escribirán como texto.
*/

const text = document.querySelector(".article-text");
console.log(text.textContent); // text adentro del article text 

const title = document.querySelector(".article-title");
console.log(title.textContent);

const name = prompt("Cómo te llamas?");

title.textContent = `Welcome ${name}`;