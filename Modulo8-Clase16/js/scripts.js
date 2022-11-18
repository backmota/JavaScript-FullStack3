//Almacenamiento web
//Web Storage API

/*Web Storage consiste en el almacenamiento local (localStorage) y el almacenamiento de sesión (sessionStorage). Proporciona una forma de almacenar datos de manera intuitiva en forma de pares clave:valor. Técnicamente sólo se pueden escribir cadenas en el almacenamiento web, pero esto no es un problema si se utilizan métodos de la clase JSON para convertir tipos complejos. No se escriben métodos o funciones de objetos en un repositorio web, sólo datos.

El almacenamiento local (localStorage) es único para cada aplicación web y será el mismo entre las múltiples pestañas en las que se esté ejecutando (aplicación web). Los datos del almacenamiento local no se eliminan ni siquiera cuando se cierra el navegador o se apaga el ordenador. Para eliminarlas es necesario utilizar JavaScript.

El almacenamiento de sesión (sessionStorage) es similar al almacenamiento local, también es único para cada aplicación web, pero la vida de los datos almacenados está limitada por la sesión de la pestaña del navegador. Una vez que el usuario cierra una pestaña o el navegador, los datos se eliminan. En la práctica, el almacenamiento de sesiones se utiliza con mucha menos frecuencia.

*/

//https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

//Almacenamiento local

//Guardar
//Con el método setItem(key, value) se puede añadir una nueva entrada como un conjunto clave:valor.
//https://developer.mozilla.org/es/docs/Web/API/Storage/setItem

let theme = "dark";

localStorage.setItem("ui-theme",theme);
localStorage.setItem("sidebar","expanded");
localStorage.setItem("notification-level","mute");

const settings = {
	themeSite: "dark",
	isAuthenticated: true,
	options: [1, 2, 3],
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
localStorage.setItem("settings", JSON.stringify(settings));

//Lectura
//El método getItem(key) permite leer el registro con la clave key del almacenamiento. Si no hay ningún registro con esta clave en el almacenamiento, el método devuelve a null. Cuando el valor es una cadena simple, no hace falta analizarlo.

const getLocalSettings = localStorage.getItem("settings");
console.log(getLocalSettings);
console.log(settings);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
const parseSettings = JSON.parse(getLocalSettings);
console.log(parseSettings);

//Eliminación
//El método removeItem(key) elimina del almacenamiento el registro ya existente con la clave key.
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem
localStorage.removeItem("ui-theme");

//Elimnación del almacenamiento
//Una operación de limpieza completa del almacenamiento es peligrosa, ya que podría afectar a los registros creados por otros desarrolladores del proyecto. Sin embargo, si quiere eliminar completamente el almacenamiento, llame al método clear().
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear
//localStorage.clear();

const form = document.querySelector("#message-form");
const output = document.querySelector("#output");
const LocalStorage_Key = "Esto es un ejemplo de GoIt";
const message = "Mensaje"
const history = [];

updateOutputDefault();
form.addEventListener("submit", saveMessage);

function saveMessage(evt){
	evt.preventDefault();
	localStorage.setItem(message,form.elements.message.value);
	updateOutput();
	form.reset();
}

function updateOutput(){
	console.log("update");
	output.textContent = localStorage.getItem(message) || "";
	history.push(localStorage.getItem(message));
	console.log(history);
}

function updateOutputDefault(){
	output.textContent = LocalStorage_Key;
}

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const timesZones = {
	MXN: "UTC-6",
	Country1: "UTC-6",
	Country2: "UTC-5",
	Country3: "UTC-4",
	Country4: "UTC-3",
}

save("zone_time","UTC-6");

save("Zonas Horarias", timesZones);

console.log(load("Zonas Horarias"));



