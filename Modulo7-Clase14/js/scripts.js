//Propiedad event.target
/*
Independientemente del lugar en el que captemos el suceso cuando aparezca, siempre podremos saber exactamente dónde se ha producido. El elemento más profundo que desencadena el evento se llama elemento objetivo o fuente y está disponible como event.target.

event.target es una referencia al elemento fuente donde se produjo el evento, no se modifica durante el proceso de superficie.
event.currentTarget es la referencia al elemento actual que fue alcanzado por el revestimiento, sobre el cual se está ejecutando el manejador de eventos.
Si el escuchador de eventos está registrado en el elemento superior, «atrapará» todos los clics que se produzcan dentro, porque los eventos aparecerán antes de ese elemento. Abra la consola en el ejemplo y haga clic, event.target es siempre el elemento original (y más profundo) sobre el que se hizo clic, y event.currentTarget no cambia.
*/

//https://developer.mozilla.org/es/docs/Web/API/EventTarget
//https://developer.mozilla.org/es/docs/Web/API/Event/currentTarget

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", (event) => {
  console.log("Parent click handler");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});

child.addEventListener("click", (event) => {
  console.log("Child click handler");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});

descendant.addEventListener("click", (event) => {
  //Detener el ascenso
  //Normalmente el evento aparecerá en el elemento window, llamando a todos los manejadores en su ruta. Pero cualquier gestor intermedio puede decidir que el evento es manejado completamente y se detiene el popping llamando al método stopPropagation().
  //https://developer.mozilla.org/es/docs/Web/API/Event/stopPropagation
  event.stopPropagation();
  console.log("Descendant click handler");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});