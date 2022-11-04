//https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
//Método addEventListener()

//element.addEventListener(event, handler, options);

/*
event - Nombre del evento, cadena, por ejemplo "click".
handler - Función de devolución de llamada que será llamada cuando ocurra el evento.
options - Objeto de parámetro opcional con ajustes avanzados.
*/

const singleBtn = document.querySelector("#single");

const handleClick = () => {
	console.log("Se realizo un click en el listener y mando un callback")
};

singleBtn.addEventListener("click", handleClick);

const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
	console.log("Primera llamada!");
};

const secondCallback = () => {
	console.log("Segunda llamada!");
};

const thirdCallback = () => {
	console.log("Tercera llamada!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);


//Propiedades Key and Code 
//https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

document.addEventListener("keydown", logMessage);

function logMessage({type, key, code}){
	console.log(`Type: ${type}, key: ${key}, code: ${code}`);
}








