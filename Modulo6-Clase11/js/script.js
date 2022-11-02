/*
elem.parentNode - Selecciona el padre de elem.
elem.childNodes - Pseudo-array, almacena todos los elementos hijos, incluyendo los elementos de texto.
elem.children - Pseudo-array, almacena sólo los nodos de los elementos hijos, es decir, los tags que coinciden.
elem.firstChild - Selecciona el primer elemento hijo dentro de elem, incluyendo nodos de texto.
elem.firstElementChild - Selecciona el primer nodo del elemento hijo dentro de elem.
elem.lastChild - Selecciona el último elemento hijo dentro de elem, incluyendo los nodos de texto.
elem.lastElementChild - Selecciona el último nodo de elemento hijo dentro de elem.
elem.previousSibling - Selecciona un elemento "a la izquierda" de elem (su vecino anterior).
elem.previousElementSibling - Selecciona un elemento de nodo «a la izquierda» de elem (su vecino anterior).
elem.nextSibling - Selecciona un elemento "a la derecha" de elem (su siguiente hermano).
elem.nextElementSibling - Selecciona el elemento de nodo «a la derecha» de elem (su siguiente hermano).

console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);
*/

//Búsqueda de elementos
//element.querySelector(selector);
/*Se utiliza si sólo se encuentra un elemento, la mayoría de las veces un elemento único

Devuelve el primer elemento encontrado dentro de elemento, que coincide con el selector CSS selector.
Si no se encuentra nada, regresa a null.


element.querySelectorAll(selector);
Devuelve un pseudo-array de todos los elementos dentro de elemento que satisfacen el selector CSS selector.
Si no se encuentra nada, devuelve un array vacío.
*/

const listWhitId = document.querySelector('#menu');
listWhitId.style.textTransform = 'uppercase';
listWhitId.style.fontSize = '24px';

const listWhitClass = document.querySelector('.menu');

const menuItemsByClass = document.querySelectorAll('.menu-item');
console.log(menuItemsByClass);

menuItemsByClass[0].style.color = 'tomato';


//Script de la pagina About

const message = document.querySelector('#message');
console.log(message.value);










