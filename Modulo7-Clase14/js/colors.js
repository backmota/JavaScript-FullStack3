const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectorColor);

/*
Las ventanas emergentes permiten implementar una de las técnicas más útiles, la delegación de eventos. Esto significa que si hay un grupo de elementos cuyos eventos deben ser manejados de la misma manera, se añade un manejador a su ancestro común, en lugar de añadir un manejador a cada elemento. Utilizando la propiedad event.target, es posible obtener una referencia al elemento de destino, entender en qué descendiente se produjo el evento, y manejarlo.

Veamos la delegación con un ejemplo. Creamos un elemento <div>, añadimos un número cualquiera de botones, por ejemplo 100, y registramos a cada uno de ellos escuchador de eventos del evento click con la función handleButtonClick.
*/

//Delegación de eventos
function selectorColor(event) {
	//https://developer.mozilla.org/es/docs/Web/API/Node/nodeName
	if(event.target.nodeName !=="BUTTON"){
		return;
	}

	const selectorColor = event.target.dataset.color;
	output.textContent =  `Selected Color: ${selectorColor}`;
	output.style.color = selectorColor;
}

createPaletteItems();

function createPaletteItems(){
	const items = [];

	for (let i=0; i < 1000; i++){
		const color = getRandomColor();
		const item = document.createElement("button");
		item.type = "button";
		item.dataset.color = color;
		item.style.backgroundColor = color;
		item.classList.add("item");
		items.push(item);
	}
	colorPalette.append(...items);
}

function getRandomColor(){
	return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex(){
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
	https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
	return Math.round(Math.random() *256).toString(16).padStart(2,"00");
}










